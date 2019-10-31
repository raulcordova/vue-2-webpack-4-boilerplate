<template lang="pug">
   CpModalBase(modalTitle='Podcast',:showDialog.sync='showDialog',:closeDialog='onCloseModal', :actionDialog='actionDialog' :getList='getList')
    .form
      md-field(:class="getValidationClass('name')")
        label Título
        md-input(v-model='item.name')
        span.md-error(v-if='!$v.item.name.required') requerido
        span.md-error(v-else-if='!$v.item.name.minLength') mínimo 3 caracteres
      md-field
        label Descripción
        md-textarea(v-model='item.description')
      md-field(:class="getValidationClass('cod_brand')")
        label Marca
        md-select(v-model='item.cod_brand')
          template(v-for="item in arListBrands")
            md-option(:value="item.cod_brand") {{item.name}}
        span.md-error(v-if='!$v.item.cod_brand.required') requerido
        span.md-error(v-else-if='!$v.item.cod_brand.minLength') mínimo 3 caracteres                            
      md-field(:class="getValidationClass('imagen')")
        label Imagen
        md-file(v-model='item.imagen' placeholder='Cargar la imagen del podcast' accept="image/*",@change="changeFile")                  
        span.md-error(v-if='!$v.item.imagen.required') requerido
      md-chips(v-model='item.tags' md-placeholder='Tags...')                            
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { validationMixin } from "vuelidate";
import {
  required,
  requiredUnless,
  requiredIf,
  url,
  minLength
} from "vuelidate/lib/validators";
import CpModalBase from "@/components/base/modulo/CpModalBase";
import uploadS3 from "@/s3";

export default {
  components: { CpModalBase },
  mixins: [validationMixin],
  data: function() {
    return {
      arListAuthor: ["Luis Chikana", "Renzo Carpio", "Juan Carlos"]
    };
  },
  computed: {
    isOptionalImage() {
      return false; // some conditional logic here...
    }
  },
  props: {
    showDialog: {},
    closeDialog: {},
    item: {
      default: function() {
        return {
          cod_podcast: "",
          name: "",
          description: "",
          image: "",
          imagen: "",
          fileImage: null,
          cod_brand: "",
          urlImage: "",
          tags: []
        };
      }
    },
    arListBrands: {
      default: []
    }
  },
  validations: {
    item: {
      name: {
        required,
        minLength: minLength(3)
      },
      imagen: {
        required: requiredIf(function(nestedModel) {
          return this.cod_podcast == "" ? true : false;
        })
      },
      cod_brand: {
        required
      }
    }
  },
  methods: {
    ...mapActions("podcast", ["add", "edit"]),
    getValidationClass(fieldName) {
      const field = this.$v.item[fieldName];
      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty
        };
      }
    },
    changeFile(e) {
      let uuid = this.$uuid.v4();
      const podcastImageFolder = "podcast/" + uuid + "/img";

      this.fileImage = e.target.files[0];

      this.item.image =
        "http://d16yve6aazp0mo.cloudfront.net/" +
        podcastImageFolder +
        "/" +
        this.fileImage.name;
      this.urlImage = podcastImageFolder;
    },
    actionAPI() {
      this.$store.commit("user/changeLoader");

      if (this.item.cod_podcast == "") {
        this.add(this.item)
          .then(res => {
            this.getList();
            this.$store.commit("user/changeLoader");
          })
          .catch(() => {
            this.$store.commit("user/changeLoader");
            console.log("Error agregar item");
          });
      } else {
        this.edit(this.item)
          .then(res => {
            this.$store.commit("user/changeLoader");
            this.getList();
          })
          .catch(() => {
            this.$store.commit("user/changeLoader");
            console.log("Error editar item");
          });
      }
    },
    actionDialog() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        if (this.fileImage) {
          uploadS3(this.fileImage, this.urlImage, this.actionAPI);
        } else {
          this.actionAPI();
        }
      }
    },
    getList() {
      this.onCloseModal();
      this.$parent.setList();
    },
    onCloseModal() {
      this.$v.$reset();
      this.$parent.switchShowBrandModal();
    }
  }
};
</script>
<style lang="stylus">
.md-menu-content
    z-index 11 !important
</style>