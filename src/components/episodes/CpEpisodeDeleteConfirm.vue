<template lang="pug">
    CpModalConfirmBase(:showDialogConfirm='showVentana',title='Alerta',:content='messageConfirm', :onConfirm='confirm')
</template>
<script>
import CpModalConfirmBase from "@/components/base/modulo/CpModalConfirmBase";
export default {
  computed: {
    showVentana: function() {
      return this.showDialogConfirm;
    }
  },
  props: {
    showDialogConfirm: {},
    messageConfirm: {}
  },
  components: { CpModalConfirmBase },
  methods: {
    confirm() {
      alert("confirm");
    }
  }
};
</script>