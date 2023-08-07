<!-- 流水趋势 -->
<template>
  <CardModule titlePicUrl="/src/assets/img/battle-title-flowtrend.png">
    <div class="flex flex-col h-full">
      <CardContainer class="flex-1" :title="`北部1区`">
        <Line />
      </CardContainer>
      <CardContainer class="flex-1" :title="`北部3区`">
        <Calendar />
      </CardContainer>
    </div>
  </CardModule>
</template>

<script setup>
import CardContainer from "@/components/bigScreen/CardContainer.vue";
import CardModule from "@/components/bigScreen/CardModule.vue";
import Line from "@/module/bigScreen/Flowtrend/Line.vue";
import Calendar from "@/module/bigScreen/Flowtrend/Calendar.vue";
</script>
