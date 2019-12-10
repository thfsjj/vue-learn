<template>
  <header @click="changeTitle">
      <h1>{{title}}</h1>
      <h2>{{titles}}</h2>
      <div>是是是</div>
      <ul>
          <li>
              <router-link to="/app">去你好</router-link>
          </li>
          <li>
            <router-link to="/todolist">todolist</router-link>
    
          </li>
      </ul>
  </header>
</template>

<script>
export default {
  name: 'app-header',
  props:{
      titles:{
          type:String
      }
  },
  data () {
    return {
     title:'我是头部',
     id:12
    }
  },
  methods:{
      changeTitle(){
        //   this.titles="Change titles"
        this.$emit("titleChange","子向父组件传值")
      }
  },
//   beforeCreate(){
//      alert("组件实例化之前");
//   },
//   created(){
//       alert('实例化完毕，但页面还未显示')
//   },
//     beforeMount(){
//       alert('挂载之前，但页面还未显示')
//   },
//     Mounted(){
//       alert('挂摘之后，方法执行后页面显示')
//   },
//   beforeUpdate(){
//       alert('组件更新之前，页面还未显示')
//   },
//    Updated(){
//       alert('组件更新之厚，页面显示')
//    },
//    beforeDestory(){
//        alert('销毁之前')
//    },
//    destoryed(){
//        alert('销毁之厚')
//    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    header{
        background: lightblue;
        padding:10px;
    }
    h1{
        color:#222;
        text-align:center;

    }
</style>
