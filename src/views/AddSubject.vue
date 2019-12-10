<template>
  <div style="padding:30px 30px">
     <div>
         标题
         <input type="text" v-model="subject.title">
     </div>
     <div>
         解析
         <textarea name="" id="" cols="30" rows="5" v-model="subject.desc"></textarea>
     </div>
     <div>
         类型
         <label for="a">
            <input type="radio" id="a" :value="DAN_XUAN_TI" v-model="subject.type"/>单选题
        </label>
        <label for="b">
            <input type="radio"   id="b" :value="DUO_XUAN_TI" v-model="subject.type"/>多选题
        </label>
        <label for="c">
            <input type="radio"  id="c" :value="PAN_DUAN_TI" v-model="subject.type"/>判断题
        </label>
        <label for="d">
             <input type="radio"  id="d" :value="ZHU_GUAN_TI" v-model="subject.type"/>主观题
        </label>
  
     </div>
    <div>
       答案
        <div v-if="subject.type===DAN_XUAN_TI">          
            <label :for="'a'+i" v-for="(o,i) in subject.options" :key="o.id">
                <input type="radio" id="'a'+i" :value="getOptionsName(i)" v-model="subject.answer"/>{{i | fmtOptionsName}}
             </label>
           
        </div>
         <div v-if="subject.type===DUO_XUAN_TI">   
                 
          <label :for="'a'+i" v-for="(o,i) in subject.options" :key="o.id">
                <input type="checkbox" id="'a'+i" :value="getOptionsName(i)" v-model="subject.answer"/> {{i | fmtOptionsName}}
             </label>
              
              
        </div>
        <div v-if="subject.type===PAN_DUAN_TI">          
            <label for="a1">
                <input type="radio" id="a1" value="0" v-model="subject.answer">√
             </label>
            <label for="b1">
                <input type="radio"   id="b1" value="1" v-model="subject.answer">×
            </label>
           
        </div>
        <div v-if="subject.type===ZHU_GUAN_TI">          
            <textarea name="" id="" cols="30" rows="3" v-model="subject.answer"></textarea>
        </div>
    </div>
        <div v-if="[DAN_XUAN_TI,DUO_XUAN_TI].includes(subject.type)">
            选项
            <div>
                <ul class="options">
                    <li v-for="(o,i) in subject.options" :key="o.id">
                        {{i | fmtOptionsName}}. <input  @input="settext($event,i)"/>
                        <button @click="remove(i)">删除</button> 
                    </li> 
                </ul>
                <button @click="subject.options.push({id:subject.options.length,text:''})">添加选项</button>
            </div>
        </div>
         <hr/>
  <button @click="save">保存</button>
  </div> 
 
</template>

<script>
export default {
    watch:{
        ['subject.type'](val){
           if(val===this.DUO_XUAN_TI){
               this.subject.answer=[];
           }else{
                this.subject.answer="";
           }
           
        }
    },
    data(){
        return {
            subject:{
                    id:0,
                    title:'',
                    content:'',
                    options:[...Array(4)].map((r,i)=>{return {id:i,text:r}}),
                    answer:"",                   
                     type:1,//1单选题 2多选题  3，判断题  4主观题
                    userid:1001,
                    desc:"",//题目解析
                    createtime:'2017-06-03 15:13:21'
                }
        }
    },
    methods:{
        settext(e,i){
            // 赋值
            this.subject.options[i].text=e.target.value;
            this.$set(this.subject.options,i,this.subject.options[i])
        
        },
        remove(i){
            this.subject.options.splice(i,1)
        },
        save(){
            // 提交
            // 把就得拿出来
            // 先判断一下本地缓存里面有没有值，如果有就添加，没有就直接添加，
            let arr=[];
            var str=localStorage.getItem('subjectlist');
            if(str){arr=JSON.parse(str)};
            this.subject.length=arr.length+1;
            this.subject.id=arr.length;
                 arr.push(this.subject);
                  localStorage.setItem('subjectlist',JSON.stringify(arr));
                 this.$router.push('/');
        },
        getOptionsName(i){
            return 'ABCDEFG'[i]
        }
        
    }

}
</script>

<style scoped>
    .options{
        list-style-type: none;
    }
    .options li{
        padding:10px;
    }
</style>