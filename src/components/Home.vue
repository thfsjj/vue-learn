<template>
  <div id="app">
 <app-header v-bind:titles="titles"  v-on:titleChange="updateTitle($event)"></app-header>
 <users v-bind:users="users"></users>
  <div  class="demo">
    <button 
    v-for="(tab,index) in tabs" :key="index"
     v-bind:class="['tab-button', { active: currentTab === tab }]"
      v-on:click="currentTab = tab"
    >{{tab}}</button>
    <component v-bind:is="currentTabComponent"  class="tab"></component>
  </div>
    <router-view/>
   <router-link to="/email/nisnsd">EMAIL</router-link>
  <button @click="goPage">另外的</button>
  <div id="demo">
  <button v-on:click="show = !show">
    Toggle
  </button>
  <transition name="fade">
    <p v-if="show">hello</p>
  </transition>
</div>
  </div>
</template>

<script>
  // 局部注册组件
import Users from './Users'
import Header from './Header'
import Footer from './Footer'
import Post from './post'
import Hotel from './Hotel'
import Archive from './archive'

export default {
  name: 'App',
  data(){
    return {
      users:[
   
       ],
       titles:'传递的是一个值ssssssssss',
        userProfile: {
         a: 1,
         b:2,
         c:3
      },
       currentTab: 'Home',
       tabs: ['Home', 'Post', 'Archive'],
       show:true
    }
  },
  methods:{
    updateTitle(title){
      this.titles=title
    },
    addArr(){
    this.$set(this.userProfile, 'age1', 28)
    },
    goPage(){
      this.$router.push({name:'HelloWorld'})
    }
  },
  // 计算属性  动态组件
   computed: {
    currentTabComponent: function () {
      return 'tab-' + this.currentTab.toLowerCase()
    }
  },
  components:{
    Users,
    "app-header":Header,
    "app-footer":Footer,
    "tab-home":Hotel,
    "tab-post":Post,
    "tab-archive":Archive
  },
  created(){
      this.$http.get('http://jsonplaceholder.typicode.com/users').then((data)=>{
          this.users=data.data;
      })
  }
}
</script>

<style >
  .tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .6s
}
.fade-enter, .fade-leave-to {
  opacity: 0.6;
}
</style>
