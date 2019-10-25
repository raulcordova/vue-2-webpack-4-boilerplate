<template lang="pug">
    div#moduloPrincipal
      h1 Podcasts
      md-button#button_plus.md-icon-button.md-raised.button_add_item(@click='addModal')
        md-icon add 
      CpPodcastDeleteConfirm(:showDialogConfirm.sync="showConfirmModal" :messageConfirm.sync="messageConfirm" :codBrandDelete.sync="codBrandDelete")
      CpPodcastModal(:showDialog.sync='showDialog',:item='item')
      CpModuloBase(v-if="arListItemsLength", labelModule='Crear tu primer podcast',descriptionModule='Registra aquí los podcast', buttonModule='Crear tu primer podcast', :openModal='addModal')
      div.md-layout
        template(v-for="item in arListItems")
          CpPodcast(:item="item", icon='library_music' )
</template>
<script>
import { mapActions } from "vuex";
import CpModuloBase from "@/components/base/modulo/CpModuloBase";
import CpPodcastModal from "@/components/podcasts/CpPodcastModal";
import CpPodcast from "@/components/podcasts/CpPodcast";
import CpPodcastDeleteConfirm from "@/components/podcasts/CpPodcastDeleteConfirm";
export default {
  components: {
    CpModuloBase,
    CpPodcastModal,
    CpPodcast,
    CpPodcastDeleteConfirm
  },
  data: function() {
    let item = this.setDefaultItem();
    return {
      arListItems: [],
      item: item,
      messageConfirm: "",
      codBrandDelete: "",
      showDialog: false,
      showConfirmModal: false
    };
  },
  computed: {
    arListItemsLength: function() {
      return this.arListItems.length > 0 ? false : true;
    }
  },
  created: function() {
    this.setList();
  },
  methods: {
    ...mapActions("episode", ["getList"]),
    async setList() {
      this.arListItems = [
        {
          cod_brand: "0aa0d146-f5bb-11e9-a8f2-80ce62387992",
          name: "Gesti\u00f3n",
          icon:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPXmnI4JofbqVmyy_HVxREYhngzrLMg6odZY3H3yV-7t9eOOdc",
          code: "gestionpwa",
          date_register: "23/10/2019"
        },
        {
          cod_brand: "368e2024-f5bb-11e9-a8f2-80ce62387992",
          name: "Trome",
          icon:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-_-N-CELzUKfiA5y4QSRFGq-trhjAyeby5zlKBcgPYOlxCO0m",
          code: "tromepwa",
          date_register: "23/10/2019"
        },
        {
          cod_brand: "eed6aa80-f5ba-11e9-a8f2-80ce62387992",
          name: "El Comercio",
          icon:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1BE6Ce6mwXohKVP8Ftgnt8RqOflK0d1Ny7TMAgEhmhS0cDoRp",
          code: "elcomerciopwa",
          date_register: "23/10/2019"
        }
      ];
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
        "¿esta seguro de eliminar el podcast: <strong>" +
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