<template>
  <div class="card-module sub-bg-color p-2 mb-4">
    <img class="p-2 h-14" :src="props.titlePicUrl" />
    <div class="flex-box flex flex-wrap">
      <slot></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>
<script setup>
const props = defineProps({
  titlePicUrl: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
.flex-card {
  background-color: $baseColor;
}
</style>
