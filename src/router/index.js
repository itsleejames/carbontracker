import { createRouter, createWebHistory } from "vue-router";
import Home from "@/Pages/Home.vue";
import RegisterPage from "@/Pages/RegisterPage.vue";
import UserLogin from "@/Pages/UserLogin.vue"; // Ensure this path matches your file structure

import UserProfile from "@/Pages/UserProfile.vue";


import ViewStaffList from "@/Pages/ViewStaffList.vue";
import Categories from "@/Pages/Categories.vue";




const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },




    {

    },


    { path: "/userprofile", component: UserProfile },
    { path: "/Categories", component: Categories },


    { path: "/ViewStaffList", component: ViewStaffList },
    {
        path: "/register",
        name: "Register",
        component: RegisterPage,
    },

    {
        path: "/login",
        name: "Login",
        component: UserLogin,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
