<template lang="pug">
    CpModalConfirmBase(:showDialogConfirm='showDialogConfirm',title='Alerta',:content='messageConfirm' :closeDialogConfirm="closeDialogConfirm" :onConfirm='deleteBrand')
</template>
<script>
import { mapActions } from "vuex";
import CpModalConfirmBase from "@/components/base/modulo/CpModalConfirmBase";
export default {
  props: {
    showDialogConfirm: {},
    messageConfirm: {},
    codBrandDelete: {}
  },
  components: { CpModalConfirmBase },
  methods: {
    ...mapActions("brand", ["delete"]),
    deleteBrand() {
      this.$store.commit("user/changeLoader");
      this.delete(this.codBrandDelete)
        .then(res => {
          this.getListBrands();
        })
        .catch(() => {
          this.$store.commit("user/changeLoader");
          console.log("Error eliminar item");
        });
    },
    getListBrands() {
      this.$store.commit("user/changeLoader");
      this.$parent.setList();
      this.closeDialogConfirm();
    },
    closeDialogConfirm() {
      this.$parent.closeDialogConfirm();
    }
  }
};
</script>