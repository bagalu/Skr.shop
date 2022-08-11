<template>
  <div class="SwiperAndList clearfix">
    <div class="List_left">
      <swiper ref="SwiperAndList" :options="SwiperAndList">
        <swiper-slide
          v-for="(item, index) in SwiperAndList_list.slice(8, 16)"
          :key="index"
          @click.native="jumpRouter(item.id)"
        >
          <el-card
            :body-style="{ padding: '0px' }"
            shadow="never"
            style="border: none"
          >
            <img :src="item.img" alt="" class="image" />
          </el-card>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar"></div>
    </div>
    <div class="List_right">
      <div class="List">
        <el-row>
          <el-col
            :span="3"
            v-for="(item, index) in SwiperAndList_list.slice(8, 16)"
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
  </div>
</template>

<script>
export default {
  name: 'SwiperAndList',
  props: {
    SwiperAndList_list: Array,
  },
  data() {
    return {
      SwiperAndList: {
        slidesPerView: 1,
        spaceBetween: 60,
        centeredSlides: true,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        autoplay: {
          delay: 2000,
          disableOnInteraction: false, //*手动操作轮播图后不会暂停*
        },
        loop: true, // 循环模式选项
        navigation: {
          nextEl: '.SwiperAndList .swiper-button-next',
          prevEl: '.SwiperAndList .swiper-button-prev',
        },
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.SwiperAndList.$swiper;
    },
  },
  methods: {
    jumpRouter(id) {
      this.$emit('jumpRouter', id);
    },
  },
  mounted() {
    this.swiper.slideTo(2, 1000, false);
  },
};
</script>

<style lang="scss" scoped>
.List_left {
  margin-right: 10px;
  position: relative;
  width: 40%;
  float: left;
  img {
    width: 600px;
  }
}
.swiper-button-prev {
  left: 2%;
}
.swiper-button-next {
  right: 2%;
}
.swiper-button-prev,
.swiper-button-next {
  --swiper-theme-color: #ccc; /* 设置Swiper风格 */
  z-index: 1;
}
.List_left {
  margin-left: 10px;
  margin-right: 10px;
}
.el-col {
  width: 210px;
  height: 300px;
  padding: 0px 5px;
  margin: 0px 0px 3px;
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
