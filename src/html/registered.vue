<template>
      <div class="loginBox registered" >
        <span class="the-font">注册</span>
        <div class="login-input-wrap">
          <span class="username-icon"></span>
          <input class="input-box" placeholder="请输入账号" v-model="username" @blur="repeatUsername">
          <el-alert
            :title="usernamePrompt"
            :type="iconType"
            show-icon
            class="prompttest"
            v-show="isPrompt"
            closable
            @close="closeUsername"
          >
          </el-alert>
        </div>
        <div class="login-input-wrap">
          <span class="password-icon"></span>
          <input class="input-box" placeholder="请输入密码" type="password" v-model="password">
        </div>
        <div class="login-input-wrap">
          <span class="password-icon"></span>
          <input class="input-box" placeholder="请再次输入密码" type="password" v-model="passwordAgain" @blur="twoPassword">
          <el-alert
            title="密码不一致"
            type="error"
            show-icon
            class="prompttest"
            v-show="isPromptPassword"
            closable
            @close="closePrompt"
          >
          </el-alert>
        </div>
        <div class="login-input-wrap">
          <span class="username-icon phone"></span>
          <input class="input-box" placeholder="请输入手机号"  v-model="phone"/>
        </div>
        <div class="loginButtonDiv">
          <span class="loginButton" @click="registered">注册</span>
        </div>
      </div>
</template>

<script>
let commonAjax = require("../js/util/commonAjax");
export default {
    name: "registered",
    data () {
        return {
            iconType: "",
            usernamePrompt: "",
            username: "",
            password: "",
            passwordAgain: "",
            phone: "",
            isPrompt: false,
            isPromptPassword: false
        };
    },
    computed: {
    },
    created () {

    },
    methods: {
        closePrompt () {
            this.isPromptPassword = false;
        },
        twoPassword () {
            if (this.password !== this.passwordAgain) {
                this.isPromptPassword = true;
            } else {
                this.isPromptPassword = false;
            }
            console.log(2321);
        },
        closeUsername () {
            this.isPrompt = false;
        },
        registered () {
            let target = encodeURI("/user/registered");
            let data = {
                "username": this.username,
                "password": this.password,
                "phone": this.phone,
                "page": target,
                "method": "POST"
            };
            commonAjax.call(this, data).then(response => {
                if (response.body) {
                    if (response.body.status === 200) {
                        this.$message({
                            message: "注册成功",
                            type: "success"
                        });
                    } else {
                        this.$message({
                            message: response.body.msg,
                            type: "error"
                        });
                    }
                }
            });
        },
        repeatUsername () {
            if (this.username === "") {
                this.usernamePrompt = "账户不为空";
                this.iconType = "error";
                return;
            }
            if (this.password !== this.passwordAgain) {
                this.isPromptPassword = true;
                return;
            }
            let target = encodeURI("/user/repeatUsername");
            let data = {
                "username": this.username,
                "page": target,
                "method": "POST"
            };
            commonAjax.call(this, data).then(response => {
                if (response.body) {
                    if (response.body.status === 200) {
                        this.isPrompt = true;
                        this.usernamePrompt = "可进行注册";
                        this.iconType = "success";
                    } else {
                        this.isPrompt = true;
                        this.usernamePrompt = "账户已存在";
                        this.iconType = "warning";
                    }
                }
            });
        }
    }
};
</script>

<style scoped lang="less">
  @import "../css/login";
  @import "../css/registered";
</style>
