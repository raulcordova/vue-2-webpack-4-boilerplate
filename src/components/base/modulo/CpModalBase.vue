<template lang="pug">
div
  md-dialog(:md-active.sync='showDialog',:md-click-outside-to-close='false',:md-close-on-esc='false',:md-closed='closeDialog')
    md-dialog-title {{modalTitle}}
    md-dialog-content
        slot
    md-dialog-actions
      md-button.md-primary(@click='closeDialog') {{buttonClose}}
      md-button.md-primary(@click='actionDialog') {{buttonAction}}   
</template>
<script>
export default {
  props: {
    showDialog: {
      default: false
    },
    modalTitle: {
      type: String,
      default: "Sin titulo"
    },
    buttonClose: {
      type: String,
      default: "Cerrar"
    },
    buttonAction: {
      type: String,
      default: "Guardar"
    },
    closeDialog: {},
    actionDialog: {}
  },
  methods: {}
};
</script>
<style lang="stylus">
.md-dialog
  width 40vw !important
.md-dialog-title
  background-color #2e86de
  color white
  padding 10px !important
</style>