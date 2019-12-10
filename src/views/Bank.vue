<template>
  <div>
      <div class="shopcart">
          <router-link to="/shopcart"> {{subjectCount}}</router-link>
         </div>
         <button @click="goChuangPage">创建题目</button>
      <ul style="width:1000px; margin:100px auto">
          <li v-for="(item,i) in list" 
          :key="item.id"
           style="border-bottom:1px dashed #000;padding:10px 0;position:relative"
           >
                <!-- 增加按钮 -->
                <div class="btn" @click="add(item)"> + </div>
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
      </ul>
  </div>
</template>

<script>
import {mapActions,mapState,mapGetters,mapMutations} from 'vuex'
export default {
    //过滤器
     filters:{
    },
    data(){
        return {
            list:[]
        }
    },
    //写个过滤器
    computed:{
       ...mapGetters('subject',['subjectCount'])
   },
    methods:{
        goChuangPage(){
            this.$router.push('/addSubject');
        },
        ...mapMutations('subject',["add"]) 
    },
    created(){
        var str=localStorage.getItem('subjectlist');
        if(str){
            this.list=JSON.parse(str);
        };
        // this.list=JSON.parse(localStorage.getItem('subjectlist')); //把数据请求出来
    }

}
</script>

<style scoped>
    ul{
        list-style-type: none;
    }
    .option li{
        padding:10px;
    }
    .shopcart{
        padding:20px;
        color:white;
        background:#000;
        position: fixed;
        top:40%;
        right:0px;
        font-size:10px;
    }
    .btn{
        position:absolute;
        right:10px;
        top:10px;
       background:red;
        color:white;
        font-size:20px;
        padding:10px 20px;
    }
</style>