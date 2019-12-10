import Vue from 'vue'
import Vuex from 'vuex'
import todos from './modules/todos'
import subject from './modules/subject'
Vue.use(Vuex)

const store= new Vuex.Store({
    modules:{
        todos,
        subject
    }
})


export default store