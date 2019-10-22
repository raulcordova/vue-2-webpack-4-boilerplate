<template lang="pug">
    CpItemBase(:title='title' :imagen='imagen' :icono='icono')
</template>
<script>
import CpItemBase from "@/components/base/modulo/CpItemBase";
export default {
  props: {
    title: {},
    imagen: {},
    icono: {}
  },
  components: { CpItemBase }
};
</script>