<template lang="pug">
    div
      md-button.md-icon-button.md-raised.button_add_item(@click='addBrandModal')
        md-icon add 
      CpBrandModal(:showDialog='showDialog',:closeDialog='switchShowBrandModal',:brand='brand',:getListBrands='setList')
      CpModuloBase(titleModule='Marcas',labelModule='Crear tu primera marca',descriptionModule='Registra aquí las marca del grupo EL COMERCIO', buttonModule='Crear tu primera marca',:arListItems="arListBrands", :openModal='switchShowBrandModal')
        div.md-layout
          template(v-for="item in arListBrands")
            CpBrand(:item="item" :title="item.name",:image="item.icon",:date="item.date_register", icon='branding_watermark' :setBrandEdit="setBrandEdit")
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import CpModuloBase from "@/components/base/modulo/CpModuloBase";
import CpBrandModal from "@/components/brands/CpBrandModal";
import CpBrand from "@/components/brands/CpBrand";
export default {
  components: { CpModuloBase, CpBrandModal, CpBrand },
  data: function() {
    let brand = this.setDefaultBrand();
    return {
      arListBrands: [],
      brand: brand
    };
  },
  computed: {
    ...mapGetters({
      showDialog: "brand/showBrandModal"
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
      this.brand = this.setDefaultBrand();
      this.switchShowBrandModal();
    },
    setBrandEdit(brand) {
      this.brand = brand;
    },
    setDefaultBrand() {
      return {
        cod_brand: "",
        name: "",
        icon: "",
        code: "",
        date_register: ""
      };
    }
  }
};
</script>