import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// let url = "http://8.130.175.54:8003/getAllGoods";
Vue.prototype.$axios = axios;
Vue.config.productionTip = false

// this.$axios.post(url)
// .then(data => data)
// .catch(err => console.log(err))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
