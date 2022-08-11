<template>
  <div class="TypeList clearfix">
    <div class="type left">
      <el-card class="box-card" shadow="never">
        <p style="font-size: 38px; margin-top: 5px; margin-bottom: 18px">
          {{item}}
        </p>
        <p style="font-size: 18px">
          MORE <i><svg-icon icon-class="arrow-right"></svg-icon></i>
        </p>
      </el-card>
    </div>
    <div class="list">
      <el-row>
        <el-col
          :span="3"
          v-for="(item, index) in TypeList_list.slice(0, 7)"
          :key="index"
          @click.native="jumpRouter(item.id)"
        >
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <img :src="item.img" class="image" />
            <div class="title" style="padding: 14px">
              <span>{{ item.title }}</span>
              <div class="bottom clearfix">
                <p class="bottom_title">www.stride.fun</p>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TypeList',
  data() {
    return {};
  },
  props: {
    TypeList_list: Array,
    item:String,
  },
  methods: {
    jumpRouter(id) {
      this.$emit('jumpRouter', id);
    },
  },
};
</script>

<style lang="scss" scoped>
.TypeList {
  margin-top: 20px;
}
.el-col {
  padding: 0 5px;
  .title {
    width: 160px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  span {
    color: #333;
    font-family: 'ProximaNova-Bold';
    font-size: 20px;
  }
  .el-card {
    height: 280px;
  }
}
.bottom_title {
  font-size: 10px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}

.clearfix:after {
  clear: both;
}
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 180px;
  text-align: right;
  height: 278px;
  border: none;
}
.left {
  float: left;
}
</style>
