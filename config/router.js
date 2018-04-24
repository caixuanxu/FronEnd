import Vue from "vue";
import Router from "vue-router";
import toptitle from "../src/html/toptitle";
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "toptitle",
            component: toptitle
        },
    ]
});
