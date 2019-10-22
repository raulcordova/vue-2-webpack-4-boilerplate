<template lang="pug">
    div#loading
        img#logoLoading(src="@/img/logo.svg")
        md-progress-spinner(md-mode="indeterminate")
</template>
<script>
export default {
  components: {}
};
</script>
<style lang="stylus">
#loading
    width 100vw
    height calc(100vh - 96px) 
    display flex
    justify-content center
    align-items center
    background-color #ea0c90
    flex-direction column
    left 0
    bottom 0
    position absolute
    z-index 20
#logoLoading
    width 300px
    margin-bottom 20px
.md-progress-spinner-circle
    stroke white !important    
</style>