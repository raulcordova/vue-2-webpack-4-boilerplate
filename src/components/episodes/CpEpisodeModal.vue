<template lang="pug">
   CpModalBase(modalTitle='Episodio',:showDialog.sync='showDialog',:closeDialog='onCloseModal', :actionDialog='actionDialog' :getList='getList')
    .form
      md-field(:class="getValidationClass('title')")
        label Título
        md-input(v-model='item.title')
        span.md-error(v-if='!$v.item.title.required') requerido
        span.md-error(v-else-if='!$v.item.title.minLength') mínimo 3 caracteres
      md-field
        label Descripción
        md-textarea(v-model='item.description')        
      md-field(:class="getValidationClass('icon')")
        label Imagen
        md-file(v-model='item.icon' placeholder='Cargar la imagen del episodio' accept="image/*")                  
        span.md-error(v-if='!$v.item.icon.required') requerido
      md-field(:class="getValidationClass('audio')")
        label Audio
        Duration(:src='item.srcMP3' :setItemDuration='setItemDuration')
        md-file(v-model='item.audio' placeholder='Cargar el audio del episodio' accept="audio/*" @change="seleccionarAudio")                  
        span.md-error(v-if='!$v.item.audio.required') requerido
      md-autocomplete(:class="getValidationClass('author')",v-model='item.author',md-dense, :md-options="arListAuthor")
        label Autor
        span.md-error(v-if='!$v.item.author.required') requerido
      md-datepicker(:class="getValidationClass('date_publish')", v-model='item.date_publish' md-immediately)
        label Fecha de publicación
        span.md-error(v-if='!$v.item.date_publish.required') requerido
      md-chips(v-model='item.tags' md-placeholder='Tags...')                            
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { validationMixin } from "vuelidate";
import { required, url, minLength } from "vuelidate/lib/validators";
import CpModalBase from "@/components/base/modulo/CpModalBase";
import Duration from "@/components/duration";
export default {
  components: { CpModalBase, Duration },
  mixins: [validationMixin],
  data: function() {
    return {
      arListAuthor: ["Luis Chicana", "Renzo Carpio", "Juan Carlos"]
    };
  },
  props: {
    showDialog: {},
    closeDialog: {},
    item: {
      default: function() {
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
          date_publish: "",
          srcMP3: ""
        };
      }
    }
  },
  validations: {
    item: {
      title: {
        required,
        minLength: minLength(3)
      },
      icon: {
        required
      },
      audio: {
        required
      },
      author: {
        required
      },
      date_publish: {
        required
      }
    }
  },
  methods: {
    ...mapActions("episode", ["add", "edit"]),
    getValidationClass(fieldName) {
      const field = this.$v.item[fieldName];
      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty
        };
      }
    },
    seleccionarAudio(e) {
      let fileArchivo = e.target.files[0];
      let generateURL = URL.createObjectURL(fileArchivo);
      this.item.srcMP3 = generateURL;
    },
    actionDialog() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.$store.commit("user/changeLoader");
        if (this.brand.cod_brand == "") {
          this.add(this.brand)
            .then(res => {
              this.getList();
            })
            .catch(() => {
              this.$store.commit("user/changeLoader");
              console.log("Error agregar item");
            });
        } else {
          this.edit(this.brand)
            .then(res => {
              this.getList();
            })
            .catch(() => {
              this.$store.commit("user/changeLoader");
              console.log("Error editar item");
            });
        }
      }
    },
    getList() {
      this.$store.commit("user/changeLoader");
      this.onCloseModal();
      this.$parent.setList();
    },
    onCloseModal() {
      this.$v.$reset();
      this.$parent.switchShowBrandModal();
    },
    setItemDuration(duration) {
      this.item.duration = duration;
    }
  }
};
</script>
<style lang="stylus">
.md-menu-content
    z-index 11 !important
</style>