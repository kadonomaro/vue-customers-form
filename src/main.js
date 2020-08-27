import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate';
import '@/assets/css/style.scss'

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.use(Vuelidate)

new Vue({
  render: h => h(App),
}).$mount('#app')
