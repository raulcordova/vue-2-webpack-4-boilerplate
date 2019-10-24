<template lang="pug">
    CpItemBase(item='item' :title='title' :image='image' :icon='icon', :date='date' :editAction='showModalEdit' :deleteAction='showDeleteConfirm')
</template>
<script>
import CpItemBase from "@/components/base/modulo/CpItemBase";
export default {
  components: { CpItemBase },
  data: function() {
    return {
      itemEdit: {}
    };
  },
  props: {
    item: {},
    title: {},
    image: {},
    icon: {},
    date: {},
    editAction: {},
    setBrandEdit: {},
    setBrandDelete: {}
  },
  methods: {
    showModalEdit() {
      //this.$store.commit("brand/setBrand", this.item);
      let itemEdit = Object.assign({}, this.item);
      this.setBrandEdit(itemEdit);
      this.$store.commit("brand/changeShowBrandModal");
    },
    showDeleteConfirm() {
      this.setBrandDelete(this.item);
    }
  }
};
</script>