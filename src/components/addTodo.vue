<template>
  <div>
      <h3>Add todo</h3>
      <form @submit="submit">
          <input type="text" placeholder="add to do" v-model="title">
         <input type="submit" value="submit">
        
      </form>
      
  </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
export default {
    name:'addTodo',
    data(){
        return {
            title:''
        }
    },
    computed:{
         ...mapState(['todos']),
    },
    methods:{
        ...mapActions(['addTodo']),
       
        submit(e){
            e.preventDefault();
            
            const todo ={
                title:this.title,
                complated:false
            };
            this.addTodo(todo)
        }
    }

}
</script>

<style scoped>
    form{
        display: flex;

    }
    input[type="text"]{
        flex:10;
        border:1px solid #41b833;
        padding:10px;
    }
    input[type="submit"]{
        background: #41b833;
         border:1px solid #41b833;
        color:white;
        flex:2;
        cursor:pointer;

    }
</style>