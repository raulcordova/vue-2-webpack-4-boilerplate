<template lang="pug">
.md-layout-item.md-size-20.md-small-size-33.md-xsmall-size-100
    md-card
        md-card-media-cover(md-solid='')
            md-card-media(md-ratio='1:1')
                img(:src='image')
            md-card-area
                md-card-header
                    span.md-title 
                        md-icon.icono-blanco {{icon}}
                        span {{title | truncate(20, '...')}}
                        md-tooltip(md-direction="top") {{ title }} 
                    span.md-subhead Creado: {{date}}
                md-card-actions
                    md-menu(md-size='small' md-direction='top-end')
                        md-button.md-icon-button(md-menu-trigger='')
                            md-icon more_vert
                        md-menu-content
                            md-menu-item(@click="editAction")
                                md-icon edit
                                span Editar
                            md-menu-item(@click="deleteAction")
                                md-icon delete
                                span Eliminar
</template>

<script>
export default {
  props: {
    title: {
      default: "Sin título"
    },
    image: {
      default:
        "http://d2w1y3trq5va8p.cloudfront.net/index_files/imagotipo.0a2cc032.jpg"
    },
    icon: {
      default: ""
    },
    date: {
      default: ""
    },
    editAction: {},
    deleteAction: {}
  }
};
</script>
<style lang="styl">
.md-layout-item
    margin-bottom 40px
    .md-card-header
        padding 10px 16px
    .md-card-area
        height: 60px !important
        background-color #576574 !important
    .md-title
        font-size 15px !important
        line-height 22px !important
        margin-top 0 !important
        .md-icon
            font-size 16px !important
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
.md-card-media.md-ratio-1-1 
    img
        top 0 !important
        transform none !important
.md-list-item-content
    justify-content start !important
    .md-icon                                      
        font-size 20px !important
        margin-right 5px !important
</style>