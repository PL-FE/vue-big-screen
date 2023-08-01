<!-- 新增客户数 -->
<template>
  <CardModule titlePicUrl="/src/assets/img/battle-title-newcustomtrend.png">
    <div class="flex flex-wrap">
      <CardContainer v-for="item in 4" :key="item" :title="`北部${item}区`">
        <CardItem basis="0" v-for="it in 4" :key="it" class="basis-[200px]" />
      </CardContainer>
    </div>
  </CardModule>
</template>

<script setup>
import CardContainer from "@/components/PC/CardContainer.vue";
import CardModule from "@/components/PC/CardModule.vue";
import CardItem from "@/components/PC/CardItem.vue";
</script>
