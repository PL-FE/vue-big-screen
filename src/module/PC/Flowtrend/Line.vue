<template>
  <v-chart class="chart bg-white" :option="option" autoresize />
</template>

<script setup>
import VChart from "vue-echarts";
import { ref } from "vue";
const option = ref({
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: "line",
    },
  ],
  label: {
    show: true,
    formatter: "{c}万元",
  },
});
</script>

<style scoped>
.chart {
  height: 300px;
}
</style>
