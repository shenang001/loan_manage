import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView'
import store from '@/store'

// import { userInfo } from '@/apis/user'
// import router from '@/router/index'
Vue.use(VueRouter)

if(localStorage.getItem('token')){
  store.dispatch('getMenuList')
}
// 针对ElementUI导航栏中重复导航报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  // 路由重定向
 {
  path:'/',
  redirect:'/login',
  component:LoginView
 },
 {
  path:'/login',
  name:'login',
  component:()=> import('../views/LoginView.vue')
 },
 {
  path:'/',
  redirect:'/home',
  meta:{
    title:'首页'
  },
  component:()=>import('../layout/Layout.vue'),
  children:[{
    path:'/home',
    name:'home',
    component:()=>import('../views/HomeView.vue'),

  },     
  ]
 },
//#region 
//  {
//   path:'/loan-input',
//   redirect:'/loan-input/index',
//   component:()=>import('../layout/Layout.vue'),
//   children:[
//     { meta:{
//       title:'贷款申请'
//     },
//       path:'/loan-input/index',
//       name:"loan-input",
//       component:()=> import('../views/loan/IndexView.vue')

//     }
//   ]
// },
// {
//   path:'/application-manage',
//   meta:{
//     title:'申请管理'
//   },
//   redirect:'/application-manage/index',
//   component:()=> import('@/layout/Layout.vue'),
//   children:[
//     {
//       path:'/application-manage/index',
//       name:'申请列表',
//       meta:
//       {
//         title:'申请列表'
//     },
//     component:()=>import('@/views/application-manage/IndexView.vue')
//   }
//   ]
// },
// {
//   path:'/loan-approve',
//   meta:{
//     title:'贷款审批'
//   },
//   redirect:'/loan-approve/first',
//   component:()=> import('@/layout/Layout.vue'),
//   children:[
//     {
//       path:'/loan-approve/first',
//       name:'loan-approve/first',
//       meta:
//       {
//         title:'初审'
//     },
//     component:()=>import('@/views/loan-approve/FirstView.vue')
//   },
//   {
//     path:'/loan-approve/end',
//     name:'loan-approve/end',
//     meta:
//     {
//       title:'终审'
//   },
//   component:()=>import('@/views/loan-approve/EndView.vue')
// }
//   ]
// },
// {
//   path:'/contract-manage',
//   redirect:'/contract-manage/index',
//   meta:{
//     title:'合同管理'
//   },
//   component:()=>import('@/layout/Layout.vue'),
//   children:[
//     {
//       path:'/contract-manage/index',
//       name:'contract-manage',
//       component:()=>import('@/views/contract-manage/IndexView.vue'),
//       meta:{
//         title:'合同列表',
//       }
//     }
//   ]
// },
// // 权限管理
// {
//   path:'/promission',
//   redirect:'/promission/create',
//   meta:{
//     title:'权限管理'
//   },
//   component:()=>import('@/layout/Layout.vue'),
//   children:[
//     {
//       path:'/promission/create',
//       name:'promission-create',
//       component:()=>import('@/views/promission/CreateView.vue'),
//       meta:{
//         title:'创建管理员',
//       }
//     },
//     {
//       path:'/promission/index',
//       name:'promission-index',
//       component:()=>import('@/views/promission/IndexView.vue'),
//       meta:{
//         title:'列表展示',
//       }
//     }
//   ]
// },
//#endregion
]

const router = new VueRouter({
  // mode: 'hash',
  // base: process.env.BASE_URL,
  routes
})

export default router
