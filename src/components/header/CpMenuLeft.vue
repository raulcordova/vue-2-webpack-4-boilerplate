<template lang="pug">
.md-toolbar-section-start
    md-button.md-icon-button(@click='switchHamburgerMenu')
        md-icon menu
    span.md-title
        img#logo(src="@/img/logo.svg")
    md-tabs.md-primary
        md-tab#tab-home(md-label='Podcast')
        md-tab#tab-pages(md-label='Marcas')
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