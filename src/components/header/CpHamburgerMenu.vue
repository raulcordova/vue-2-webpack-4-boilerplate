<template lang="pug">
md-list#menuHamburger
  div.md-small-show#profileSmall
    md-avatar.md-avatar-icon
        md-icon person
    span.saludo_usuario Hola, Renzo Carpio
    md-button#btnLogout(@click="logout")
        md-icon exit_to_app
  md-list-item(:to="{ name: 'Podcasts'}")
    md-icon library_music
    span.md-list-item-text Podcasts
  md-list-item(:to="{ name: 'Brands'}")
    md-icon branding_watermark
    span.md-list-item-text Marcas  
</template>
<script>
export default {
  methods: {
    logout() {
      this.$store.commit("user/clearJWT");
      this.$router.push("/login");
    }
  }
};
</script>
<style lang="stylus">
#profileSmall
  border-top 0.5px solid hsla(0,0%,70.6%,.3)
  padding-top 20px
  padding-left 20px
#menuHamburger
  padding-top 30px
  .md-list
    padding-left 20px
.md-app
  height 100vh
.md-drawer
  width 260px !important
  background-color  #222f3e !important
  *
    background-color  #222f3e !important
    color white !important    
</style>