<template>
<div>
   <a-form
    id="components-form-demo-normal-login"
    :form="form"
    class="login-form"
    @submit="handleSubmit"
  >
    <a-form-item>
      <a-input
        v-decorator="[
          'userName',
          { rules: [{ required: true, message: 'Please input your username!' }] }
        ]"
        placeholder="Username"
      >
        <a-icon
          slot="prefix"
          type="user"
          style="color: rgba(0,0,0,.25)"
        />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
        v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] }
        ]"
        type="password"
        placeholder="Password"
      >
        <a-icon
          slot="prefix"
          type="lock"
          style="color: rgba(0,0,0,.25)"
        />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-checkbox
        v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          }
        ]"
      >
        Remember me
      </a-checkbox>
      <a
        class="login-form-forgot"
        href=""
      >
        Forgot password
      </a>
      <!-- <a-button
        type="primary"
        html-type="submit"
        class="login-form-button"
      >
        Log in
      </a-button> -->
    </a-form-item>
  </a-form>
  <a-button
      type="primary"
      class="login-form-button"
      @click="login"
    >
      Log in
    </a-button>
</div>
 
</template>

<script lang="ts">

  import { Vue , Component } from 'vue-property-decorator'
  import { fakeAuth } from '@/utils/fakeAuth'
  import { mapActions } from 'vuex'
  // import 
  // /**
  //  * 定义登陆表单数据
  //  */
  // interface LoginForm {
  //   Username:string,
  //   Password:string
  // }

  // /**
  //  * 定义表单验证项
  //  */
  // interface LoginRules{
    
  // }


  @Component
  export default class Login extends Vue{
    // private form:any =  this.$form.createForm(this)
    private form:any


    login(){
      // console.log(this.$store)
      let info:object = {
        account:'admin',
        password:'123'
      }
      this.$store.dispatch('Login',info).then(res=>{
        this.$router.push({name:'dashboard'})
        // console.log(res)
        // console.log(this.$store)
      })
    }

    handleSubmit (e:any) {
      
      let info:object = {
        account:'admin',
        password:'123'
      }
      this.$store.dispatch('Login',info).then(res=>{
        // this.$router.push({name:'dashboard'})
        console.log(res)
      })

      // e.preventDefault();
      // this.form.validateFields((err:any, values:object) => {
      //   if (!err) {
      //     let token:string = `9fjew7n2m5as2k`
      //     fakeAuth.setToken(token)
      //     // let redirects:any = this.$route.query.redirect?this.$route.query.redirect:'/'
      //     this.$router.push({name:'dashboard'})

      //   }
      // })
    }

    private beforeCreate(){
      this.form = this.$form.createForm(this);
    }

  }

</script>

<style lang="scss">

</style>