<template lang="pug">
    .md-toolbar-row
        CpMenuLeft
        CpMenuRight
</template>
<script>
import CpMenuLeft from "@/components/header/CpMenuLeft";
import CpMenuRight from "@/components/header/CpMenuRight";
export default {
  components: {
    CpMenuLeft,
    CpMenuRight
  }
};
</script>
<style lang="stylus">
color-fondo = #222f3e
.md-toolbar-row
  margin-top 10px
.md-toolbar.md-theme-default.md-primary
  background-color color-fondo !important
  .md-tabs-navigation
    background-color color-fondo !important
</style>