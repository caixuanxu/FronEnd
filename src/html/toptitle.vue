<template>
    <div>
        <span class="backindex" @click="backindex">首页</span>
        <span class="login" @click="login">登录</span>
        <span class="registered" @click="registered">注册</span>
    </div>
</template>

<script>
export default {
    name: "index",
    data () {
        return {

        };
    },
    computed: {
    },
    created () {

    },
    methods: {
        login () {
            this.$emit("loginWindow");
        },
        registered () {
            this.$emit("registeredWindow");
        },
        backindex () {
            this.$emit("backindex");
        }
    }
};
</script>

<style scoped lang="less">
  @import "../css/toptitle";
</style>
