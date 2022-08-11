<template>
  <div class="List">
    <el-row>
      <el-col :span="3" v-for="(item, index) in List.slice(0, 8)" :key="index" @click.native="jumpRouter(item.id)">
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
</template>

<script>
export default {
  name: 'List',
  data() {
    return {};
  },
  props: {
    List: Array,
  },
  methods: {
    jumpRouter(id) {
      this.$emit('jumpRouter', id);
    },
  },
};
</script>

<style lang="scss" scoped>
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
</style>
