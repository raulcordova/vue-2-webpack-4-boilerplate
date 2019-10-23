<template lang="pug">
   CpModalBase(modalTitle='Marca',:showDialog='showDialog',:closeDialog='closeDialog')
    .form
      md-field
        label Código
        md-input(v-model='brand.code' autofocus='')
      md-field
        label Nombre
        md-input(v-model='brand.name')
      md-field
        label Url del logo
        md-input(v-model='brand.logo')                  
</template>
<script>
import CpModalBase from "@/components/base/modulo/CpModalBase";
export default {
  props: {
    showDialog: {},
    closeDialog: {}
  },
  components: { CpModalBase },
  data: function() {
    return {
      brand: {
        id: 0,
        name: "",
        code: "",
        logo: null
      }
    };
  }
};
</script>