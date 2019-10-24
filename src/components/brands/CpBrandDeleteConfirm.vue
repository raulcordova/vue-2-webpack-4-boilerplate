<template lang="pug">
    CpModalConfirmBase(:showDialogConfirm='showDialogConfirm',title='Alerta',:content='messageConfirm' :closeDialogConfirm="closeDialogConfirm")
</template>
<script>
import CpModalConfirmBase from "@/components/base/modulo/CpModalConfirmBase";
export default {
  props: {
    showDialogConfirm: {},
    closeDialogConfirm: {},
    messageConfirm: {}
  },
  components: { CpModalConfirmBase },
  methods: {}
};
</script>