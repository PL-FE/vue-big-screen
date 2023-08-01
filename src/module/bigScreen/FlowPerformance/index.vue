<!-- 各大区流水表现 -->
<template>
  <CardModule
    titlePicUrl="/src/assets/img/battle-title-flow-performance.png"
    class="h-full w-full"
  >
    <div class="flex flex-col h-full">
      <CardContainer class="flex-1" :title="`北部1区`">
        <Table></Table>
      </CardContainer>
      <CardContainer class="flex-1" :title="`北部2区`"> </CardContainer>
      <CardContainer class="flex-1" :title="`北部3区`"> </CardContainer>
      <CardContainer class="flex-1" :title="`北部4区`"> </CardContainer>
    </div>
  </CardModule>
</template>

<script setup>
import CardContainer from "@/components/bigScreen/CardContainer.vue";
import CardModule from "@/components/bigScreen/CardModule.vue";
import Table from "./Table.vue";
</script>
