<template>
  <div class="flex-card grow m-2 flex flex-col">
    <h1 class="text-xl p-2 font-bold">{{ title }}</h1>

    <div class="flex flex-wrap p-1 flex-1">
      <slot></slot>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
.flex-card {
  background-color: $baseColor;
}
.card-item-title {
  background-color: $battleSecondaryRgba;
  border: 1px solid $battleSecondary;
}
</style>
