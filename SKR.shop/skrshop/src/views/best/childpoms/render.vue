<template>
  <div>
    <top-one :listOne="getmsg"></top-one>
    <top-four :listTwo="getmsg"></top-four>
    <top-eight :listThree="getmsg"></top-eight>
    <div class="page">
      <el-pagination layout="prev, pager, next" :total="50">
      </el-pagination>
    </div>

  </div>
</template>

<script>
import TopOne from './childpoms/TopOne.vue';
import TopFour from './childpoms/Topfour.vue';
import TopEight from './childpoms/TopEight.vue'
export default {
  name: 'Render',
  components: {
    TopOne, TopFour, TopEight
  },
  props: {
    getmsg: {
      type: String,
      default: "",
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  justify-content: center;
}
</style>