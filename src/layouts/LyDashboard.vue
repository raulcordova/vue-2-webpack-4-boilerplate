<template lang="pug">
.page-container
  md-app(md-waterfall='' md-mode='fixed')
    md-app-toolbar.md-large.md-dense.md-primary
      CpHeader
    md-app-drawer(:md-active.sync='menuVisible')
      md-toolbar.md-transparent(md-elevation='0') Menú
      CpHamburgerMenu   
    md-app-content
        router-view
</template>
<script>
import { mapGetters } from "vuex";
import CpHeader from "@/components/header/CpHeader";
import CpHamburgerMenu from "@/components/header/CpHamburgerMenu";
export default {
  components: { CpHeader, CpHamburgerMenu },
  data() {
    return {};
  },
  computed: {
    menuVisible: {
      get: function() {
        return this.$store.state.user.viewHamburgerMenu;
      },
      // setter
      set: function(newValue) {
        this.$store.commit("user/changeViewHamburgerMenu");
      }
    }
  }
};
</script>
<style lang="styl">
#logo
    width 150px
.saludo_usuario
    margin 5px
</style>