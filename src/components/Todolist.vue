<template>
  <div id="todo-list-example">
  <form v-on:submit.prevent="addNewTodo">
    <label for="new-todo">Add a todo</label>
    <input
      v-model="newTodoText"
      id="new-todo"
      placeholder="E.g. Feed the cat"
    >
    <button>Add</button>
  </form>
  <ul>
    <li
      is="todo-item"
      v-for="(todo,index) in todos"
      v-bind:key="todo.id"
      v-bind:title="todo.title"
      v-bind:index="todo.index"
      v-on:remove="todos.splice(index,1)"
    ></li>
  </ul>
  <router-link to="/goHome">返回</router-link>
</div>
</template>

<script>

import TodoItem from './Todoitem'
    export default {
        name: 'todolist' ,
        data () {
            return {
               
                newTodoText: '',
                todos: [
                
                ],
                nextTodoId:0
                
            }
        },
       
       
        components:{
            "todo-item":TodoItem
        },
        methods: {
            addNewTodo () {
             
             this.todos.push({
                id: this.nextTodoId++,
                title: this.newTodoText
            })
            this.newTodoText = ''
            }
        }
    }


</script>

<style >

</style>