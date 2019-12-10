// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import store from './store/store'



// import Users from './components/Users'
Vue.config.productionTip = false
//  q全局注册组件
// Vue.component("users",Users);
Vue.use(VueResource)

// localStorage.setItem('subjectlist',JSON.stringify(arr)) //存在本地的内存当中

Vue.mixin({
  data(){
    return {
      DAN_XUAN_TI:1,
      DUO_XUAN_TI:2,
      PAN_DUAN_TI:3,
      ZHU_GUAN_TI:0,
    }
  }
})

Vue.filter('fmtOptionsName',(val)=>{
  return 'ABCDEFG'[val];
});
Vue.filter('fmtSubjectType',(val)=>{
  return ['主观题','单选题','多选题','多选题'][val]
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
 store,
  components: { App },
  template: '<App/>'
})

// index.html->main.js->App组件
