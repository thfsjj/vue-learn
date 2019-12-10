<template>
    <div>
          <addTodo/>
           <filterTodo/>
        <h3>Todos</h3>

        <div class="todos">
            <div class="todo" v-for="todo in todos" :key="todo.id">
                {{todo.title}}
                <span class="fa fa-trash-o fa-lg" @click="deleteTodo(todo.id)"></span>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
import addTodo from '@/components/addTodo'
import filterTodo from '@/components/filterTodo'
export default {
    name:'todos',
    components:{
        addTodo,
        filterTodo
    },
    computed:{
       ...mapGetters({todos:'getAllTodos'})
    },
    data(){
        return{
         
        }
       
    },
    methods:{
        ...mapActions(['getAllTodos','deleteTodo'])
       
    },
    created(){
        this.getAllTodos();
    }
}
</script>

<style scoped>
h3{
     padding:10px;
    margin:0px;
}
   .todos{
       display:grid;
       grid-template-columns: repeat(3,1fr);
       grid-gap:1rem;
   }
   .todo{
       background: #41b833;
       padding:10px;
       border:1px solid #41b833;
         border-radius: 5px;
         position: relative;
         cursor: pointer;
         color:white;
   }

   span{
       display: absolute;
       width:10px;
       height:10px;
       bottom:15px;
       right:15px;
       color:tomato;


   }
</style>