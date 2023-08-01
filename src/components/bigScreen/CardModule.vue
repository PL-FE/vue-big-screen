<template>
  <div class="card-module sub-bg-color p-2 flex flex-col">
    <div>
      <img class="p-2 h-14" :src="props.titlePicUrl" />
    </div>
    <div class="flex-1">
      <slot></slot>
    </div>
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
