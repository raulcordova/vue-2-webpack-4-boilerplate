<template lang="pug">
    md-dialog-confirm(:md-active='showDialogConfirm' :md-title='title' :md-content='content' :md-cancel-text='cancelText' :md-confirm-text='confirmText' @md-cancel="onCancel" @md-confirm='onConfirm')
</template>
<script>
export default {
  name: "DialogConfirm",
  props: {
    showDialogConfirm: {},
    closeDialogConfirm: {},
    onConfirm: {},
    title: {
      default: "Sin Titulo"
    },
    content: {
      default: "Sin Contenido"
    },
    confirmText: {
      default: "Sí"
    },
    cancelText: {
      default: "No"
    }
  },
  computed: {
    active: {
      get: function() {
        return this.showDialogConfirm;
      },
      set: function(newValue) {}
    }
  },
  methods: {
    onCancel() {
      this.closeDialogConfirm();
    }
  }
};
</script>