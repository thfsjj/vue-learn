<template>
  <div id="app">
 <!-- <app-header v-bind:titles="titles"  v-on:titleChange="updateTitle($event)"></app-header>
 <users v-bind:users="users"></users>
 <users v-bind:users="users"></users>
 <app-footer  v-bind:titles="titles"></app-footer> -->
    <router-view/>
  </div>
</template>

<script>
  // 局部注册组件
// import Users from './components/Users'
// import Header from './components/Header'
// import Footer from './components/Footer'
export default {
  name: 'App',
  data(){
    return {
      // users:[
      //  {"name":"hmm","job":'student',"show":false},
      //  {"name":"hmm","job":'student',"show":false},
      //  {"name":"hmm","job":'student',"show":false},
      //  {"name":"hmm","job":'student',"show":false},
      //   {"name":"hmm","job":'student',"show":false},
      //  {"name":"hmm","job":'student',"show":false},
      //  {"name":"hmm","job":'student',"show":false},
      //  {"name":"hmm","job":'student',"show":false},
      //   {"name":"hmm","job":'student',"show":false},
      //  {"name":"hmm","job":'student',"show":false},
      //  {"name":"hmm","job":'student',"show":false},
      //  {"name":"hmm","job":'student',"show":false},
      //  ],
      //  titles:'传递的是一个值'
    }
  },
  methods:{
    // updateTitle(title){
    //   this.titles=title
    // }
  },
  components:{
    // Users,
    // "app-header":Header,
    // "app-footer":Footer
  }
}
</script>

<style scoped>
  #app{
    width:1000px;
    margin:0 auto;
    position: relative;
  }
</style>
