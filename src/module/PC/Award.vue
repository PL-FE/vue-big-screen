<!-- 奖金池 -->
<template>
  <CardModule titlePicUrl="/src/assets/img/battle-title-award.png">
    <div class="flex flex-wrap">
      <CardContainer class="award-item" key="先锋奖" title="先锋奖">
        <div>
          <p>12</p>
          <p>123</p>
          <p>1234</p>
        </div>
      </CardContainer>
      <CardContainer class="award-item" key="冲锋奖" title="冲锋奖">
        <div>
          <p>12</p>
          <p>123</p>
          <p>1234</p>
        </div>
      </CardContainer>
      <CardContainer class="award-item" key="前锋奖" title="前锋奖">
        <div>
          <p>12</p>
          <p>123</p>
          <p>1234</p>
        </div>
      </CardContainer>
      <CardContainer class="award-item" key="破釜奖" title="破釜奖">
        <div>
          <p>12</p>
          <p>123</p>
          <p>1234</p>
        </div>
      </CardContainer>
      <CardContainer class="award-item" key="最佳统帅奖" title="最佳统帅奖">
        <div>
          <p>12</p>
          <p>123</p>
          <p>1234</p>
        </div>
      </CardContainer>
      <CardContainer class="award-item" key="巾帼英雄奖" title="巾帼英雄奖">
        <div>
          <p>12</p>
          <p>123</p>
          <p>1234</p>
        </div>
      </CardContainer>
    </div>
    <CardContainer class="award-item seft" key="铁骑奖" title="铁骑奖">
      <div>
        <p>12</p>
        <p>123</p>
        <p>1234</p>
      </div>
    </CardContainer>
  </CardModule>
</template>

<script setup>
import CardContainer from "@/components/PC/CardContainer.vue";
import CardModule from "@/components/PC/CardModule.vue";
</script>

<style lang="scss" scoped>
.award-item {
  flex-basis: 20rem;
}
.seft {
  flex-basis: 1;
}
</style>
