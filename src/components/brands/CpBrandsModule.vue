<template lang="pug">
    div
      md-button.md-icon-button.md-raised.button_add_item(@click='addBrandModal')
        md-icon add 
      CpBrandModal(:showDialog='showDialog',:closeDialog='switchShowBrandModal',:brand='brand',:getListBrands='setList')
      CpModuloBase(titleModule='Marcas',labelModule='Crear tu primera marca',descriptionModule='Registra aquí las marca del grupo EL COMERCIO', buttonModule='Crear tu primera marca',:arListItems="arListBrands", :openModal='switchShowBrandModal')
        div.md-layout
          template(v-for="item in arListBrands")
            CpBrand(:title="item.name",:image="item.icon",:date="item.date_register", icon='branding_watermark')
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import CpModuloBase from "@/components/base/modulo/CpModuloBase";
import CpBrandModal from "@/components/brands/CpBrandModal";
import CpBrand from "@/components/brands/CpBrand";
export default {
  components: { CpModuloBase, CpBrandModal, CpBrand },
  data: function() {
    return {
      arListBrands: []
    };
  },
  computed: {
    ...mapGetters({
      showDialog: "brand/showBrandModal",
      brand: "brand/getBrand"
    })
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
        .catch(() => {
          this.arListBrands = res.data.data;
        });
    },
    switchShowBrandModal() {
      this.$store.commit("brand/changeShowBrandModal");
    },
    addBrandModal() {
      this.$store.commit("brand/emptyBrand");
      this.switchShowBrandModal();
    }
  }
};
</script>