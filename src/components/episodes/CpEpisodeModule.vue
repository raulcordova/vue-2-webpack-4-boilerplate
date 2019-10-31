<template lang="pug">
    div#moduloPrincipal
      h1 Episodios de {{titlePodcast}}
      md-button#button_plus.md-icon-button.md-raised.button_add_item(@click='addModal')
        md-icon add 
      CpEpisodeDeleteConfirm(:showDialogConfirm.sync="showConfirmModal" :messageConfirm.sync="messageConfirm" :codBrandDelete.sync="codBrandDelete")
      CpEpisodeModal(:showDialog.sync='showDialog',:item='item')
      CpModuloBase(v-if="arListItemsLength", labelModule='Crear tu primer episodio',descriptionModule='Registra aquí los episodios del podcast', buttonModule='Crear tu primer episodio', :openModal='addModal')
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
      titlePodcast: "",
      codPodcast: ""
    };
  },
  computed: {
    arListItemsLength: function() {
      return this.arListItems.length > 0 ? false : true;
    }
  },
  created: function() {
    this.titlePodcast = this.$route.params.name;
    this.codPodcast = this.$route.params.id;
    this.setList();
  },
  methods: {
    ...mapActions("episode", ["getList"]),
    async setList() {
      this.$store.commit("user/changeLoader");
      this.getList(this.codPodcast)
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
        cod_episode: "",
        title: "",
        description: "",
        author: "",
        image: "",
        duration: "",
        tags: [],
        cod_podcast: "",
        audio: "",
        url_audio: "",
        date_register: "",
        date_publish: this.$moment().format("YYYY-MM-DD"),
        srcMP3: ""
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