<template lang="pug">
    div#welcome
        img#logoWelcome(src="@/img/logo.svg")
        md-progress-spinner(md-mode="indeterminate")
</template>
<script>
export default {
  components: {},
  created: function() {
    this.redirectDashboard();
  },
  methods: {
    redirectDashboard() {
      let self = this;
      setTimeout(function() {
        self.$router.push("/dashboard");
      }, 3000);
    }
  }
};
</script>
<style lang="stylus">
#welcome
    width 100vw
    height 100vh
    display flex
    justify-content center
    align-items center
    background-color #448aff
    flex-direction column
#logoWelcome
    width 300px
    margin-bottom 20px
.md-progress-spinner-circle
    stroke white !important    
</style>