<template>
  <div class="SwiperList">
    <swiper ref="SwiperList" :options="SwiperList">
      <swiper-slide
        v-for="(item, index) in SwiperList_list.slice(20, 28)"
        :key="index"
         @click.native="jumpRouter(item.id)"
      >
        <el-card :body-style="{ padding: '0px' }" shadow="hover">
          <img :src="item.img" alt="" class="image" />
          <div
            style="
            padding: 10px
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            "
          >
            <span>{{ item.title }}</span>
            <div class="bottom clearfix">
              <p
                class="bottom_title"
                style="font-size: 10px; color: rgb(140, 140, 140)"
              >
                www.stride.fun
              </p>
            </div>
          </div>
        </el-card>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </div>
</template>

<script>
export default {
  name: 'SwiperList',
  props: {
    SwiperList_list: Array,
  },
  data() {
    return {
      SwiperList: {
        slidesPerView: 4,
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
          nextEl: '.SwiperList .swiper-button-next',
          prevEl: '.SwiperList .swiper-button-prev',
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.SwiperList.$swiper;
    },
  },
  methods: {
    jumpRouter(id){
      this.$emit('jumpRouter',id)
    }
  },
  mounted() {
    this.swiper.slideTo(2, 1000, false);
  },
};
</script>

<style lang="scss" scoped>
.SwiperList {
  position: relative;
  width: 80%;
  margin: 0 auto;
  img {
    width: 277px;
    transform: scale(0.6);
  }
}
.swiper-slide-active {
  transform: scale(1.2) !important;
}
.swiper-container {
  padding: 70px 0;
}
.swiper-button-prev {
  left: -8%;
}
.swiper-button-next {
  right: -8%;
}
.swiper-button-prev,
.swiper-button-next {
  --swiper-theme-color: #ccc; /* 设置Swiper风格 */
  z-index: 1;
}
</style>
