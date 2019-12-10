<template>
  <div class="ces">
      <h3>测试页面</h3>
      <div>
         <input 
         ref="dateInput"
         v-model="date"
         type="date">
      </div>
  </div>
</template>

<script>

export default {
    name:'some',
    data(){
        return {
            date:null
        }
    },
    mounted:function(){
       
            
            
    },
    methods:{
        getRoot(){
            console.log(this.$root)
        }
    }

}
</script>

<style scoped>
    .ces{
       text-align:center;
    }
</style>