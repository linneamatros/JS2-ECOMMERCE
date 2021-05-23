import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import ProductDetails from '../views/ProductDetails.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
// import UserSettings from '../views/UserSettings.vue'
// import store from '@/store'
import NotFound from '../views/NotFound.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  // {
  //   path: '/user',
  //   name: 'UserSettings',
  //   component: UserSettings,
  //   meta: { authorize: true }
  // },
  {
    path: '/products',
    name: 'Products',
    component: Products

  },
  {
    path: '/products/details/:id',
    name: 'ProductDetails',
    component: ProductDetails,
    props: true
  },
 
{
  path: '*',
  name: '404',
  component: NotFound
},


]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {

//   const { authorize } = to.meta
//   const loggedIn = store.getters.loggedIn

//   if(authorize) {
//     if(!loggedIn) {
//       next({ path: '/login', query: { redirect: to.fullPath } })
//     } else {
//       next()
//     }
//   }
//   next()
// })

export default router