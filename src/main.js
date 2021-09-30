import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";
import axios from "axios";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

const firebaseConfig = {
  apiKey: "AIzaSyCwca4ZnbuD3BXujB8lSQuMdVMAQuur-J8",
  authDomain: "fir-startup-aaf68.firebaseapp.com",
  projectId: "fir-startup-aaf68",
  storageBucket: "fir-startup-aaf68.appspot.com",
  messagingSenderId: "748124781606",
  appId: "1:748124781606:web:7dac52021223a0c4407ae7"
};

firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(user => {
  console.log("user", user);
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});

// app = new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount("#app");
