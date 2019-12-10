import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from "@/components/Home"
import Todolist from "@/components/Todolist"
import Email from "@/components/Email"
import Post from "@/components/post"
import Todos from '@/components/Todos'
import Bank from '@/views/Bank'
import AddSubject from '@/views/AddSubject'
import Shopcart from '@/views/shopcart'
import Some from '@/views/some'



Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path:'/',
      name:'some',
      component:Some
     
    },
    {
      path:'/shopcart',
      name:'Shopcart',
      component:Shopcart
    },
    {
      path:'/addSubject',
      name:'Addsubject',
      component:AddSubject
    },
    {
      path:"/email/:name",
      name:"Email",
      component:Email,
      props:true
    },
     
    {
      path:'/app',
      name:'HelloWorld',
      component:HelloWorld,
      children:[
        {
          path:'email',
          component:Email
        },
        {
          path:'files',
          components:{
            default:Post,
            a:Todolist
          }
        }
      ]
    },

    {
      path:'/todolist',
      name:'Todoist',
      component:Todolist,
      alias:'/hotel'
    },
    {
      path:'/goHome',
      redirect:'/'
    }

    
    
    

  ],
  mode:"history"
})
