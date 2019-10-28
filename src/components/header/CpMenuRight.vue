<template lang="pug">
.md-toolbar-section-end
    div.md-xsmall-hide
        md-avatar.md-avatar-icon
            md-icon person
        span.saludo_usuario Hola, Renzo Carpio
        md-button#btnLogout(@click="logout")
            md-icon exit_to_app
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
#btnLogout
    min-width 30px
</style>