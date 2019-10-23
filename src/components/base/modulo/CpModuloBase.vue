<template lang="pug">
    div
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
  background-color #EA0C90 !important
  right 20px
  top 75px
  position absolute !important
  .md-icon-font
    color: white !important
</style>