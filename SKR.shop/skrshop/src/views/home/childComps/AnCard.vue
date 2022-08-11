<template>
  <div class="ancard">
    <el-row>
      <el-col
        :span="6"
        v-for="(item, index) in AnCard_list.slice(0, 4)"
        :key="index"
        
      >
        <el-card :body-style="{ padding: '0px' }" shadow="hover" @click.native="jumpRouter(item.id)">
          <img :src="item.img" class="image" />
          <div
            style="
            padding: 14px
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            "
          >
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
  name: 'Ancard',
  data() {
    return {};
  },
  props: {
    AnCard_list: Array,
  },
  methods:{
    jumpRouter(id){
      this.$emit('jumpRouter',id)
    }
  }
};
</script>

<style lang="scss" scoped>
.el-col {
  padding: 0 5px;
  span {
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
