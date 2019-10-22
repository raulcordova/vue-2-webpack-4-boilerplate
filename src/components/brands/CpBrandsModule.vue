<template lang="pug">
    CpModuloBase(titleModule='Marcas',labelModule='Crear tu primera marca',descriptionModule='Registra aquí las marca del grupo EL COMERCIO', buttonModule='Crear tu primera marca',:arListItems="arListBrands")
      h1 Aquí debe ir el componente que muestra la lista de Items
</template>
<script>
import CpModuloBase from "@/components/base/modulo/CpModuloBase";
export default {
  components: { CpModuloBase },
  data: function() {
    return {
      arListBrands: []
    };
  },
  methods: {
    getListItems() {
      return this.arListBrands;
    }
  }
};
</script>