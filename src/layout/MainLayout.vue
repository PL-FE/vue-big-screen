<!-- 2列。2：1 -->
<template>
  <div class="page absolute top-0 bottom-0 left-0 right-0 flex flex-col">
    <div class="page-header p-4 flex justify-between">
      <img src="@/assets/img/battle-title.png" class="img-logo" />
      <div class="page-header-data flex-1"></div>
    </div>
    <div class="flex-box flex-1 flex flex-wrap overflow-y-auto">
      <div class="flex-item p-4 grow-[2]">
        <FlowPerformance />
        <Newcustomtrend />
        <Accumulativeaward />
        <Award />
      </div>
      <div class="flex-item p-4 grow">
        <Flowtrend />
        <Customperformance />
      </div>
    </div>
  </div>
</template>

<script setup>
import FlowPerformance from "@/module/PC/FlowPerformance.vue";
import Newcustomtrend from "@/module/PC/Newcustomtrend.vue";
import Accumulativeaward from "@/module/PC/Accumulativeaward.vue";
import Award from "@/module/PC/Award.vue";
import Flowtrend from "@/module/PC/Flowtrend/index.vue";
import Customperformance from "@/module/PC/Customperformance/index.vue";
</script>

<style lang="scss" scoped>
.page {
  background-color: $battleColor;
  .page-header {
    @media (max-width: 600px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .img-logo {
        max-height: 130px;
        width: 100%;
        margin-right: 0px;
      }
      .page-header-data {
        width: 100%;
      }
    }
    .img-logo {
      max-width: 230px;
      width: 30%;
      margin-right: 20px;
    }
    .page-header-data {
      border: 16px solid $battleSecondary;
      background-color: $baseColor;
    }
  }
}
$flex-item-basic: 400px;
.flex-box {
  box-shadow: inset 0px 15px 10px -15px #fff;

  .flex-item {
    flex-basis: $flex-item-basic;
  }
}
</style>
