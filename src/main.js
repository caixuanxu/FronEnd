// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "../config/router";
import VueResource from "vue-resource";
import ElementUI from "element-ui";
import Vuex from "vuex";

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(ElementUI);
Vue.use(router);
Vue.use(Vuex);
Vue.http.options.emulateHTTP = true;
Vue.http.options.emulateJSON = true;
/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    VueResource,
    components: { App },
    template: "<App/>"
});
