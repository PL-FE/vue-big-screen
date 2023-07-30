<template>
  <div class="module sub-bg-color p-2">
    <img
      class="p-2 h-14"
      src="@/assets/img/battle-title-flow-performance.png"
    />

    <div class="flex-box flex flex-wrap">
      <div
        class="flex-card grow m-2 basis-[400px]"
        v-for="item in [1, 2, 3, 4]"
        :key="item"
      >
        <h1 class="text-xl p-2 font-bold">北部{{ item }}区</h1>

        <div class="flex flex-wrap p-1">
          <div
            class="flex-item grow m-1 basis-[200px] border"
            v-for="it in [1, 2, 3, 4]"
            :key="it + 'sub'"
          >
            <h1 class="card-item-title text-base p-2 text-center">北京分部</h1>
            <p>销售 1 组 3x</p>
            <p>销售 2 组 2x</p>
            <p>销售 3 组 x</p>
          </div>
        </div>
        <!-- scoped -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.flex-card {
  background-color: $baseColor;
}
.card-item-title {
  background-color: $battleSecondaryRgba;
  border: 1px solid $battleSecondary;
}
</style>
