<template>
  <div class="Topeight">
    <div class="listeight">
      <ul>
        <li
          v-for="(item, index) in imgeightAll"
          :key="index"
          @click="to_details(item)"
        >
          <span class="icon_best">
            <strong>{{ 8 + index }}</strong>
          </span>
          <img :src="item.img" alt="" />
          <div class="AllText">
            <div class="text_worp">
              <div class="brand">Dunst for WOMEN</div>
              <div class="front">[04/23 예약배송]</div>
              <div class="product">
                HALF-SLEEVES BELTED SUMMER-WOOL JACKET SOFT GREIGE_UDJA1E211G1
              </div>
            </div>
            <div class="price">
              <span class="discount_price">37,800</span>
              <span class="base_price">42,000</span>
              <span class="discount_rate">10%</span>
            </div>
            <p class="reservation">预定</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getImg } from '../../../../api/getImg';
export default {
  name: 'Topeight',
  data() {
    return {
      imgeightAll: [],
      TopthreeAll: [],
    };
  },
  props: {
    // 接受点击的种类
    listThree: {
      type: String,
      default: '',
    },
  },
  methods: {
    async getimgs(parent_name, start, end, store) {
      const res = await getImg({ parent_name, start, end, store });
      if (this.listThree == 'All') {
        this.imgeightAll = res;
        this.TopthreeAll = res;
      } else {
        this.imgeightAll = res;
      }
    },
    // 跳转详情预留
    to_details(item) {
      console.log(item);
    },
  },
  created() {
    if (this.listThree == 'All') {
      let arr = ['配件'];
      arr.forEach((item) => {
        this.getimgs(item, 8, 98, 'price');
      });
    } else {
      this.getimgs(this.listThree, 8, 98);
    }
  },
  watch: {
    listThree() {
      if (this.listThree == 'All') {
        this.imgeightAll = this.TopthreeAll;
      } else {
        this.getimgs(this.listThree, 8, 98);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul,
li {
  list-style: none;
}

*::before,
*::after {
  box-sizing: border-box;
}

.Topeight {
  width: 82%;
  margin: 0 auto;

  .listeight {
    margin-top: 60px;

    & ul {
      display: flex;
      flex-wrap: wrap;
      margin-right: -22px;

      & li {
        width: calc((100% - 20px * 6) / 6);
        margin-right: 20px;
        position: relative;

        .icon_best {
          width: 35px;
          height: 35px;
          background: #666;
          position: absolute;
          text-align: center;
          line-height: 30px;
          top: 0;
          left: 0;

          & strong {
            color: white;
            display: block;
            margin-top: 4px;
            font-size: 16px;
          }
        }

        & img {
          width: 100%;
        }

        .AllText {
          width: 100%;
          height: 186px;

          .text_worp {
            height: 91px;

            .brand {
              color: #000000;
              font-size: 13px;
              margin-bottom: 10px !important;
              font-family: 'yg750';
              width: auto;
            }

            .front {
              color: #000000;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              line-height: 14px;
              margin-bottom: 9px;
              padding-top: 3px;
            }

            .product {
              line-height: 15px;
              color: #555;
              overflow: hidden;
              margin-bottom: 16px;
              font-size: 12px;
            }
          }

          .price {
            position: relative;
            font-family: 'ProximaNova-Regular';
            line-height: 100%;
            margin-bottom: 10px;

            .discount_price {
              font-size: 16px;
              color: #000000 !important;
              margin-right: 8px;
            }

            .base_price {
              font-size: 12px;
              color: #808080;
              text-decoration: line-through;
            }

            .discount_rate {
              display: block;
              position: absolute;
              top: 0;
              right: 0;
              font-size: 16px;
              color: #ff4000;
            }
          }

          .reservation {
            border: 1px solid #9b9b9b;
            font-size: 12px;
            text-align: center;
            line-height: 18px;
            width: 30px;
            height: 18px;
            color: #b2b2b2;
            box-shadow: 1px 1px 2px #9b9b9b;
          }
        }
      }
    }
  }
}
</style>
