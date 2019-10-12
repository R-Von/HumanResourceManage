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
      <a-button
        type="primary"
        html-type="submit"
        class="login-form-button"
      >
        Log in
      </a-button>
    </a-form-item>
  </a-form>
  <!-- <a-button
      type="primary"
      class="login-form-button"
      @click="logedin"
    >
      Log in
    </a-button> -->
</div>
 
</template>

<script lang="ts">

  import { Vue , Component } from 'vue-property-decorator'
  import { fakeAuth } from '@/utils/fakeAuth'
  import { Action } from 'vuex-class'
  // import { mapActions } from 'vuex'
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

    @Action('Login') Logins:any
    private form:any

    handleSubmit(e){
       e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log(values)
          let info:object = {
            account:values.userName,
            password:values.password
          }

          this.Logins(info).then(res=>{
            this.$router.push('/')
            this.$notification['success']({
              message: '登陆成功',
              description: '欢迎回来',
              duration: 8
            })
          }).catch(err=>{
            console.log(err)
            this.$notification['error']({
              message: '错误',
              description:err.message||'请求出现错误，请稍后再试',
              duration: 4
            })
          })
        }
      })
    }

    private beforeCreate(){
      this.form = this.$form.createForm(this);
    }

  }

</script>

<style lang="scss">

</style>