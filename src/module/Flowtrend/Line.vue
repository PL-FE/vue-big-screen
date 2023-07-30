<template>
  <v-chart class="chart" :option="option" autoresize />
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
});
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>
