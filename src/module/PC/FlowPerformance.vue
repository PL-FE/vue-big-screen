<!-- 各大区流水表现 -->
<template>
  <CardModule titlePicUrl="/src/assets/img/battle-title-flow-performance.png">
    <CardContainer
      v-for="item in 4"
      :key="item"
      :title="`北部${item}区`"
      class="basis-100"
    >
      <CardItem v-for="it in 4" :key="it" class="basis-30" />
    </CardContainer>
  </CardModule>
</template>

<script setup>
import CardContainer from "@/components/CardContainer.vue";
import CardModule from "@/components/CardModule.vue";
import CardItem from "@/components/CardItem.vue";
</script>
