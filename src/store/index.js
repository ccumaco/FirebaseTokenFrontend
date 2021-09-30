import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
require('firebase/auth')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
    async doReset(context, email) {
      await firebase.auth().sendPasswordResetEmail(email);
    }
  },
  actions: {
    async doReset(context, email) {
      await firebase.auth().sendPasswordResetEmail(email);
    }
  },
  modules: {
  }
})
