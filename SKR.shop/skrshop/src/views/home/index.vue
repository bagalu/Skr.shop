<template>
  <div class="home">
    <!-- 头部轮播 -->
    <SwiperHearder :swiperList="swiperList"></SwiperHearder>
    <Title><p>Basketball shoes</p></Title>
    <Ancard :AnCard_list="AnCard_list" @jumpRouter="jumpRouter"></Ancard>
    <!-- 展示卡片 -->
    <Title><p>Skate shoes</p></Title>
    <SwiperList :SwiperList_list="SwiperList_list" @jumpRouter="jumpRouter"></SwiperList>
    <Title><p>Running shoes</p></Title>
    <SwiperCarousel :SwiperCarousel_list="SwiperCarousel_list" @jumpRouter="jumpRouter"></SwiperCarousel>
    <Title><p>Casual shoes</p></Title>
    <!-- 带有颜色渐变的轮播 -->
    <SwiperColor :SwiperColor_list="SwiperColor_list" @jumpRouter="jumpRouter"></SwiperColor>
    <List :List="SwiperColor_list" @jumpRouter="jumpRouter"></List>
    <Title><p>Recommend+</p></Title>
    <SwiperAndList :SwiperAndList_list="SwiperAndList_list" @jumpRouter="jumpRouter"></SwiperAndList>
    <SwiperHearder :swiperList="swiperList"></SwiperHearder>
    <TypeList
      :TypeList_list="item"
      v-for="(item, index) in TypeList_list"
      :key="index"
      :item="TypeList[index]"
      @jumpRouter="jumpRouter"
    ></TypeList>
    <Title><p>Knapsack</p></Title>
    <SwiperTab :SwiperTab_list="SwiperTab_list" @jumpRouter="jumpRouter"></SwiperTab>
    <Title><p>WDNA STYLE</p></Title>
    <ShopListTab :ShopListTab_list="ShopListTab_list" :TypeTwoList="TypeTwoList" @jumpRouter="jumpRouter"></ShopListTab>

    <!-- 底部 -->
    <Footer></Footer>
  </div>
</template>
<script>
import SwiperHearder from './childComps/SwiperHearder.vue';
import Title from 'components/common/title/Title.vue';
import Ancard from './childComps/AnCard.vue';
import SwiperList from './childComps/SwiperList.vue';
import SwiperCarousel from './childComps/SwiperCarousel.vue';
import SwiperColor from './childComps/SwiperColor.vue';
import List from './childComps/List.vue';
import SwiperAndList from './childComps/SwiperAndList.vue';
import TypeList from './childComps/TypeList.vue';
import Footer from './childComps/Footer.vue';
import SwiperTab from './childComps/SwiperTab.vue';
import ShopListTab from './childComps/ShopListTab.vue';

import { getSwiperList } from 'api/home.js';
import { getTypeOneList, getTypeTwoList  ,getParentTwoList,
getParentOneList,} from 'api/getlist.js';
export default {
  name: "Home",
  data() {
    return {
      swiperList: [],
      AnCard_list: [],
      SwiperList_list: [],
      SwiperCarousel_list: [],
      SwiperColor_list: [],
      ListL: [],
      SwiperAndList_list: [],
      TypeList_list: [],
      TypeList: [],
      SwiperTab_list: [],
      ShopListTab_list: [],
      TypeTwoList: [],
       TypeTwolist: [],
      TypeOnelist: [],
      ParentTwoList: [],
      ParentOneList: [],
    };
  },
  components: {
    SwiperHearder,
    Title,
    Ancard,
    SwiperList,
    SwiperCarousel,
    SwiperColor,
    List,
    SwiperAndList,
    TypeList,
    Footer,
    SwiperTab,
    ShopListTab,
  },
  methods: {
    getSwiperList() {
      getSwiperList().then((res) => {
        if (res.code != 200) return;
        this.swiperList = res.res;
      });
    },
    getAncardList() {
      getTypeTwoList("篮球鞋").then((res) => {
        if (res.code != 200) return;
        this.AnCard_list = res.data;
        this.SwiperAndList_list = res.data;
      });
    },
    getSwiperList_list() {
      getTypeTwoList("板鞋").then((res) => {
        if (res.code != 200) return;
        this.SwiperList_list = res.data;
      });
    },
    getSwiperCarousel_init() {
      getTypeTwoList("跑鞋").then((res) => {
        if (res.code != 200) return;
        this.SwiperCarousel_list = res.data;
      });
    },
    getSwiperColor_init() {
      getTypeTwoList("休闲鞋").then((res) => {
        if (res.code != 200) return;
        this.SwiperColor_list = res.data;
      });
    },
    getTypeList_init() {
      let TypeList = ['服饰', '鞋类', '配件', '儿童专区'];
      this.TypeList = TypeList;
      let arr = [];
      TypeList.forEach((item) => {
        arr.push(getTypeOneList(item));
      });
      Promise.all(arr).then((res) => {
        res.forEach((item, index) => {
          if (item.code != 200) return;
          this.TypeList_list.push(item.res.slice(0, 6));
        });
      });
    },
    SwiperTab_init() {
      getTypeOneList('配件').then((res) => {
        if (res.code != 200) return;
        this.SwiperTab_list = res.res;
      });
    },
    ShopListTab_init() {
      let TypeTwoList = [
        '连帽卫衣',
        '单茄克',
        '单风衣',
        '针织短裤',
        '运动背心',
      ];
      this.TypeTwoList = TypeTwoList;
      let arr = [];
      TypeTwoList.forEach((item) => {
        arr.push(getTypeTwoList(item));
      });
      Promise.all(arr).then((res) => {
        res.forEach((item, index) => {
          if (item.code != 200) return;
          this.ShopListTab_list.push(item.data.slice(0,6));
        });
      });
    },
    getTypeOnelist_init() {
      getParentOneList().then((res) => {
        if (res.code != 200) return;
        this.TypeOnelist = res.data;
      });
    },
    jumpRouter(id){
      this.$router.push(`/details/${id}`)
    }
  },
  created() {
    this.getSwiperList();
    this.getAncardList();
    this.getSwiperList_list();
    this.getSwiperCarousel_init();
    this.getSwiperColor_init();
    this.getTypeList_init();
    this.SwiperTab_init();
    this.ShopListTab_init()
    this.getTypeOnelist_init();
  },
};
</script>

<style></style>
