<template lang="pug">
    div#moduloPrincipal
      h1 Marcas
      md-button#button_plus.md-icon-button.md-raised.button_add_item(@click='addBrandModal')
        md-icon add 
      CpBrandDeleteConfirm(:showDialogConfirm.sync="showConfirmModal" :messageConfirm.sync="messageConfirm" :codBrandDelete.sync="codBrandDelete")
      CpBrandModal(:showDialog.sync='showDialog',:brand='brand')
      CpModuloBase(v-if="arListBrandsLength", labelModule='Crear tu primera marca',descriptionModule='Registra aquí las marca del grupo EL COMERCIO', buttonModule='Crear tu primera marca', :openModal='addBrandModal')
      div.md-layout
        template(v-for="item in arListBrands")
          CpBrand(:item="item",:name="item.name" icon='branding_watermark' )
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import CpModuloBase from "@/components/base/modulo/CpModuloBase";
import CpBrandModal from "@/components/brands/CpBrandModal";
import CpBrand from "@/components/brands/CpBrand";
import CpBrandDeleteConfirm from "@/components/brands/CpBrandDeleteConfirm";
export default {
  components: { CpModuloBase, CpBrandModal, CpBrand, CpBrandDeleteConfirm },
  data: function() {
    let brand = this.setDefaultBrand();
    return {
      arListBrands: [],
      brand: brand,
      messageConfirm: "",
      codBrandDelete: "",
      showDialog: false,
      showConfirmModal: false
    };
  },
  computed: {
    arListBrandsLength: function() {
      return this.arListBrands.length > 0 ? false : true;
    }
  },
  created: function() {
    this.setList();
  },
  methods: {
    ...mapActions("brand", ["getList"]),
    async setList() {
      this.$store.commit("user/changeLoader");
      this.getList()
        .then(res => {
          this.arListBrands = res.data.data;
          this.$store.commit("user/changeLoader");
        })
        .catch(() => {});
    },
    switchShowBrandModal() {
      this.showDialog = !this.showDialog;
    },
    addBrandModal() {
      this.brand = this.setDefaultBrand();
      this.switchShowBrandModal();
    },
    setBrandEdit(brand) {
      this.brand = brand;
      this.switchShowBrandModal();
    },
    setDefaultBrand() {
      return {
        cod_brand: "",
        name: "",
        icon: "",
        code: "",
        date_register: ""
      };
    },
    setBrandDelete(item) {
      this.showConfirmModal = true;
      this.messageConfirm =
        "esta seguro de eliminar la marca: <strong>" + item.name + "?</strong>";
      this.codBrandDelete = item.cod_brand;
    },
    closeDialogConfirm() {
      this.showConfirmModal = false;
    }
  }
};
</script>