<template>
  <div>
      <h3>filter todo</h3>
      <select name="" id="" v-model="limit" @change="filterTodo(limit)">
          <option value="200">200</option>
           <option value="100">2100</option>
            <option value="50">50</option>
             <option value="10">10</option>
              <option value="5">5</option>
      </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name:'filterTodo',
    data(){
        return {
            limit:100
        }
    },
    methods:{
        ...mapActions(['filterTodo'])
    }

}
</script>

<style scoped>
    select{
        padding:10px;
        border:1px solid #41b833;
    }
</style>