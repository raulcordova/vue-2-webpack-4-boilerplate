<template lang="pug">
    div#moduloPrincipal
      h1 Podcasts
      md-button#button_plus.md-icon-button.md-raised.button_add_item(@click='addModal')
        md-icon add 
      CpPodcastDeleteConfirm(:showDialogConfirm.sync="showConfirmModal" :messageConfirm.sync="messageConfirm" :codBrandDelete.sync="codBrandDelete")
      CpPodcastModal(:showDialog.sync='showDialog',:item='item',:arListBrands='arListBrands')
      CpModuloBase(v-if="arListItemsLength", labelModule='Crear tu primer podcast',descriptionModule='Registra aquí los podcast', buttonModule='Crear tu primer podcast', :openModal='addModal')
      div.md-layout
        template(v-for="item in arListItems")
          CpPodcast(:item="item",:name="item.name", icon='library_music' )
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
      arListBrands: [],
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
    ...mapActions("podcast", ["getList"]),
    ...mapActions("brand", { getListBrand: "getList" }),

    async setListBrands() {
      if (this.arListBrands.length > 0) {
        return false;
      }
      this.$store.commit("user/changeLoader");
      this.getListBrand()
        .then(res => {
          this.arListBrands = res.data.data;
          this.$store.commit("user/changeLoader");
        })
        .catch(() => {
          this.$store.commit("user/changeLoader");
        });
    },
    async setList() {
      this.arListItems = [];
      this.$store.commit("user/changeLoader");
      this.getList()
        .then(res => {
          this.arListItems = res.data.data;
          this.$store.commit("user/changeLoader");
          this.setListBrands();
        })
        .catch(() => {
          this.$store.commit("user/changeLoader");
        });
    },
    switchShowBrandModal() {
      this.showDialog = !this.showDialog;
    },
    addModal() {
      this.item = this.setDefaultItem();
      this.switchShowBrandModal();
    },
    setItemEdit(item) {
      this.item = item;
      this.switchShowBrandModal();
    },
    setDefaultItem() {
      return {
        cod_podcast: "",
        name: "",
        description: "",
        image: "",
        imagen: "",
        urlImage: "",
        fileImage: null,
        cod_brand: "",
        tags: []
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