<template lang="pug">
    CpItemBase(:title='title' :image='image' :icon='icon', :date='date')
</template>
<script>
import CpItemBase from "@/components/base/modulo/CpItemBase";
export default {
  props: {
    title: {},
    image: {},
    icon: {},
    date: {}
  },
  components: { CpItemBase }
};
</script>