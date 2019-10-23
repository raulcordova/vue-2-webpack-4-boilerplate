<template lang="pug">
   CpModalBase(modalTitle='Marca',:showDialog='showDialog',:closeDialog='closeDialogBrand', :actionDialog='actionDialog' :getListBrands='getListBrands')
    .form
      md-field(:class="getValidationClass('code')")
        label Código
        md-input(v-model='brand.code' autofocus='')
        span.md-error(v-if='!$v.brand.code.required') requerido
        span.md-error(v-else-if='!$v.brand.code.minLength') mínimo 3 caracteres
      md-field(:class="getValidationClass('name')")
        label Nombre
        md-input(v-model='brand.name')
        span.md-error(v-if='!$v.brand.name.required') requerido
        span.md-error(v-else-if='!$v.brand.name.minLength') mínimo 3 caracteres        
      md-field(:class="getValidationClass('icon')")
        label Url del logo
        md-input(v-model='brand.icon')                  
        span.md-error(v-if='!$v.brand.icon.required') requerido
        span.md-error(v-else-if='!$v.brand.icon.url') url no válida        
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { validationMixin } from "vuelidate";
import { required, url, minLength } from "vuelidate/lib/validators";
import CpModalBase from "@/components/base/modulo/CpModalBase";
export default {
  components: { CpModalBase },
  mixins: [validationMixin],
  props: {
    showDialog: {},
    closeDialog: {},
    getListBrands: {},
    brand: {
      default: function() {
        return {
          cod_brand: "",
          name: "",
          icon: "",
          code: "",
          date_register: ""
        };
      }
    }
  },
  validations: {
    brand: {
      code: {
        required,
        minLength: minLength(3)
      },
      name: {
        required,
        minLength: minLength(3)
      },
      icon: {
        required,
        url
      }
    }
  },
  methods: {
    ...mapActions("brand", ["add", "edit"]),
    getValidationClass(fieldName) {
      const field = this.$v.brand[fieldName];
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
              this.$store.commit("user/changeLoader");
              this.closeDialog();
              this.getListBrands();
            })
            .catch(() => {
              this.$store.commit("user/changeLoader");
              console.log("Error agregar brand");
            });
        } else {
          this.edit(this.brand)
            .then(res => {
              this.$store.commit("user/changeLoader");
              this.closeDialog();
              this.getListBrands();
            })
            .catch(() => {
              this.$store.commit("user/changeLoader");
              console.log("Error agregar brand");
            });
        }
      }
    },
    closeDialogBrand() {
      this.$v.$reset();
      this.closeDialog();
    }
  }
};
</script>