<template lang="pug">
    div#welcome
        img#logo(src="@/img/logo.svg")
        md-progress-spinner(md-mode="indeterminate")
</template>
<script>
export default {
  components: {}
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
#logo
    width 300px
    margin-bottom 20px
.md-progress-spinner-circle
    stroke white !important    
</style>