<template lang="pug">
    CpItemBase(:icon='icon', :item='item',:name='name', :editAction='showModalEdit' :deleteAction='showDeleteConfirm')
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
    name: {},
    icon: {},
    editAction: {},
    setBrandEdit: {},
    setBrandDelete: {}
  },
  methods: {
    showModalEdit() {
      //this.$store.commit("brand/setBrand", this.item);
      let itemEdit = Object.assign({}, this.item);
      this.$parent.setBrandEdit(itemEdit);
      //this.$store.commit("brand/changeShowBrandModal");
    },
    showDeleteConfirm() {
      this.$parent.setBrandDelete(this.item);
    }
  }
};
</script>