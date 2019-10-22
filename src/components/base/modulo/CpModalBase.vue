<template lang="pug">
div
  md-dialog(:md-active.sync='showDialog',:md-click-outside-to-close='false',:md-close-on-esc='false')
    md-dialog-title {{modalTitle}}
    md-dialog-content
        slot
    md-dialog-actions
      md-button.md-primary(@click='closeDialog') {{buttonClose}}
      md-button.md-primary(@click='closeDialog') {{buttonAction}}   
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
    closeDialog: {}
  },
  methods: {}
};
</script>