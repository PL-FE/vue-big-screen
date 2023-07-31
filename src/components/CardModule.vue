<template>
  <div class="card-module sub-bg-color p-2">
    <img class="p-2 h-14" :src="props.titlePicUrl" />
    <slot></slot>
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
.card-module + .card-module {
  margin-top: 1rem;
}
</style>
