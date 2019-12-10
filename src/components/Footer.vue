<template>
  <footer>
      <p>{{title}}</p>
      <h1>{{titles}}</h1>
  </footer>
</template>

<script>
export default {
  name: 'app-header',
  props:{
      titles:{
          type:String,
          require:true
      }
  },
  data () {
    return {
     title:'我是脚部'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    footer{
        background: rgb(173, 18, 77);
        padding:10px;
    }
    p{
        color:#222;
        text-align:center;

    }
</style>

