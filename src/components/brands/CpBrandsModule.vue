<template lang="pug">
    div
      md-button.md-icon-button.md-raised.button_add_item(@click='switchShowBrandModal')
        md-icon add 
      CpBrandModal(:showDialog='showDialog',:closeDialog='switchShowBrandModal')
      CpModuloBase(titleModule='Marcas',labelModule='Crear tu primera marca',descriptionModule='Registra aquí las marca del grupo EL COMERCIO', buttonModule='Crear tu primera marca',:arListItems="arListBrands", :openModal='switchShowBrandModal')
        h1 Aquí debe ir el componente que muestra la lista de Items
</template>
<script>
import { mapGetters } from "vuex";
import CpModuloBase from "@/components/base/modulo/CpModuloBase";
import CpBrandModal from "@/components/brands/CpBrandModal";
export default {
  components: { CpModuloBase, CpBrandModal },
  data: function() {
    return {
      arListBrands: []
    };
  },
  computed: {
    ...mapGetters({
      showDialog: "user/showBrandModal"
    })
  },
  methods: {
    switchShowBrandModal() {
      this.$store.commit("user/changeShowBrandModal");
    }
  }
};
</script>