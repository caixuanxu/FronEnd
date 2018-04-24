<template>
    <el-container>
      <el-header>
        <toptitle @loginWindow="loginWindow" @registeredWindow="registeredWindow" @backindex="backindex">
        </toptitle>
      </el-header>
      <el-container>
          <login v-show="isLogin"></login>
          <registered v-show="isregistere"></registered>
        <el-aside width="200px" v-show="!isLogin && !isregistere">Aside</el-aside>
        <el-main v-show="!isLogin && !isregistere">
          <waterfall></waterfall>
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
import toptitle from "./html/toptitle";
import login from "./html/login";
import registered from "./html/registered";
import waterfall from "./html/content/waterfall";
export default {
    name: "App",
    data () {
        return {
            isLogin: false,
            isregistere: false
        };
    },
    components: {
        "toptitle": toptitle,
        "login": login,
        "registered": registered,
        "waterfall": waterfall
    },
    computed: {
    },
    created () {

    },
    methods: {
        loginWindow () {
            this.isLogin = true;
            this.isregistere = false;
        },
        registeredWindow () {
            this.isregistere = true;
            this.isLogin = false;
        },
        backindex () {
            location.reload();
        }
    }
};
</script>

<style>
.el-header, .el-footer {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 60px;
  box-shadow:inset 0px -3px 2px 0px #f7f7f7;

}
.el-aside {
  float: left;
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 200px;
  clear:both;
}

.el-main {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 160px;
  overflow: hidden;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
