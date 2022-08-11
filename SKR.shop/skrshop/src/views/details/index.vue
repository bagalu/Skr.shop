<template>
  <div class="Details">
    <div class="big-wrap">
      <div class="middle-wrap">
        <!-- tab 选择图 -->
        <img :src="tabimg[num].small" alt="" class="middle-pic" ref="Imgleft" />
        <!-- 放大图容器 -->
        <div v-show="show" class="box" ref="Imgright">
          <img
            :style="{
              top: '-' + markPos.top * 2 + 'px',
              left: '-' + markPos.left * 2 + 'px',
            }"
            :src="tabimg[num].normal"
            alt=""
            class="big-pic"
          />
          <!-- 最顶层透明遮罩 -->
        </div>
        <div
          class="maskTop"
          @mouseenter="onMouseEnter"
          @mouseleave="onMouseLeave"
          @mousemove="move"
        ></div>
        <!-- 半透明块 -->
        <div
          class="mark"
          ref="mark"
          v-show="show"
          :style="{ top: markPos.top + 'px', left: markPos.left + 'px' }"
        ></div>
      </div>
      <!-- tab 切换的图 -->
      <div class="small-wrap-left">
        <img
          v-for="(img, index) in tabimg"
          :src="img.small"
          alt=""
          :key="index"
          @click="changeImg(index)"
        />
      </div>
      <div class="small-wrap-right">
        <img
          v-for="(img, index) in tabimg"
          :src="img.small"
          :title="param[index]"
          :key="index"
          :class="{ active: index == selNum }"
          @click="changeGood(index)"
        />
      </div>
    </div>
    <div class="goodInfo">
      <h1 class="title">{{ goodInfo.title }}</h1>
      <span class="sprice">¥{{ goodInfo.special_price }}</span>
      <span class="price">¥{{ goodInfo.price }}</span>
      <p class="shop">官方商城全场包邮</p>
    </div>
    <div class="buyGood">
      <div class="select">
        <div class="size">
          <span>尺码:</span>
          <select name="" id="" ref="select">
            <option :value="item" v-for="(item, index) in options" :key="index">
              {{ item }}
            </option>
          </select>
        </div>
        <div class="count">
          <span>数量:</span>
          <el-input-number
            v-model="goodNum"
            controls-position="right"
            :min="1"
            :max="100"
            size="small"
          ></el-input-number>
        </div>
      </div>
      <div class="joinShopCar">
        <p @click="joinCar">加入购物车</p>
        <p @click="Buy" style="background-color: #000; color: #fff">立即购买</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getShopBySkuId, getShopBySpuId } from 'api/getShopById.js';
import { addShopCar } from 'api/details.js';
export default {
  name: 'Details',
  data() {
    return {
      tabimg: [
        {
          small:
            'https://img.fishfay.com/shopgoods/4/112038061/112038061-7-1/c0a16af26d3de8d6820ef4cfbf9c862e.jpg',
          normal:
            'https://img.fishfay.com/shopgoods/4/112038061/112038061-7-1/c0a16af26d3de8d6820ef4cfbf9c862e.jpg',
        },
      ],
      mackHeight: 0,
      mackWidth: 0,
      imgWidthLeft: 0,
      imgWidthRight: 0,
      num: 0, // 记录当前显示哪一个图片
      selNum: -1, // 商品分类选择索引
      markPos: {
        // 记录 mark位移
        left: 0,
        top: 0,
      },
      bigPos: {
        // 记录大图位移
        left: 0,
        top: 0,
      },
      show: false, // 控制半透明块系那是隐藏
      goodInfo: '',
      options: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL'],
      goodNum: 1, // 商品数量
      param: [], // 商品分类
      id: '',
      buyShopList: '',
      login: false,
    };
  },
  methods: {
    changeImg(index) {
      this.num = index;
    },
    changeGood(index) {
      this.num = index;
      this.selNum = index;
    },
    //鼠标移入事件
    onMouseEnter() {
      this.show = true;
      let finalStyle = this.$refs.mark.currentStyle
        ? this.$refs.mark.currentStyle
        : document.defaultView.getComputedStyle(this.$refs.mark, null);
      this.mackHeight = parseFloat(finalStyle['height']);
      this.mackWidth = parseFloat(finalStyle['width']);
      this.imgWidthLeft = this.$refs.Imgleft.offsetWidth;
    },
    //鼠标移出事件
    onMouseLeave() {
      this.show = false;
    },
    // 移动鼠标事件
    move(event) {
      this.imgWidthRight = this.$refs.Imgright.offsetWidth;
      let X = event.offsetX;
      let Y = event.offsetY;
      let halfHeight = this.mackHeight / 2; //一半阴影高度
      let halfWidth = this.mackWidth / 2; //一半阴影宽度
      let topX = X - halfWidth < 0 ? 0 : X - halfWidth;
      let topY = Y - halfHeight < 0 ? 0 : Y - halfHeight;

      if (topX > this.imgWidthLeft - halfWidth * 2) {
        topX = this.imgWidthLeft - halfWidth * 2;
      }
      if (topY > this.imgWidthLeft - halfHeight * 2) {
        topY = this.imgWidthLeft - halfHeight * 2;
      }
      this.markPos.left = topX;
      this.markPos.top = topY;
    },
    getShopById() {
      let id = this.$route.params.id;
      console.log(this.$route);
      getShopBySkuId(id).then((res) => {
        console.log(res);

        this.tabimg = JSON.parse(res.data[0].imgs);
        this.param = JSON.parse(res.data[0].param);
        this.id = res.data[0].id;
      });
      getShopBySpuId(id).then((res) => {
        console.log(res);
        this.goodInfo = res.data[0];
      });
    },
    joinCar() {
      let shopInfo = {
        params: [this.param[this.selNum], this.$refs.select.value],
        num: this.goodNum,
        customer_id: localStorage.getItem('userId'),
        sku_id: this.id,
      };

      if (!shopInfo.params[0]) {
        this.$message({
          message: '商品分类未选择',
          type: 'warning',
        });
        return;
      }

      addShopCar(shopInfo).then((res) => {
        if (!this.login) {
          this.$message({
            message: '未登录,请先登录',
            type: 'error',
          });
          this.$router.push('/login');
          return
        }
        if (res.code == 200) {
          this.$message({
            message: '加入购物车成功!',
            type: 'success',
          });
        } else {
          this.$message({
            message: '出错了',
            type: 'error',
          });
        }
      });
    },
    Buy() {},
    checkLogin() {
      let userId = localStorage.getItem('userId');
      let token = localStorage.getItem('token');
      let username = localStorage.getItem('username');
      if (userId && token && username) {
        this.login = true;
      }
    },
  },
  created() {
    this.getShopById();
    this.checkLogin();
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.Details {
  position: relative;
}
.big-wrap {
  margin-top: 5%;
  margin-left: 12%;
  position: relative;
  width: 75%;
}

.middle-wrap,
.middle-pic {
  width: 625px;
}

.middle-wrap {
  position: relative;
}

.mark {
  position: absolute;
  top: 0;
  left: 0;
  width: 275px;
  height: 275px;
  background-color: rgba(0, 0, 0, 0.3);
  cursor: crosshair;
}
.maskTop {
  width: 625px;
  height: 625px;
  position: absolute;
  z-index: 5;
  top: 0;
  left: 0;
}

.box {
  position: absolute;
  left: 105%;
  top: 0;
  width: 550px;
  height: 550px;
  overflow: hidden;
  z-index: 2;
}

.big-pic {
  /* 放大镜的大图 */
  width: 1250px;
  position: absolute;
}

.small-wrap-left {
  //   display: flex;
  //   justify-content: space-around;
  position: absolute;
  top: 0;
  left: -120px;
  width: 94px;
}
.small-wrap-right {
  position: absolute;
  right: 0%;
  bottom: 40%;
  width: 40%;
}

.small-wrap-left img {
  width: 90px;
}
.small-wrap-right img {
  width: 90px;
  margin: 5px;
}

.active {
  border: 1px solid black;
  box-sizing: border-box;
}

.goodInfo {
  position: absolute;
  top: 0;
  left: 57%;
  span {
    margin: 5px;
  }
  .price {
    font-size: 16px;
    color: #b0b0b0;
    text-decoration: line-through;
  }
  .sprice {
    font-size: 26px;
  }
  p {
    background-color: #f7f7f7;
    width: 485px;
    height: 65px;
    font-size: 14px;
    margin-top: 25px;
    color: #b0b0b0;
    line-height: 65px;
    padding-left: 10px;
  }
}
.buyGood {
  position: absolute;
  top: 70%;
  left: 57.2%;

  .select {
    border-top: 1px solid #999;
    border-bottom: 1px solid #999;
    padding: 10px 0px;
  }
  select {
    border: none;
    width: 200px;
  }
  .size {
    display: inline-block;
    margin-right: 10px;
  }
  .count {
    display: inline-block;
  }
  input {
    border: none;
  }
  .joinShopCar {
    margin-top: 70px;
    display: flex;
    justify-self: center;
    p {
      line-height: 60px;
      text-align: center;
      width: 223px;
      height: 60px;
      font-size: 20px;
      border: 1px solid #999;
      margin-right: 10px;
    }
  }
}
</style>
