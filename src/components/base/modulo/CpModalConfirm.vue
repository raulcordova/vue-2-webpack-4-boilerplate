<template lang="pug">
    md-dialog-confirm(:md-active.sync='showVentana' :md-title='title' :md-content='content' :md-confirm-text='confirmText' @md-confirm='onConfirm' @md-cancel='cerrarModal')
</template>
<script>
export default {
  computed: {
    showVentana: {
      get: function() {
        return this.showDialogConfirm;
      },
      set: function(newValue) {
        this.showDialogConfirm = false;
      }
    }
  },
  props: {
    showDialogConfirm: {},
    title: {
      default: "Sin Titulo"
    },
    content: {
      default: "Sin Contenido"
    },
    confirmText: {
      default: "Sí"
    },
    confirmText: {
      default: "Sí"
    },
    cancelText: {
      default: "No"
    },
    onConfirm: {
      default: function() {
        return true;
      }
    }
  },
  methods: {
    cerrarModal() {
      this.showVentana = "dd";
    }
  }
};
</script>