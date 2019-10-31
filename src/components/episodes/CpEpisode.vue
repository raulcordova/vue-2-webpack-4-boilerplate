<template lang="pug">
    CpItemBase(:icon='icon',:name='item.title' :item='item', :editAction='showModalEdit' :deleteAction='showDeleteConfirm')
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
    icon: {},
    editAction: {},
    setBrandEdit: {},
    setBrandDelete: {}
  },
  methods: {
    showModalEdit() {
      let itemEdit = Object.assign({}, this.item);
      this.$parent.setItemEdit(itemEdit);
    },
    showDeleteConfirm() {
      this.$parent.setItemDelete(this.item);
    }
  }
};
</script>