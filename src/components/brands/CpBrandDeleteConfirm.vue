<template lang="pug">
    CpModalConfirm(:showDialogConfirm='showVentana',title='Alerta',:content='messageConfirm', :onConfirm='confirm')
</template>
<script>
import CpModalConfirm from "@/components/base/modulo/CpModalConfirm";
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
  components: { CpModalConfirm },
  methods: {
    confirm() {
      alert("confirm");
    }
  }
};
</script>