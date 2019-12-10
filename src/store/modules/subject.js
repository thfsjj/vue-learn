import Vue from 'vue'
export default{
    namespaced:true,
    state:{
        subjectlist:[]
    },
    getters:{
        subjectCount(state){
            return state.subjectlist.length
        }
    },
    mutations:{
        
        add(state,subject){
        //  如果要加入的元素的ID在数组中存在就返回false代码就不往下执行了
            if(state.subjectlist.some(function(item){
                return item.id === subject.id
            })){ 
                return false; 
            }
            // 不包含就执行
            state.subjectlist.push(subject);  
        },
        jian(state,item){
            state.subjectlist.splice(item,1)
        },
        up(state,item){
           let curr = state.subjectlist[item];
        Vue.set(state.subjectlist,item,state.subjectlist[item-1]);
       Vue.set(state.subjectlist,item-1,curr);


        },
        down(state,item){
            let curr = state.subjectlist[item];
            Vue.set(state.subjectlist,item,state.subjectlist[item+1]);
           Vue.set(state.subjectlist,item+1,curr);
        }
    },
    actions:{

    }
}