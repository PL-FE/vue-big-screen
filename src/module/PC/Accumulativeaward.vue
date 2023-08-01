<!-- 各大区累计奖励 -->
<template>
  <CardModule titlePicUrl="/src/assets/img/battle-title-accumulativeaward.png">
    <div class="bg-white flex-1 m-2 flex flex-wrap">
      <div
        v-for="item in [1, 2, 3, 4]"
        :key="item"
        class="box-item flex-1 h-5 flex justify-between m-2 basis-40"
      >
        <div class="px-2">TOP {{ item }}</div>
        <div class="sub-rgba-bg-color flex-1 px-2">北部{{ item }} 区</div>
      </div>
    </div>
  </CardModule>
</template>

<script setup>
import CardModule from "@/components/PC/CardModule.vue";
</script>

<style scoped lang="scss">
.box-item {
  box-sizing: border-box;
  line-height: 80px;
  height: 80px;
  border: 1px solid $battleSecondary;
}
</style>
