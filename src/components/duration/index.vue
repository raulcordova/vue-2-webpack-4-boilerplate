<template lang="pug">
    audio(:src="src" @canplaythrough="canplaythrough")
</template>
<script>
export default {
  props: {
    src: {
      default: ""
    },
    setItemDuration: {}
  },
  methods: {
    canplaythrough(e) {
      let seconds = e.currentTarget.duration;
      //console.log(seconds);
      let duration = this.$moment.duration(seconds, "seconds");
      let time = "";
      time =
        duration.hours() + ":" + duration.minutes() + ":" + duration.seconds();
      this.setItemDuration(time);
    }
  }
};
</script>