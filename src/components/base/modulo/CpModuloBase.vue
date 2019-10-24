<template lang="pug">
    div
        div.md-layout
          h1 {{titleModule}}
        md-empty-state(v-if='showViewEmpty()' md-icon='branding_watermark' :md-label='labelModule' :md-description='descriptionModule')
            md-button.md-primary.md-raised(@click='openModal') {{buttonModule}}
        slot(v-else)
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
    arListItems: {},
    openModal: {}
  },
  methods: {
    showViewEmpty() {
      return this.$props.arListItems.length > 0 ? false : true;
    }
  }
};
</script>
<style lang="stylus">
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
</style>