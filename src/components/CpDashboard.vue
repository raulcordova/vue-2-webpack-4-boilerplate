<template lang="pug">
    div#home_dashboard
        h2 Pokemon: {{nombre}}
        img.imagen(:src='img')
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      nombre: "Sin Nombre",
      img: ""
    };
  },
  created: function() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      axios
        .get("photos/1")
        .then(res => {
          this.nombre = res.data.title;
          this.img = res.data.url;
          console.log(res);
        })
        .catch(err => {
          reject(err);
        });
    }
  }
};
</script>


<style lang="styl">
#home 
  dashboard
    padding: 50px 0 
  .imagen 
    width: 200px;
</style>
