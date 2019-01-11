import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

var config = {
  apiKey: "AIzaSyDv96a0eITeK8EG0DFwNlW6ZZa5-FTTGHA",
  authDomain: "opus-shell.firebaseapp.com",
  databaseURL: "https://opus-shell.firebaseio.com",
  projectId: "opus-shell",
  storageBucket: "opus-shell.appspot.com",
  messagingSenderId: "15650369906"
};
firebase.initializeApp(config);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
