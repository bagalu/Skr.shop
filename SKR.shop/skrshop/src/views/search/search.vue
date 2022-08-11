<template>
  <div>
    <div class="search">
      <div class="first">
        <p>
          "{{ word }}"有
          <span style="color: #0ec3b2">
            {{ list.length }}
          </span>
          个搜索结果
        </p>
      </div>

      <div class="form">
        <el-tabs
          v-model="activeName"
          type="card"
          @tab-click="handleClick"
          style="width: 284px"
        >
          <el-tab-pane label="产品" name="first"></el-tab-pane>
          <el-tab-pane label="活动(0)" name="second"></el-tab-pane>
          <el-tab-pane label="买家秀(120)" name="third"></el-tab-pane>
        </el-tabs>
      </div>
      <div class="xuanran">
        <el-row>
          <el-col :span="6" v-for="(item, index) in list" :key="index">
            <el-card :body-style="{ padding: '20px' }" shadow="hover">
              <img :src="item.img" class="image" />
              <div style="padding: 4px" class="yincang">
                <span
                  class="tit"
                  style="
                    overflow: hidden;
                    color: rgba(0, 0, 0, 0.85);
                    font-weight: 600;
                    font-size: 20px;
                    white-space: nowrap;
                    text-alin: center;
                    text-overflow: ellipsis;
                  "
                  >{{ item.title }}</span
                >
                <div>目前没有活动</div>
                <div class="bottom clearfix">
                  <p>
                    <span style="color: #000000d9; font-weight: bolder"
                      >￥{{ item.special_price }}&nbsp;&nbsp;</span
                    >
                    <span class="discount">{{ item.price }}</span>
                    <span class="real"
                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{
                        Math.round((item.special_price * 100) / item.price)
                      }}%</span
                    >
                  </p>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>

      <!-- <div class="show" v-if="this.showShow == true">
      <ul>
        <li v-for="x in 120" :key="x">
          <img
            src="http://image.wconcept.co.kr/images/upload/wdna/RP210413104342_KE8M.jpeg"
            alt=""
          />
          <div>@Drawpaint100</div>
        </li>
      </ul>
    </div> -->
    </div>
  </div>
</template>

<script>
import { search } from '../../api/getlist.js';
import { getSecond } from '../../api/getlist.js';

export default {
  data() {
    return {
      word: sessionStorage.getItem('word'),
      list: [],
      // listdetail:[a,b,c],
      activeName: 'first',
    };
  },
  name: 'search',
  methods: {
    getTypeTwoList() {
      search(this.word).then((res) => {
        this.list = res.data;
        // console.log(res);
      });
    },
    getSecond() {
      getSecond().then((res) => {});
    },
    handleClick(tab, event) {
      console.log(tab, event);
      console.log(tab.index);
      if (tab.index == 0) {
        this.getTypeTwoList();
        //   this.$router.go(0);
      } else if (tab.index == 1) {
        this.$router.go(0);
      } else if (tab.index == 2) {
        this.$router.go(0);
      }
    },
  },
  created() {
    this.getTypeTwoList();
  },
};
</script>

<style>
/* .search {
    margin-top: 7.4vh;
    background-color: #fafafa;
    border-top: 1px solid #e1e1e1;
    width: 64.5vw;
    height: 17.6vh;
    font-weight: border;
    font-size: 3.6vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    width: 90%;

} */

.first {
  text-align: center;
  margin-top: 80px;
  font-size: 20px;
  border-top: 1px solid #e1e1e1;
  background-color: #fafafa;
  padding-bottom: 13px;
}

.form {
  margin-top: 60px;
  margin-left: 40%;
}

.time {
  font-size: 13px;
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

.yincang {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
  text-align: center;
}

.xuanran {
  left: 50%;
  width: 1200px;
  margin: auto;
}

.discount {
  font-size: 1.2vh;
  margin-left: 1vw;
  text-decoration: line-through;
}

.real {
  color: red;
  margin-right: 10vw;
  font-size: 18px;
  line-height: 1.5;
  font-family: 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei',
    'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
}
</style>
