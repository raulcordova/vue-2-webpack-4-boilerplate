<template lang="pug">
  div.md-layout
    md-empty-state(md-icon='branding_watermark' :md-label='labelModule' :md-description='descriptionModule')
      md-button.md-primary.md-raised(@click='openModal') {{buttonModule}}
</template>
<script>
export default {
  props: {
    titleModule: {
      type: String,
      default: "Sin título"
    },
    labelModule: {
      type: String,
      default: "No definido"
    },
    descriptionModule: {
      type: String,
      default: "No definido"
    },
    buttonModule: {
      type: String,
      default: "No definido"
    },
    openModal: {}
  },
  methods: {}
};
</script>
<style lang="stylus">
maxWidthSmartPhone = 720px
.button_add_item
  background-color #2e86de !important
  right 50px
  top 65px
  position absolute !important
  width 54px !important
  height 54px !important  
  .md-icon-font
    color: white !important
    font-size 30px !important
  @media screen and (max-width: maxWidthSmartPhone )
    right 10px
    bottom 10px
    top unset  
</style>