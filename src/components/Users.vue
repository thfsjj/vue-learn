<template>
  <div class="users">
    <h1>hello Users</h1>
   <ul>
       <li v-for="(user,index)  in users" :key="index" @click="user.show=!user.show">
         <h1> {{user.name}}</h1>
          <h1 v-show="user.show"> {{user.job}}</h1>
         </li>
   </ul>
   <button @click="deletUser">删除</button>
  </div>
</template>

<script>
export default {
  name: 'users',
  // props:['users'],
  props:{
    users:{
      type:Array,
      required:true
    }
  },
  data () {
    return {
    
    }
  },
  methods:{
    deletUser:function(){
      this.users.pop();
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.users{
  width:100%;
  max-width:1200px;
  margin:40px auto;
  box-sizing:border-box;
}
ul{
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding:0;
}
li{
  flex-grow:1;
  flex-basis: 200px;
  text-align:center;
  padding:30px;
  border:1px solid #000;
  margin:10px;
}
</style>