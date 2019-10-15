<template lang="pug">
.centered-container
  md-content.md-elevation-3
    .title
      img(src='https://vuematerial.io/assets/logo-color.png')
      .md-title Vue Material
      .md-body-1 Build beautiful apps with Material Design and Vue.js
    .form
      md-field
        label E-mail
        md-input(v-model='login.email' autofocus='')
      md-field(md-has-password='')
        label Password
        md-input(v-model='login.password' type='password')
    .actions.md-layout.md-alignment-center
      md-button.md-raised.md-primary(@click='onSubmit') Ingresar
    .loading-overlay(v-if='loading')
      md-progress-spinner(md-mode='indeterminate' :md-stroke='2')
  .background
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data: function() {
    return {
      login: {
          email: "",
          password: ""
      },
      loading: false
    };
  },
  methods: {
      ...mapActions('user', ['signIn']),
      async onSubmit(evt){
          this.loading = true;
          this.signIn(this.login)
          .then((res) => {
            this.loading = false
            console.log(res.data)
            this.$router.push('/dashboard')
            //if (res.data.success) {
            //  this.$router.push('/dashboard')
            //}
          })
          .catch(() => {
            this.loading = false
          })
      }
  }
}
</script>

<style lang="styl">
.centered-container 
    display: flex
    align-items: center
    justify-content: center
    position: relative
    height: 100vh
    .md-content
        z-index: 1
        padding: 40px
        width: 100%
        max-width: 400px
        position: relative
</style>
