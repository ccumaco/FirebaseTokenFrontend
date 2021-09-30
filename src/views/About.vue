<template v-if="action === 'reset'">
<div>
  <h1 class="title has-text-centered">Reset password</h1>
  <form @submit.prevent="doReset">
    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input v-model="userData.email" class="input" type="email" placeholder="e.g. alexsmith@gmail.com" required />
      </div>
    </div>

    <div class="field has-text-right">
      <div class="control">
        <button type="submit" class="button is-link" :class="{ 'is-loading': 'no-loading' }">
          Reset password
        </button>
      </div>
    </div>
    <router-link class="is-block" to="/login" @click="action = 'register'">Don't have an account?</router-link>
  </form>
  </div>
</template>
<script>

// import {mapMutation} from 'vuex'

export default {
  name: 'about',
  data: () =>{
    return{
      userData: {email: '',}
    }
  },
  methods:{
    // ...mapMutation['mapMutation'],
    async doReset() {
      try {
        await this.$store.dispatch("doReset", this.userData.email);
        console.log('asdasdads');
      } catch (error) {
        console.error(error);
      } finally {
        console.log('finally');
      }
    }
  }
}
</script>
