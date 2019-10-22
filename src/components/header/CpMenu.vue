<template lang="pug">
    .md-toolbar-row
        CpMenuLeft
        CpMenuRight
</template>
<script>
import CpMenuLeft from "@/components/header/CpMenuLeft";
import CpMenuRight from "@/components/header/CpMenuRight";
export default {
  components: {
    CpMenuLeft,
    CpMenuRight
  }
};
</script>