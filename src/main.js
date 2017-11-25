// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import moment from 'vue-moment';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.use(moment);
Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  moment,
  template: '<App/>',
  components: { App },
});
