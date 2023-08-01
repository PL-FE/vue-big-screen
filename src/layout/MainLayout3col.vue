<template>
  <div class="flex-box absolute top-0 bottom-0 left-0 right-0 flex flex-wrap">
    <div class="flex-item flex justify-center items-center">
      <FlowPerformance />
    </div>
    <div class="flex-item flex justify-center items-center"></div>
    <div class="flex-item flex justify-center items-center"></div>
  </div>
</template>

<script setup>
import FlowPerformance from "../module/bigScreen/FlowPerformance/index.vue";
</script>

<style lang="scss" scoped>
$flex-item-basic: 300px;
.flex-box {
  border: 1px solid red;
  height: 100%;
  width: 100%;

  .flex-item {
    border: 1px solid green;
    flex: 1 1 $flex-item-basic;
    height: 100%;
  }
}

@media screen and (max-width: ($flex-item-basic * 3)) {
  // 前面第二个，从后面数第二个。即限定3个子元素的情况下的中间子元素
  .flex-box {
    height: auto;
  }
  .flex-box .flex-item:nth-child(2):nth-last-child(2) {
    order: -1;
    flex: $flex-item-basic * 2;
  }
}
</style>
