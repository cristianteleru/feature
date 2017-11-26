// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import moment from 'vue-moment';
import router from './router';
import App from './App';

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.use(moment);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  moment,
  template: '<App/>',
  components: { App },
}).$mount('#app');
