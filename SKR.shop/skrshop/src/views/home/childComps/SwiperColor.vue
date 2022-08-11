<template>
  <div class="SwiperColor">
    <swiper ref="SwiperColor" :options="SwiperColor">
      <swiper-slide
        v-for="(item, index) in SwiperColor_list.slice(23, 32)"
        :key="index"
        @click.native="jumpRouter(item.id)"
      >
        <el-card :body-style="{ padding: '0px' }" shadow="hover">
          <img :src="item.img" alt="" class="image" />
          <div class="bottom" :style="{ backgroundColor: colorarr[index] }">
            <span>{{ item.title }}</span>
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
  name: 'SwiperColor',
  props: {
    SwiperColor_list: Array,
  },
  data() {
    return {
      colorarr: [
        'red',
        'orange',
        'blue',
        'green',
        'purple',
        'pink',
        'red',
        'orange',
        'blue',
      ],
      SwiperColor: {
        slidesPerView: 2,
        spaceBetween: 0,
        centeredSlides: true,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        autoplay: {
          delay: 2000,
          disableOnInteraction: false, //*手动操作轮播图后不会暂停*
        },
        loop: true, // 循环模式选项
        navigation: {
          nextEl: '.SwiperColor .swiper-button-next',
          prevEl: '.SwiperColor .swiper-button-prev',
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.SwiperColor.$swiper;
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
.SwiperColor {
  position: relative;
  width: 80%;
  margin: 0 auto;
  img {
    width: 618px;
    transform: scale(1);
  }
  .bottom {
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
    color: #fff;
    font-size: 33px;
    font-weight: 700;
    padding: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .bottom:hover {
    opacity: 0.5;
  }
}
.swiper-slide-active {
  transform: scale(1.2) !important;
  z-index: 4;
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
