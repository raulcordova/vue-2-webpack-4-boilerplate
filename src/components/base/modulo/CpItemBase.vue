<template lang="pug">
.md-layout-item.md-size-20
    md-card
        md-card-media-cover(md-solid='')
            md-card-media(md-ratio='1:1')
                img(:src='imagen')
            md-card-area
                md-card-header
                    span.md-title 
                        md-icon.icono-blanco {{icono}}
                        span {{title | truncate(20, '...')}}
                        md-tooltip(md-direction="top") {{ title }} 
                    span.md-subhead 14 de mayo 2019
                md-card-actions
                    md-menu(md-size='small' md-direction='top-end')
                        md-button.md-icon-button(md-menu-trigger='')
                            md-icon more_vert
                        md-menu-content
                            md-menu-item
                                span Editar
                                md-icon edit
                            md-menu-item
                                span Eliminar
                                md-icon delete
</template>

<script>
export default {
  props: {
    title: {
      default: "Sin título"
    },
    imagen: {
      default:
        "http://d2w1y3trq5va8p.cloudfront.net/index_files/imagotipo.0a2cc032.jpg"
    },
    icono: {
      default: ""
    }
  }
};
</script>
<style lang="styl" scoped>
.md-layout-item
    margin-bottom: 40px
    .md-card-area
        height: 80px !important
        background-color: #0855c4 !important
    .md-title
        font-size: 15px !important
        line-height: 22px !important
        margin-top: 0 !important
    .md-subhead
        font-size: 11px !important
.icono-blanco
    color: white !important
    margin-right 5px
.md-card-media-cover 
        cursor pointer
    &.md-card-header+.md-card-actions
        bottom 0
        right 0
        position absolute                
</style>