import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from "@/components/Login";
import "materialize-css"
import "materialize-css/dist/css/materialize.min.css"
import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";
import EditTodo from "@/components/EditTodo";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/add-todo',
      name: 'AddTodo',
      component: AddTodo,
      meta: {
        requiresAuth : true
      }
    },
    {
      path: '/list',
      name: 'TodoList',
      component: TodoList
    },
    {
      path: '/edit/:todo_id',
      name: 'EditTodo',
      component: EditTodo
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path :'*',
      component:Index
    }

  ]
});


router.beforeEach((to, from, next) =>{
  let token  = localStorage.getItem("token");
  if (to.matched.some(rec => rec.meta.requiresAuth)) {
    if (token){
      next()
    } else {
      next({name: 'Login'})
    }
  }else {
    if (token){
      next({name: 'Index'})
    } else {
      next()
    }
  }
});



export default router;
