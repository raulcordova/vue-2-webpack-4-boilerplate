<template lang="pug">
    div
      //CpBrandDeleteConfirm(:showDialogConfirm="showConfirmModalMutated", :messageConfirm="messageConfirm")
      CpModalConfirmBase(:showDialogConfirm="showConfirmModalMutated", :closeDialogConfirm="closeDialogConfirm")
      md-button#button_plus.md-icon-button.md-raised.button_add_item(@click='addBrandModal')
        md-icon add 
      CpEpisodeModal(:showDialog='showDialog',:closeDialog='switchShowBrandModal',:brand='brand',:getListBrands='setList')
      CpModuloBase(titleModule='Episodios',labelModule='Crear tu primera episodio',descriptionModule='Registra aquí los episodios de los podcasts', buttonModule='Crear tu primera episodio',:arListItems="arListBrands", :openModal='switchShowBrandModal')
        div.md-layout
          template(v-for="item in arListBrands")
            CpEpisode(:item="item" :title="item.name",:image="item.icon",:date="item.date_register", icon='music_note' :setBrandEdit="setBrandEdit" :setBrandDelete="setBrandDelete")
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import CpModuloBase from "@/components/base/modulo/CpModuloBase";
import CpEpisodeModal from "@/components/episodes/CpEpisodeModal";
import CpEpisode from "@/components/episodes/CpEpisode";
//import CpBrandDeleteConfirm from "@/components/episodes/CpBrandDeleteConfirm";
import CpModalConfirmBase from "@/components/base/modulo/CpModalConfirmBase";
export default {
  components: { CpModuloBase, CpEpisodeModal, CpEpisode, CpModalConfirmBase },
  computed: {
    ...mapGetters({
      showDialog: "brand/showBrandModal",
      showConfirmModal: "brand/showConfirmModal"
    })
  },
  data: function() {
    let brand = this.setDefaultBrand();
    return {
      arListBrands: [],
      brand: brand,
      messageConfirm: "",
      showConfirmModalMutated: false
    };
  },
  created: function() {
    this.setList();
  },
  methods: {
    ...mapActions("brand", ["getList"]),
    async setList() {
      this.$store.commit("user/changeLoader");
      this.getList()
        .then(res => {
          this.arListBrands = res.data.data;
          this.$store.commit("user/changeLoader");
        })
        .catch(() => {
          this.arListBrands = res.data.data;
        });
    },
    switchShowBrandModal() {
      this.$store.commit("brand/changeShowBrandModal");
    },
    addBrandModal() {
      this.brand = this.setDefaultBrand();
      this.switchShowBrandModal();
    },
    setBrandEdit(brand) {
      this.brand = brand;
    },
    setDefaultBrand() {
      return {
        cod_brand: "",
        name: "",
        icon: "",
        code: "",
        date_register: ""
      };
    },
    setBrandDelete(item) {
      this.showConfirmModalMutated = true;
      this.messageConfirm =
        "esta seguro de eliminar la marca: <strong>" + item.name + "?</strong>";
    },
    closeDialogConfirm() {
      this.showConfirmModalMutated = false;
    }
  }
};
</script>