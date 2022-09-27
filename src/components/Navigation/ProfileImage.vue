<template>
  <img :src="imgLink" class="w-8 h-8 object-contain rounded-3xl" />
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imgLink: require("@/assets/images/babe.png"),
    };
  },
};
</script>
