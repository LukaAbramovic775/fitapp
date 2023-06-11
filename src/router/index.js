import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
    {
      path: '',
      name: 'posts',
      component: () => import(/* webpackChunkName: "post" */
        '../views/Posts.vue')
    },
    {
      path: 'newpost',
      name: 'newpost',
      component: () => import(/* webpackChunkName: "post" */
        '../views/NewPost.vue')
    },
    {
      path: 'post/:id',
      props: true, // važno da nam se puni "id" kao parametar komponente"PostDetail.vue"
      name: 'post-detail',
      component: () => import(/* webpackChunkName: "post-detail" */
        '../views/PostDetail.vue')
    }
  ]
},
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Signup.vue')
  },
  {
    path: '/publish',
    name: 'Publish',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Publish.vue')
  },
  {
    path: '/body muscles',
    name: 'Body Muscles',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Body Muscles.vue')
  },
  {
    path: '/exercises',
    name: 'Exercises',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Exercises.vue')
  },
]

const router = new VueRouter({
             mode: "history",
             base: process.env.BASE_URL,
             routes,
});


router.beforeEach((to, from, next) =>{
console.log("stara ruta", from.name, "->", to.name, "korisnik", store.currentUser)

const noUser=store.currentUser== null;

if (noUser && to.meta.needsUser) {
next("login");
}

else {
  next();
}
});

export default router;
