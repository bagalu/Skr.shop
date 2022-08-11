<template>
  <div>
    <el-container>
      <el-header style="padding: 0" height="130px">
        <div
          class="nav_top"
          style="z-index: 999; position: relative; background-color: #fff"
        >
          <!-- 顶左图标 -->
          <div class="logo" @click="Home">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
          <!-- 搜索框 -->
          <div class="search">
            <span class="search_line">
              <input
                type="text"
                placeholder="潮流,从搜索开始"
                v-model="keyWord"
              />
              <span @click="search">
                <i class="el-icon-search"></i>
              </span>
            </span>
          </div>
          <!-- 右图标 -->
          <div class="icons" v-if="NavbarShow">
            <div class="jiaru" @click="regUser">
              <i class="el-icon-user"></i>
              <p>加入</p>
            </div>
            <div class="denglu" @click="Login">
              <i class="el-icon-orange"></i>
              <p>登录</p>
            </div>
            <div class="gwc" @click="shopCar">
              <i class="el-icon-shopping-cart-2"></i>
              <p>{{ shopCar.length }}</p>
            </div>
          </div>
          <div class="icons" v-else>
            <div class="jiaru" @click="logout">
              <i class="el-icon-switch-button"></i>
              <p>LOGOUT</p>
            </div>
            <div class="denglu" @click="Login">
              <i class="el-icon-user"></i>
              <p>MY</p>
            </div>
            <div class="gwc" @click="shopCar">
              <i class="el-icon-shopping-cart-2"></i>
              <p>{{ shopCar.length }}</p>
            </div>
          </div>
        </div>
        <!-- 滚动后黑条 -->
        <div class="header" ref="header" :class="headerFixed ? 'issFixed' : ''">
          <div class="bottom">
            <div class="leftlogo" @click="$router.push('/')">
              <img
                src="data:image/png;base64,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"
                alt=""
              />
            </div>
            <div class="conent">
              <ul class="left">
                <li
                  v-for="(item, index) in TypeOnelist"
                  :key="index"
                  @click="TypeOnoClick(item)"
                >
                  {{ item }}
                  <div class="eng" style="">
                    <div class="conent1">
                      <ul class="left1">
                        <li
                          v-for="(it, ix) in TypeTwolist[index]"
                          :key="ix"
                          @click="TypeTwoClick(it)"
                        >
                          {{ it }}
                        </li>
                      </ul>
                      <div class="right1">
                        <ul>
                          <li v-for="(ite, inx) in navList[index]" :key="inx">
                            <img :src="ite.img" alt="" />
                            <h2>{{ ite.title }}</h2>
                            <p>
                              <span></span>
                            </p>
                            <p>
                              <span>www.stride.fun</span>
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <ul class="right">
                <li
                  v-for="(item, index) in topright"
                  :key="index"
                  @click="tz(item)"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
          <div class="utility">
            <div v-if="isChange" @click="clickSearch" style="display: flex">
              <div
                class="icon"
                style="padding-top: 10px; text-align: center; margin-left: 10px"
              >
                <i
                  class="el-icon-search anticon anticon-search"
                  style="width: 20px; height: 20px"
                ></i>
                <p style="color: white; margin: 0">SEARCH</p>
              </div>
              <div
                class="icon"
                style="padding-top: 10px; text-align: center; margin-left: 10px"
              >
                <i
                  class="el-icon-user anticon anticon-search"
                  style="width: 20px; height: 20px"
                ></i>
                <p style="color: white; margin: 0">MY</p>
              </div>
              <div
                class="icon"
                style="padding-top: 10px; text-align: center; margin-left: 10px"
              >
                <i
                  class="el-icon-shopping-cart-2 anticon anticon-search"
                  style="width: 20px; height: 20px"
                ></i>
                <p style="color: white; margin: 0">{{ shopCar.length }}</p>
              </div>
            </div>
            <div
              class="nav_search"
              v-else
              style="background-color: white; height: 39px; margin-top: 9px"
            >
              <div class="search" :focusFlag="focusFlag" style="width: 100%">
                <span
                  class="search_line"
                  style="
                    width: 200px;
                    display: flex;
                    text-align: center;
                    align-items: center;
                  "
                >
                  <input
                    type="text"
                    style="transform: none; transition: none"
                    placeholder="潮流,从搜索开始"
                  />
                  <span>
                    <i class="el-icon-search"></i>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </el-header>
      <el-main style="padding: 0">
        <!-- 右侧边栏 -->
        <div>
          <div class="side_menu" style="right: 0px">
            <div class="side_M">
              <div class="side_bar">
                <el-button
                  @click="drawer = true"
                  type="primary"
                  style="
                    margin-left: 0px;
                    padding: 0;
                    color: #fff;
                    background-color: black;
                    border-color: black;
                  "
                >
                  <i
                    class="el-icon-s-operation anticon anticon-unordered-list"
                  ></i>
                </el-button>

                <el-drawer
                  title="购物车"
                  :visible.sync="drawer"
                  :direction="direction"
                  :before-close="handleClose"
                  :modal="false"
                  :size="400"
                >
                  <span>购物车内容</span>
                </el-drawer>
              </div>

              <div class="quick_history">
                <i
                  class="el-icon-pie-chart anticon anticon-unordered-list"
                  id="history"
                ></i>
              </div>
            </div>
            <!-- 上下 -->
            <div class="arrow_bar">
              <div class="backTop">
                <el-backtop
                  class="el-backtop"
                  :visibility-height="200"
                  style="
                    color: white;
                    right: 0px;
                    bottom: 0px;
                    width: 55px;
                    height: 35px;
                    background-color: black;
                    position: static;
                    font-size: 18px;
                  "
                >
                  <div
                    style="
                       {
                        background-color: #f2f5f6;
                        text-align: center;
                        font-size: '18px';
                        padding-right: 6px;
                      }
                    "
                  >
                    <i
                      class="el-icon-top"
                      style="width: 14px; height: 14px"
                    ></i>
                  </div>
                </el-backtop>
              </div>
              <a href="#di" style="color: white">
                <i class="el-icon-bottom"></i>
              </a>
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { getParentTwoList, getParentOneList } from 'api/getlist';
import { getImg } from 'api/getImg.js';

export default {
  name: 'Nav',
  data() {
    return {
      drawer: false,
      direction: 'rtl',
      wrapperClosable: true,
      size: '50%',
      modal: true,
      watchScrollbar: '',
      navBarFixed: 'false',

      TypeTwolist: [],
      TypeOnelist: [],
      ParentTwoList: [],
      ParentOneList: [],

      navList: [],
      xielei: [],
      topright: ['POP', 'EXCLUSIVE', 'EVENT', 'BEST'],

      offsetTop: 0,
      offsetHeight: 0,
      headerFixed: 0,

      NavbarShow: true,
      isChange: true,
      focusFlag: false,

      token: false,
      keyWord: '',
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    Home() {
      this.$router.push('/home');
    },
    regUser() {
      this.$router.push('/register');
    },
    Login() {
      this.$router.push('/login');
    },
    shopCar() {
      this.$router.push('/shopcar');
    },
    handleScroll() {
      // 得到页面滚动的距离，兼容
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // 判断页面滚动的距离是否大于吸顶元素的位置
      this.headerFixed = scrollTop > this.offsetTop - this.offsetHeight;
    },
    clickSearch() {
      this.focusFlag = true;
      this.isChange = !this.isChange;

      this.focusFlag = !this.focusFlag;
    },
    islogin() {
      if (
        (this.token =
          sessionStorage.getItem('token') || localStorage.getItem('token'))
      ) {
        console.log('123');
        this.NavbarShow = false;
        console.log('qwe');
      }
    },
    // getTypeTwolist_init() {
    //   getParentTwoList("鞋类").then((res) => {
    //     if (res.code != 200) return;
    //     this.navList.push(res.data);
    //     console.log(res.data);
    //   });
    //   getParentTwoList(["儿童专区"]).then((res) => {
    //     if (res.code != 200) return;
    //     this.ertong = res.data;
    //     console.log(this.ertong);
    //   });
    // },
    getTypeTwolist_init() {
      let TypeList = ['鞋类', '服饰', '配件', '儿童专区'];
      let start = [5, 5, 16, 7];
      let end = [8, 8, 18, 10];
      let arr = [];
      let arrRight = [];
      TypeList.forEach((item, index) => {
        let data = {
          start: start[index],
          end: end[index],
          parent_name: item,
        };
        arr.push(getParentTwoList(item));
        arrRight.push(getImg(data));
      });
      Promise.all(arr).then((res) => {
        res.forEach((item, index) => {
          if (item.code != 200) return;
          this.TypeTwolist.push(item.data);
          console.log(this.TypeTwolist);
        });
      });
      Promise.all(arrRight).then((res) => {
        res.forEach((item, index) => {
          this.navList.push(item);
          console.log(this.navList);
        });
      });
    },
    getTypeOnelist_init() {
      getParentOneList().then((res) => {
        if (res.code != 200) return;
        this.TypeOnelist = res.data;
      });
    },
    tz(item) {
      this.$router.push(`${item}`);
    },
    TypeOnoClick(item) {
      this.$router.push(`/primary/${item}`);
    },
    TypeTwoClick(it) {
      this.$router.push(`/secondary/${it}`);
    },
    search() {
      let word = this.keyWord;
      sessionStorage.setItem('word', word);
      if (this.$route.name == 'search') {
        this.$router.go(0);
        return;
      }
      this.$router.push('/search/product');
    },
    logout() {
      sessionStorage.clear();
      localStorage.clear();
      this.$router.go(0);
    },
  },
  components: {},
  props: {
    // todo: 如何完胜自定义样式
    // style: {
    //     type: Object,
    //     default() {
    //         return {
    //         }
    //     }
    // },
    height: {
      type: Number,
      default: 300,
    },
    right: Number,
    button: Number,
  },
  mounted() {
    this.$nextTick(() => {
      // 获取吸顶元素的dom
      let header = this.$refs.header;
      // 吸顶元素到top的距离
      this.offsetTop = header.offsetTop;
      // 元素自身的高度
      this.offsetHeight = header.offsetHeight;
      // 监听滚动条
      window.addEventListener('scroll', this.handleScroll);
    });
  },

  created() {
    this.getTypeTwolist_init();
    this.getTypeOnelist_init();
    this.islogin();
    if (sessionStorage.getItem('token') || localStorage.getItem('token')) {
      this.NavbarShow = false;
    } else {
      this.NavbarShow = true;
    }
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  watch: {
    $route(to, from) {
      console.log(from.path); //从哪来
      console.log(to.path); //到哪去
      if (sessionStorage.getItem('token') || localStorage.getItem('token')) {
        this.NavbarShow = false;
      } else {
        this.NavbarShow = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
// 顶部
.nav_top {
  height: 65px;
  display: flex;
  justify-content: space-between;
  padding: 0 5% 0 2%;
  overflow: hidden;
}
.logo {
  margin: 0;
  padding: 0;
}
.search {
  //   line-height: 65px;
  box-sizing: border-box;
  width: 25%;
  display: flex;
  align-items: center;
  .search_line {
    width: 100%;
    border-color: currentcolor;
    border-style: none none solid;
    border-width: 0px 0px 2px;
    border-image: none 100% / 1 / 0 stretch;
    padding-bottom: 3px;
    padding-left: 10px;
    input {
      border: none;
      font-size: 16px;
      width: 90%;
      list-style: none;
      display: inline-block;
      height: 32px;
      line-height: 1.5;
      outline: none;
      margin-right: 10px;
    }
    input:focus {
      transform: scale(1.04, 1.04);
      transition: all 0.3s;
    }
  }
}
.icons {
  width: 15%;
  display: flex;
  position: relative;
  cursor: pointer;
  .jiaru,
  .denglu,
  .gwc {
    min-width: 70px;
    width: calc(100% / 3 - 15px);
    position: relative;
    i {
      font-size: 18px;
      font-weight: 700;
      position: absolute;
      top: 10%;
      left: 50%;
      transform: translate(-50%, 0);
      padding-top: 5px;
    }
    p {
      position: absolute;
      top: 20%;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }
}
// 滚动后黑条
.yincang {
  display: none;
}

.issFixed {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 4;
}
.navBarWrap {
  position: fixed;
  top: 0;
  z-index: 9;
}
.header {
  width: 100%;
  min-width: 1240px;
  .bottom {
    width: 100%;
    height: 65px;
    line-height: 65px;
    background-color: #000000;
    color: white;
    overflow: hidden;
    z-index: 55;
  }
  .bottom .conent {
    width: 55%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .bottom ul {
    width: 100%;
    // display: flex;
    margin: 0 15px;
  }
  .left {
    float: left;
  }
  .bottom ul li {
    flex: 1;
    text-align: center;
    letter-spacing: 2px;
    float: left;
    width: 24%;
  }
  .bottom ul li:hover .eng {
    display: block;
  }
  li {
    list-style: none;
    .eng {
      display: none;
      position: relative;
      z-index: 20;
      width: 100%;
      height: 300px;
      position: absolute;
      background-color: #ffffff;
      box-shadow: 1px 1px 1px #fff;
      left: 0px;
    }
    .eng .conent1 {
      width: 70%;
      height: 100%;
      margin: 0 auto;
    }
    .eng .conent1 .left1 {
      width: 50%;
      height: 75%;
      padding: 25px 0px 25px 25px;
      overflow: hidden;
      margin: 0;
      // display: flex;
      // flex-wrap: wrap;
      // justify-content: space-between;
      color: black;
    }
    .left1 {
      float: left;
    }
    .eng .conent1 .left1 li {
      float: left;
      color: #4e4d4d;
      height: 30px;
      line-height: 30px;
      width: 25%;
      cursor: pointer;
      font-size: 12px;
      font-family: 'ProximaNova-Regular', 'yg740';
    }
    li {
      list-style: none;
    }
    .eng .conent1 .right1 {
      width: 45%;
      height: 100%;
      display: flex;
      color: black;
    }
    .right1 {
      float: right;
    }
    .eng .conent1 .right1 ul {
      flex: 1;
      padding: 25px 0;
      display: flex;
      overflow: hidden;
    }
    .eng .conent1 .right1 ul li {
      width: 140px;
      height: 100%;
      flex-direction: column;
      margin-right: 20px;
    }
    li {
      list-style: none;
    }
    .eng .conent1 .right1 ul li img {
      width: 100%;
      height: 173px;
      display: block;
    }
    .eng .conent1 .right1 ul li h2 {
      line-height: 30px;
      text-align: center;
      font-weight: 700;
      font-size: 12px;
      overflow: hidden;
      white-space: nowrap;
      color: black;
      text-overflow: ellipsis;
    }
    .eng .conent1 .right1 ul li p {
      line-height: 30px;
      padding: 0;
    }
    .eng .conent1 .right1 ul li p span {
      font-size: 12px;
      color: #333;
      display: block;
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .right {
    float: right;
  }
  .bottom ul li {
    flex: 1;
    text-align: center;
    letter-spacing: 2px;
  }
  .right li {
    font-weight: 700;
    font-size: 14px;
  }
  .right li:hover {
    color: #04bd9e;
  }
  .left li:hover {
    color: #04bd9e;
  }
  .leftlogo {
    position: fixed;
    top: 0px;
    width: 172px;
    height: 65px;
  }
  .utility {
    height: 65px;
    width: 10%;
    min-width: 150px;
    position: absolute;
    top: 0;
    right: 5%;
    display: flex;
    padding-top: 3px;
    .utility .icon {
      cursor: pointer;
      padding-top: 10px;
      text-align: center;
      flex: 1;
      color: #fff;
      text-align: center;
    }
    .utility .icon i {
      font-size: 20px;
    }
    .anticon {
      display: inline-block;
      color: inherit;
      font-style: normal;
      text-align: center;
      text-transform: none;
      vertical-align: -0.125em;
      text-rendering: optimizeLegibility;
      color: white;
    }
  }
}
// 右侧
.side_menu {
  position: fixed;
  bottom: 30px;
  width: 55px;
  color: #fff;
  font-size: 14px;
  text-align: center;
  padding: 10px 0;
  background-color: #0d0d0d;
  transition: all 0.7s;
  z-index: 999;
  .side_M {
    width: 55px;
    background-color: #0d0d0d;
    transition: all 0.5s;
  }
  .side_bar {
    width: 100%;
    padding: 11px 0;
  }
  .quick_history {
    padding: 11px 0;
  }
  .arrow_bar {
    background-color: #0d0d0d;
    margin: 5px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
  }
  .anticon {
    cursor: pointer;
  }
  .icon_btn {
    display: block;
    width: 55px;
    height: 35px;
    line-height: 35px;
    text-align: center;
  }
  .goTop {
    height: 35px;
  }
  .el-backtop:hover {
    background-color: none;
  }
}
a {
  list-style: none;
}
body {
  margin: 0;
}
// 底部
.footerbar {
  width: 100%;
  padding-top: 90px;
  .footertop {
    width: 80%;
    height: 500px;
    margin: 0 auto;
    .footertop-inner {
      height: 130px;
      margin-bottom: 80px;
      img {
        width: 33%;
      }
    }
    .footer_content {
      display: flex;
      justify-content: space-between;
    }

    .notice {
      width: 50%;
    }
    .ant-tabs {
      box-sizing: border-box;
      color: rgba(0, 0, 0, 0.65);
      font-size: 14px;
      font-variant: tabular-nums;
      line-height: 1.5;
      list-style: none;
      font-feature-settings: 'tnum';
      position: relative;
      overflow: hidden;
    }
    .ant-tabs-bar,
    .ant-tabs-nav-container {
      transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .ant-tabs-bar {
      margin: 0 0 16px 0;
      border-bottom: 1px solid #e8e8e8;
      outline: none;
    }
    .ant-tabs-extra-content {
      line-height: 45px;
    }
    button {
      border: 0;
    }
    .ant-btn,
    .ant-btn:active,
    .ant-btn:focus {
      outline: 0;
    }
    .ant-btn {
      line-height: 1.499;
      position: relative;
      display: inline-block;
      font-weight: 400;
      white-space: nowrap;
      text-align: center;
      background-image: none;
      box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      user-select: none;
      touch-action: manipulation;
      height: 32px;
      font-size: 14px;
      border-radius: 4px;
      color: rgba(0, 0, 0, 0.65);
      background-color: #fff;
    }
    .ant-btn > i,
    .ant-btn > span {
      display: inline-block;
      transition: margin-left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      pointer-events: none;
    }
    .ant-tabs-nav-container {
      position: relative;
      box-sizing: border-box;
      margin-bottom: -1px;
      overflow: hidden;
      font-size: 14px;
      line-height: 1.5;
      white-space: nowrap;
    }
    .ant-tabs-bar,
    .ant-tabs-nav-container {
      transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .ant-tabs-nav-wrap {
      margin-bottom: -1px;
      overflow: hidden;
    }
    .ant-tabs-nav-scroll {
      overflow: hidden;
      white-space: nowrap;
    }
    .ant-tabs-nav {
      position: relative;
      display: inline-block;
      box-sizing: border-box;
      margin: 0;
      padding-left: 0;
      list-style: none;
      transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .ant-tabs-nav .ant-tabs-tab {
      font-size: 24px;
      color: #000;
    }
    .ant-tabs-nav .ant-tabs-tab-active {
      font-weight: 500;
    }
    .ant-tabs-nav .ant-tabs-tab {
      position: relative;
      display: inline-block;
      box-sizing: border-box;
      height: 100%;
      margin: 0 32px 0 0;
      padding: 12px 16px;
      text-decoration: none;
      cursor: pointer;
      transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .ant-tabs-nav .ant-tabs-tab {
      font-size: 24px;
      color: #000;
    }
    .ant-tabs-nav .ant-tabs-tab:last-child {
      margin-right: 0;
    }
    .ant-tabs-nav .ant-tabs-tab {
      position: relative;
      display: inline-block;
      box-sizing: border-box;
      height: 100%;
      margin: 0 32px 0 0;
      margin-right: 32px;
      padding: 12px 16px;
      text-decoration: none;
      cursor: pointer;
      transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .ant-tabs-bottom .ant-tabs-ink-bar-animated,
    .ant-tabs-top .ant-tabs-ink-bar-animated {
      transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
        width 0.2s cubic-bezier(0.645, 0.045, 0.355, 1),
        left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .ant-tabs-ink-bar {
      position: absolute;
      bottom: 1px;
      left: 0;
      z-index: 1;
      box-sizing: border-box;
      width: 0;
      height: 2px;
      background-color: #1890ff;
      transform-origin: 0 0;
    }
    .ant-tabs .ant-tabs-bottom-content.ant-tabs-content-animated,
    .ant-tabs .ant-tabs-top-content.ant-tabs-content-animated {
      display: flex;
      flex-direction: row;
      transition: margin-left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      will-change: margin-left;
    }
    .ant-tabs .ant-tabs-bottom-content,
    .ant-tabs .ant-tabs-top-content {
      width: 100%;
    }
    .ant-tabs .ant-tabs-bottom-content > .ant-tabs-tabpane,
    .ant-tabs .ant-tabs-top-content > .ant-tabs-tabpane {
      flex-shrink: 0;
      width: 100%;
      opacity: 1;
      transition: opacity 0.45s;
    }
    .tab_text {
      font-size: 14px;
      color: #000;
    }

    li {
      list-style: none;
    }
    a {
      color: #666;
      text-decoration: none;
    }

    contact {
      width: 40%;
      color: #000;
    }

    .fuwu {
      font-size: 22px;
      color: #000;
    }
    .phone_ {
      font-size: 42px;
      color: #000;
    }
    .timer_ {
      font-size: 14px;
      margin-bottom: 5px;
    }
    .adress_ {
      margin-bottom: 50px;
    }
    .button_icon {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .footer_btn {
      width: 95px;
      height: 40px;
      line-height: 36px;
      color: #000;
      font-size: 14px;
      border: 1px solid #000;
      border-radius: 0;
      margin-right: 10px;
      text-transform: uppercase;
    }
    .ant-btn > i,
    .ant-btn > span {
      display: inline-block;
      transition: margin-left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      pointer-events: none;
    }
    .anticon {
      display: inline-block;
      color: inherit;
      font-style: normal;
      line-height: 0;
      text-align: center;
      text-transform: none;
      vertical-align: -0.125em;
      text-rendering: optimizeLegibility;
    }
  }
}
// 底
.footer {
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding-top: 90px;
  padding-bottom: 20px;
  .footerNav {
    width: 100%;
    height: 60px;
    background-color: #848484;
  }
  .ant-row-flex-middle {
    min-width: 650px;
    height: 60px;
    font-size: 14px;
    color: #fff;
  }

  .ant-row-flex-middle {
    align-items: center;
  }
  .ant-row-flex-space-around {
    justify-content: space-around;
  }
  .ant-row-flex {
    display: flex;
    flex-flow: row wrap;
  }
  .ant-col {
    position: relative;
    min-height: 1px;
  }
  .footer_bar {
    min-width: 110px;
    height: 60px;
    line-height: 60px;
    display: inline-block;
  }
  .ant-row-flex-middle a {
    color: #fff;
  }
  a {
    text-decoration: none;
  }
  .footerMsg {
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
    padding-top: 40px;
    margin-bottom: 20px;
  }
  .ant-row {
    width: 80%;
    margin: 0 auto;
  }
  .ant-row {
    position: relative;
    height: auto;
    display: block;
    box-sizing: border-box;
  }
  .footMsg_left {
    position: relative;
    padding: 0 30px;
  }
  .ant-col-12 {
    display: block;
    box-sizing: border-box;
    width: 50%;
  }
  .ant-col {
    min-height: 1px;
  }
  .ant-col-1,
  .ant-col-2,
  .ant-col-3,
  .ant-col-4,
  .ant-col-5,
  .ant-col-6,
  .ant-col-7,
  .ant-col-8,
  .ant-col-9,
  .ant-col-10,
  .ant-col-11,
  .ant-col-12,
  .ant-col-13,
  .ant-col-14,
  .ant-col-15,
  .ant-col-16,
  .ant-col-17,
  .ant-col-18,
  .ant-col-19,
  .ant-col-20,
  .ant-col-21,
  .ant-col-22,
  .ant-col-23,
  .ant-col-24 {
    flex: 0 0 auto;
    float: left;
  }
  a {
    color: #666;
    text-decoration: none;
  }
  .footMsg_right {
    padding-left: 30px;
  }
}
</style>
>
