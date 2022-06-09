import Vue from 'vue'
import Router from 'vue-router'
import Login from '../view/Login'



Vue.use(Router)

 const router = new Router({
  mode:'history',
  routes: [
    
    {
        path:'/',
        name:'login',
        meta:{
          layout : 'login-layout'
        },
        component: Login
      },
      {
        path:'/dashboard',
        name:'dashboard',
        meta:{
          layout : 'dashboard-layout'
        },
        component: () => import('../view/Dashboard.vue')
    },
    
   
  ]
  
})

// router.beforeEach((to, from, next) => {

//   let autenticado = sessionStorage.getItem('autenticado')

//   let autorizacion = to.matched.some(record => record.meta.auth)

//     if (autorizacion && !autenticado  ) {
//         const loginpath = window.location.pathname;
//         next({ name: 'login', query: { from: loginpath } });
//     }
//     else {
//         next(); 
//     }
// });

export default router;


