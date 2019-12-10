<template>
  <div class="hello">
   nih 少时诵诗书所
 <div>
 
 </div>
   <router-link to="/app/email">email</router-link>
   <router-link to="/app/files">files</router-link>
    <router-view></router-view>
  <router-view name="a"></router-view>
  
  </div>
</template>

<script>
import storeConfig from '@/store/store'
import {mapState} from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
     
    }
  },
  // 通过计算属性获取vuex中的数据
  computed:{
   
      
    
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

