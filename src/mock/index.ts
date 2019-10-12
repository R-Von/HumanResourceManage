import Mock from 'mockjs'

console.log('mock mounting')

require('./info')

Mock.setup({
  timeout:800
})


console.log('mock mounted')


