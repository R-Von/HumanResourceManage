<template>
  <div class="about">
    <div>
      <h1>关系图</h1>
      <div class="realtion" id="cy" ref="relation">
      
      </div> 
    </div>
  </div>
</template>
<script>

  import cytoscape from 'cytoscape';
  import cola from 'cytoscape-cola';
  import klay from 'cytoscape-klay';
  import { cyStyles , cyDatas } from './Test/cyData.js'
  
  export default {
    data(){
      return{
        style:cyStyles(),
        cydata:cyDatas()
      }
    },
    methods:{
      setChart(){
        let _this = this
        // cytoscape.use(cola)
        cytoscape.use( klay )
        var cy = window.cy = cytoscape({
          container: document.getElementById('cy'),
          style: _this.style,
          elements: _this.cydata,
          layout: { name: 'klay' }
        });

        var params = {
          name: 'cola',
          nodeSpacing: 5,
          edgeLengthVal: 45,
          animate: true,
          randomize: false,
          maxSimulationTime: 1500
        };
      
        cy.edges().forEach(function(n){
          n.on('click', function(e){
            var g = n.data('id');
          });
        })

        cy.nodes().forEach(function(n){
          
          n.on('click', function(e){
            console.log(e)
            console.log(n)
            var g = n.data('name');
            console.log(g)
          });
        });
      }
    },
    mounted() {
     this.setChart()
    }
  }

</script>
<style lang="scss">
  body { 
  font: 14px helvetica neue, helvetica, arial, sans-serif;
}
#app{
  position: relative;
  width:100%;
  height:100%;
}

#cy {
  position: absolute;
  width:1000px;
  height:600px;
  border:2px solid #dedede;
  left: 0;
  top: 100px;
  bottom: 0;
  right:17em;
  canvas{
    left:0
  }
}
</style>