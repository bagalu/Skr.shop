<template>
  <div class="ShopListTab">
    <ul class="tab">
      <li
        class="tabitem"
        v-for="(item, index) in TypeTwoList"
        :key="index"
        @click="changePage(index)"
        :class="{ active: index == page }"
      >
        {{ TypeTwoList[index] }}
      </li>
    </ul>
    <div class="content">
      <el-row>
        <el-col
          :span="4"
          v-for="(item, index) in ShopListTab_list[page]"
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
  name: 'ShopListTab',
  props: {
    ShopListTab_list: Array,
    TypeTwoList: Array,
  },
  data() {
    return {
      page: 1,
    };
  },
  methods: {
    changePage(index) {
      this.page = index;
    },
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
ul {
  list-style: none;
  display: flex;
  width: 60%;
  margin: 0 auto;
  justify-content: space-around;
  padding: 10px 0;
  font-size: 20px;
}
.active{
    border-bottom:3px solid #000
}
</style>
