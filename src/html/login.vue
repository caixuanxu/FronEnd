<template>
      <div class="loginBox" >
        <span class="the-font">登录</span>
        <div class="login-input-wrap">
          <span class="username-icon"></span>
          <input class="input-box" placeholder="请输入账号" v-model="username"/>
        </div>
        <div class="login-input-wrap">
          <span class="password-icon"></span>
          <input class="input-box" placeholder="请输入密码" type="password" v-model="password"/>
        </div>
        <div class="loginButtonDiv">
          <span class="loginButton" @click="login">登录</span>
        </div>
      </div>
</template>

<script>
let commonAjax = require("../js/util/commonAjax");
let storageUtil = require("../js/util/storageUtil");
export default {
    name: "login",
    data () {
        return {
            username: "",
            password: ""
        };
    },
    computed: {
    },
    created () {

    },
    methods: {
        login () {
            let target = encodeURI("/user/login");
            let data = {
                "username": this.username,
                "password": this.password,
                "page": target,
                "method": "POST"
            };
            commonAjax.call(this, data).then(response => {
                if (response.body) {
                    if (response.body.status === 200) {
                        this.$message({
                            message: "登录成功",
                            type: "success"
                        });
                        storageUtil.setSession("token", response.body.data.token);
                    } else if (response.body.status === 400) {
                        this.$message({
                            message: response.body.msg,
                            type: "error"
                        });
                    }
                }
            });
        }
    }
};
</script>

<style scoped lang="less">
  @import "../css/login";

</style>
