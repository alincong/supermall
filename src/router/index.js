import Vue from "vue"
import VueRouter from "vue-router"

const Home = () => import("views/home/Home");
const Category = () => import("views/category/Category");
const Cart = () => import("views/cart/Cart");
const Profile = () => import("views/profile/Profile");
const Detail = () => import("views/detail/Detail");
const Land = () => import("views/land/Land");


Vue.use(VueRouter);

const routes = [
{
  path: "",
    redirect: "/home"
},
{
  path: "/home",
    component: Home
},
{
  path: "/category",
    component: Category
},
{
  path: "/cart",
    component: Cart
},
{
  path: "/profile",
    component: Profile
},
{
  path: "/detail/:iid",
  component: Detail
},
{
    path: "/land",
    component: Land
},
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router
