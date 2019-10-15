<template lang="pug">
.page-container
  md-app(md-waterfall='' md-mode='fixed-last')
    md-app-toolbar.md-large.md-dense.md-primary
      .md-toolbar-row
        .md-toolbar-section-start
            span.md-title PodCast
            md-tabs.md-primary
                md-tab#tab-home(md-label='Marcas')
                md-tab#tab-pages(md-label='Podcast')
        .md-toolbar-section-end
            div
                md-avatar.md-avatar-icon
                    md-icon person
                span.saludo_usuario Hola, Renzo Carpio
                md-icon exit_to_app
    md-app-content
        router-view
</template>

<style lang="styl">
.saludo_usuario
    margin: 5px
</style>