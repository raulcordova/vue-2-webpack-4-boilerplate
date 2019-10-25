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
      md-field(:class="getValidationClass('icon')")
        label Imagen
        md-file(v-model='item.icon' placeholder='Cargar la imagen del podcast' accept="image/*")                  
        span.md-error(v-if='!$v.item.icon.required') requerido
      md-chips(v-model='item.tags' md-placeholder='Agregar Tags...')                            
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { validationMixin } from "vuelidate";
import { required, url, minLength } from "vuelidate/lib/validators";
import CpModalBase from "@/components/base/modulo/CpModalBase";
export default {
  components: { CpModalBase },
  mixins: [validationMixin],
  data: function() {
    return {
      arListAuthor: ["Luis Chikana", "Renzo Carpio", "Juan Carlos"]
    };
  },
  props: {
    showDialog: {},
    closeDialog: {},
    item: {
      default: function() {
        return {
          cod_brand: "",
          name: "",
          description: "",
          icon: "",
          code: "",
          date_register: "",
          tags: ["salsa", "rock", "balada"]
        };
      }
    }
  },
  validations: {
    item: {
      name: {
        required,
        minLength: minLength(3)
      },
      icon: {
        required
      },
      date_publish: {
        required
      }
    }
  },
  methods: {
    ...mapActions("brand", ["add", "edit"]),
    getValidationClass(fieldName) {
      const field = this.$v.item[fieldName];
      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty
        };
      }
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
    }
  }
};
</script>
<style lang="stylus">
.md-menu-content
    z-index 11 !important
</style>