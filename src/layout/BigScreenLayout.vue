<template>
  <!-- 缩放+动态宽高 -->
  <v-scale-screen
    :width="route.query.w || wh.w"
    :height="route.query.h || wh.h"
    :boxStyle="{ backgroundColor: '#fff' }"
  >
    <div class="flex-box absolute top-0 bottom-0 left-0 right-0 flex flex-wrap">
      <div class="flex-item flex justify-center items-center">
        <FlowPerformance class="h-full w-full" />
      </div>
      <div class="flex-item flex justify-center items-center">
        <Flowtrend class="h-full w-full" />
      </div>
      <div class="flex-item flex justify-center items-center"></div>
    </div>
  </v-scale-screen>
</template>

<script setup>
import FlowPerformance from "../module/bigScreen/FlowPerformance/index.vue";
import Flowtrend from "../module/bigScreen/Flowtrend/index.vue";
import VScaleScreen from "v-scale-screen";
import { reactive } from "vue";
import { useRoute } from "vue-router";
const wh = reactive({
  w: 1920,
  h: 1080,
});
const route = useRoute();

const w = document.documentElement.clientWidth;
const h = document.documentElement.clientHeight;
const rate = wh.h / h;
wh.w = rate * w;
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
