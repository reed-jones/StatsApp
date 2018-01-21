import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// const LandingPage = () => import('../views/LandingPage')
const LandingPage = () =>
  import ('../views/LandingPage')
const Authorization = () =>
  import ('../views/Authorization')
const DashBoard = () =>
  import ('../views/DashBoard')


const router = new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: LandingPage,
    },
    {
      path: '/dash',
      name: 'dashboard',
      component: DashBoard,
      meta: {
        requiresAuth: true
      },
    },
    {
      path: '/login',
      name: 'login',
      component: Authorization,
    },
    {
      path: '/register',
      name: 'register',
      component: Authorization,
      props: {
        RegisterTab: true
      }
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // if (USER DOES NOT EXIST IN LOCAL STORAGE) {
    if (!localStorage.jwtToken) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath,
        },
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router