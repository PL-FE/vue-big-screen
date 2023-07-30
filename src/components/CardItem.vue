<template>
  <div class="flex-item grow m-1 border basis-[200px]">
    <h1 class="card-item-title text-base p-2 text-center">北京分部</h1>
    <p>销售 1 组 3x</p>
    <p>销售 2 组 2x</p>
    <p>销售 3 组 x</p>
  </div>
</template>
<script setup>
const props = defineProps({
  basis: {
    type: [String, Number],
    default: 200,
  },
});
</script>

<style lang="scss" scoped>
.card-item-title {
  background-color: $battleSecondaryRgba;
  border: 1px solid $battleSecondary;
}
</style>
