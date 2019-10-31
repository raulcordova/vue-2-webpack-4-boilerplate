<template lang="pug">
    CpItemBase( :icon='icon', :item='item', :editAction='showModalEdit' :deleteAction='showDeleteConfirm', :name='name')
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
      let itemEdit = Object.assign({}, this.item);
      this.$parent.setItemEdit(itemEdit);
    },
    showDeleteConfirm() {
      this.$parent.setItemDelete(this.item);
    },
    actionRedirect() {
      const cod_podcast = this.item.cod_podcast;
      const url = "/podcasts/episodes/" + cod_podcast + "/" + this.item.name;
      //console.log(url);
      this.$router.push(url);
    }
  }
};
</script>