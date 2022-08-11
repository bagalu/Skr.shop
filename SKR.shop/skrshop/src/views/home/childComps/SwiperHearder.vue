<template>
  <div class="SwiperHreader">
    <div class="block">
      <el-carousel trigger="click" height="600px">
        <el-carousel-item v-for="(item, index) in swiperList" :key="index">
          <img :src="item.swiperImg" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SwiperHreader',
  props: {
    swiperList: Array,
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
