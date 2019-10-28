<template lang="pug">
.md-toolbar-section-start
    md-button.md-icon-button(@click='switchHamburgerMenu')
        md-icon menu
    span.md-title
        img#logo(src="@/img/logo.svg")
    div.md-xsmall-hide    
      md-tabs.md-xsmall-hide.md-primary
          md-tab#tab-home(md-label='Podcasts',:to="{ name: 'Podcasts'}")
          md-tab#tab-pages(md-label='Marcas', :to="{ name: 'Brands'}")
</template>
<script>
export default {
  methods: {
    switchHamburgerMenu() {
      this.$store.commit("user/changeViewHamburgerMenu");
    }
  }
};
</script>