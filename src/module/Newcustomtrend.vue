<!-- 新增客户数 -->
<template>
  <CardModule titlePicUrl="/src/assets/img/battle-title-newcustomtrend.png">
    <CardContainer v-for="item in 4" :key="item" :title="`北部${item}区`">
      <CardItem basis="0" v-for="it in 4" :key="it" />
    </CardContainer>
  </CardModule>
</template>

<script setup>
import CardContainer from "@/components/CardContainer.vue";
import CardModule from "@/components/CardModule.vue";
import CardItem from "@/components/CardItem.vue";
</script>
