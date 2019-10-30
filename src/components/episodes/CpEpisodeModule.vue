<template lang="pug">
    div#moduloPrincipal
      h1 Episodios - {{ titlePodcast}}
      md-button#button_plus.md-icon-button.md-raised.button_add_item(@click='addModal')
        md-icon add 
      CpEpisodeDeleteConfirm(:showDialogConfirm.sync="showConfirmModal" :messageConfirm.sync="messageConfirm" :codBrandDelete.sync="codBrandDelete")
      CpEpisodeModal(:showDialog.sync='showDialog',:item='item')
      CpModuloBase(v-if="arListItemsLength", labelModule='Crear tu episodio',descriptionModule='Registra aquí los episodios de los podcast', buttonModule='Crear tu primer episodio', :openModal='addModal')
      div.md-layout
        template(v-for="item in arListItems")
          CpEpisode(:item="item", icon='music_note' )
</template>
<script>
import { mapActions } from "vuex";
import CpModuloBase from "@/components/base/modulo/CpModuloBase";
import CpEpisodeModal from "@/components/episodes/CpEpisodeModal";
import CpEpisode from "@/components/episodes/CpEpisode";
import CpEpisodeDeleteConfirm from "@/components/episodes/CpEpisodeDeleteConfirm";
export default {
  components: {
    CpModuloBase,
    CpEpisodeModal,
    CpEpisode,
    CpEpisodeDeleteConfirm
  },
  data: function() {
    let item = this.setDefaultItem();
    return {
      arListItems: [],
      item: item,
      messageConfirm: "",
      codBrandDelete: "",
      showDialog: false,
      showConfirmModal: false,
      titlePodcast: ""
    };
  },
  computed: {
    arListItemsLength: function() {
      return this.arListItems.length > 0 ? false : true;
    }
  },
  created: function() {
    this.titlePodcast = this.$route.params.name;
    this.setList();
  },
  methods: {
    ...mapActions("episode", ["getList"]),
    async setList() {
      return false;
      this.$store.commit("user/changeLoader");
      this.getList("2e8ab6ba-f5d6-11e9-a8f2-80ce62387992")
        .then(res => {
          this.arListItems = res.data.data;
          this.$store.commit("user/changeLoader");
        })
        .catch(() => {});
    },
    switchShowBrandModal() {
      this.showDialog = !this.showDialog;
    },
    addModal() {
      this.brand = this.setDefaultItem();
      this.switchShowBrandModal();
    },
    setItemEdit(item) {
      this.item = item;
      this.switchShowBrandModal();
    },
    setDefaultItem() {
      return {
        cod_brand: "",
        name: "",
        description: "",
        icon: "",
        audio: "",
        code: "",
        date_register: "",
        date_publish: "2019-10-29",
        author: "",
        tags: ["salsa", "rock", "balada"]
      };
    },
    setItemDelete(item) {
      this.showConfirmModal = true;
      this.messageConfirm =
        "¿esta seguro de eliminar el episodio: <strong>" +
        item.name +
        "?</strong>";
      this.codBrandDelete = item.cod_brand;
    },
    closeDialogConfirm() {
      this.showConfirmModal = false;
    }
  }
};
</script>