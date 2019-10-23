<template lang="pug">
   CpModalBase(modalTitle='Marca',:showDialog='showDialog',:closeDialog='closeDialog', :actionDialog='actionDialog' :getListBrands='getListBrands')
    .form
      md-field
        label Código
        md-input(v-model='brand.code' autofocus='')
      md-field
        label Nombre
        md-input(v-model='brand.name')
      md-field
        label Url del logo
        md-input(v-model='brand.icon')                  
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import CpModalBase from "@/components/base/modulo/CpModalBase";
export default {
  components: { CpModalBase },
  props: {
    showDialog: {},
    closeDialog: {},
    getListBrands: {},
    brand: {
      default: function() {
        return {
          cod_brand: "",
          name: "",
          icon: "",
          code: "",
          date_register: ""
        };
      }
    }
  },
  methods: {
    ...mapActions("brand", ["add"]),
    actionDialog() {
      this.$store.commit("user/changeLoader");
      this.add(this.brand)
        .then(res => {
          this.$store.commit("user/changeLoader");
          this.closeDialog();
          this.getListBrands();
        })
        .catch(() => {
          this.$store.commit("user/changeLoader");
          console.log("Error agregar brand");
        });
    }
  }
};
</script>