import Mock from 'mockjs'

console.log('mock mounting')

require('./user/info')
require('./user/login')

require('./sign/calendar')



Mock.setup({
  timeout:800
})


console.log('mock mounted')


