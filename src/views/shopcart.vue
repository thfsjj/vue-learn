<template>
  <div>
    <router-link to="/">首页</router-link>
     <div>
     
       <ul>
           <transition-group name="list">
         <li v-for="(item,i) in subjectlist" :key="item.id" style="border-bottom:1px dashed #000;padding:10px 0;position:relative">

            <div class="jian" @click="jian(i)">
              -
            </div>  <div class="btn1" @click="up(i) " v-if="i>0">
              ↑
            </div>
              <div  class="btn2" @click="down(i)" v-if="i<subjectlist.length">
             ↓
            </div>

           <h3>{{i+1}}.【{{item.type|fmtSubjectType}}】{{item.title}}</h3>
              <fieldset  v-if="[DAN_XUAN_TI,DUO_XUAN_TI].includes (item.type)">
                  <legend>选项：</legend>
                   <ul class="option">
                     <li v-for="(option,index) in item.options" :key="index">{{index|fmtOptionsName}}.&nbsp;{{option.text}}</li>
                   </ul>
              </fieldset>
               <fieldset>
                  <legend>解析：</legend>
                   <div>{{item.desc}}</div>
              </fieldset>
               
         </li>
          </transition-group>
       </ul>
     
     </div>
  </div>
</template>

<script>
import {mapActions,mapState,mapGetters,mapMutations} from 'vuex'

export default {
    name:'shopcart',
    data(){
      return {

      }
    },
    computed:{
      ...mapState('subject',['subjectlist'])
    },
    methods:{
      ...mapMutations('subject',['jian','up','down'])
    }
}
</script>

<style scoped>
.list-move {
  transition: transform 1s;
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.jian,.btn1,.btn2{
  position:absolute;
       background:red;
        color:white;
        font-size:20px;
        padding:10px 20px;
}
.jian{
  
        right:140px;
        top:10px;
}
.btn1{
 
        right:80px;
        top:10px;
}
.btn2{
 
        right:20px;
        top:10px;
}

</style>