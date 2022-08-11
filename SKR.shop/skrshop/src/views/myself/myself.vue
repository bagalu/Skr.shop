<template>
  <div class="mypage">
    <!-- <div class="box">
        <div class="title">
            <h1>刘滨帅！！！！！！！！</h1>
        </div>
        <button id="btn">修改密码</button>
        <div class="item">
            <div class="close">
                X
            </div>
           <h1>刘滨真帅</h1>
           <div class="name">
               用户名 <input type="text" placeholder="请输入用户名"><br>
               新密码 <input type="text" placeholder="请输入密码">
           </div>
           <button class="sure">确认</button>
        </div>
    </div> -->

    <div class="subTitleWrap" style="
        font-family: Helvetica, Hiragino Sans GB, Microsoft Yahei, 微软雅黑,
          Arial, sans-serif;
      ">
      <h2 style="font-size: 44px">个人中心</h2>
      <p class="titleContent" style="margin-top: 5px">
        <span>
          <small>主页</small>
          <em style="margin: 0 10px">></em>
        </span>
        <span>个人中心</span>
      </p>
      <div class="changepassword" style="margin-bottom: 44px; text-align: center">
        <div>
          <div class="mask" v-if="showModal" @click="showModal = false"></div>
          <div class="pop" v-if="showModal">
            <!-- <button @click="showModal=false" class="btn">点击出现弹框</button> -->
            <!-- <span class="cancel">X</span> -->
            <img
              src="https://ts1.cn.mm.bing.net/th/id/R-C.144dde21181c05ac024e84721b716522?rik=5yYRCgiMvzz%2bBg&riu=http%3a%2f%2fpic.ntimg.cn%2ffile%2f20191109%2f27824344_171845670034_2.jpg&ehk=gSAmYpmYkCjQwJsyNulwdzUdr1HfQ58k99zTfq453fc%3d&risl=&pid=ImgRaw&r=0"
              alt="" @click="showModal = false" />
            <div class="clear"></div>

            <div class="title">
              <h2 style="vertical-align: inherit; margin-bottom: 30px">
                修改密码
              </h2>
            </div>
            <p style="height: 40px; position: relative; margin: 0 0 40px 0">
              <label for="userMod" style="
                  position: relative;
                  text-align: center;
                  display: inline-block;
                  width: 105px;
                  height: 100%;
                  line-height: 40px;
                  color: #333;
                ">用户名</label>
              <input type="text" id="userMod" placeholder="请输入用户名" style="
                  width: 250px;
                  height: 40px;
                  line-height: 38px;
                  padding-left: 20px;
                  background-color: #f2f2f2;
                  border: 1px solid #f2f2f2;
                  font-size: 14px;
                  font-family: ProximaNova-Regular, yg740;
                  outline: none;
                " />
            </p>

            <p style="height: 40px; position: relative; margin: 0 0 40px 0">
              <label for="userMod" style="
                  position: relative;
                  text-align: center;
                  display: inline-block;
                  width: 105px;
                  height: 100%;
                  line-height: 40px;
                  color: #333;
                ">新密码</label>
              <input type="text" id="userMod" placeholder="请输入新密码" style="
                  width: 250px;
                  height: 40px;
                  line-height: 38px;
                  padding-left: 20px;
                  background-color: #f2f2f2;
                  border: 1px solid #f2f2f2;
                  font-size: 14px;
                  font-family: ProximaNova-Regular, yg740;
                  outline: none;
                " />
            </p>
            <button style="
                display: block;
                margin: 60px auto 0;
                width: 200px;
                height: 40px;
                background-color: #fff;
                color: #000;
                border: 1px solid #000;
                outline: none;
                cursor: pointer;
              ">
              确认
            </button>
          </div>

          <button @click="showModal = true" class="btn">修改尼玛</button>
        </div>
      </div>
    </div>

    <div class="myPageSnb" style="margin-bottom: 60px; width: 100%">
      <div class="myPageSnbTop">
        <ul style="display: flex; margin: 0 auto; width: 1240px">
          <li>我的</li>
          <li>订单管理</li>
          <li>我的活动</li>
          <li>购物优惠</li>
          <li>信息管理</li>
          <li>查询内容</li>
        </ul>
      </div>
    </div>
    <div class="myPageSnbBot" style="width: 100%">
      <div class="innerContent" style="border-bottom: 1px solid #e6e6e6">
        <div class="inner" style="display: flex; padding: 9px 0; margin: 0 auto; width: 1240px">
          <ul style="position: relative; width: 206px; height: 128px">
            <li>我的♡物品</li>
            <li>我的♡品牌</li>
            <li>我的♡风格</li>
          </ul>
          <ul>
            <li>订购/配送查询</li>
            <li>取消/交换/退货查询</li>
            <li>收到的礼品盒</li>
            <li><span>签发凭证</span></li>
          </ul>
          <ul>
            <li>进货通知</li>
            <li>活动参与明细</li>
            <li>WDNA参与明细</li>
          </ul>
          <ul>
            <li>会员等级</li>
            <li>优惠券</li>
            <li>W POINT</li>
          </ul>
          <ul>
            <li>修改会员信息</li>
            <li>管理地址簿</li>
            <li>W.工资管理</li>
          </ul>
          <ul>
            <li>商品Q&A</li>
            <li>商品评价</li>
            <li>1:1查询</li>
          </ul>
        </div>
      </div>
      <div class="showHide" style="position: relative; margin: 0 auto; width: 1240px">
        <button></button>
      </div>
    </div>
    <div class="myPageMain" style="
        margin: 0 auto;
        margin-bottom: 0px;
        width: 1240px;
        margin-bottom: 180px;
      ">
      <div class="activityImg" style="margin-bottom: 60px; cursor: pointer">
        <img src="https://image.wconcept.co.kr/images/builder/1/4/138/315/PC_mypage_1240x100_1_20210226162046.jpg"
          alt="" />
      </div>
      <div class="tableTitle" style="position: relative; width: 100%; height: 36px">
        <h3 style="
            display: inline-block;
            position: absolute;
            top: -17px;
            left: 0;
            font-size: 24px;
            color: #000;
            font-family: ProximaNova-Light, yg740;
            line-height: 1em;
          ">
          最近订单
        </h3>
        <span style="
            position: absolute;
            bottom: 8px;
            right: 0;
            line-height: 1em;
            padding-right: 9px;
            font-size: 16px;
            color: #000;
            font-weight: 300;
          ">more+</span>
      </div>
      <table class="cols">
        <colgroup>
          <col style="width: 20%" />
          <col style="width: 20%" />
          <col style="width: 20%" />
          <col style="width: 20%" />
          <col style="width: 20%" />
          <col style="width: 20%" />
        </colgroup>
        <thead style="border-collapse: collapse">
          <tr>
            <th>订单日期</th>
            <th>订单号</th>
            <th>商品信息</th>
            <th>数量</th>
            <th>商品价格</th>
            <th>进度</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="height: 150px; color: #333; font-size: 14px"></td>
          </tr>
        </tbody>
      </table>
      <div class="address" style="position: relative; width: 100%; height: 36px">
        <h3 style="
            display: inline-block;
            position: absolute;
            top: -17px;
            left: 0;
            font-size: 24px;
            color: #000;
            font-family: ProximaNova-Light, yg740;
            line-height: 1em;
          ">
          我的地址
        </h3>
        <div class="address" style="
            position: absolute;
            top: 0;
            right: 0;
            display: flex;
            align-items: center;
          ">
          <button style="
              width: 30px;
              height: 30px;
              border-radius: 19px;
              color: #fff;
              background-color: #000;
              border: none;
              outline: none;
              font-size: 18px;
              cursor: pointer;
            " >
            +
          </button>
          <small style="font-size: 24px">新增地址</small>
        </div>
      </div>
      <table class="cols">
        <colgroup>
          <col style="width: 135px" />
          <col />
          <col style="width: 130px" />
          <col style="width: 130px" />
        </colgroup>
        <thead style="border-collapse: collapse">
          <tr>
            <th>收货人姓名</th>
            <th>收货人地址</th>
            <th>收货人电话</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="height: 150px; color: #333; font-size: 14px"></td>
          </tr>
        </tbody>
      </table>
    </div>
   
  </div>
</template>

<script>
// var btn = document.querySelector('#btn')
//     var item = document.querySelector('.item')
//     var box = document.querySelector('.box')
//     var close = document.querySelector('.close')
//     var title = document.querySelector('.title')
//     btn.onclick = function(){
//         btn.style.display = 'none'
//         item.style.display = 'block'
//         box.style.backgroundColor ='rgba(0,0,0,0.2) '
//     }
//     close.onclick = function() {
//         console.log('aaa');
//         item.style.display = 'none'
//         box.style.backgroundColor =''
//         title.style.display = 'block'
//     }
export default {
  data() {
    return {
      showModal: false,
    };
  },
  name: "mypage",
  methods: {
    open() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true,
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    close() { },
  },
};
</script>

<style>
.subTitleWrap {
  position: relative;
  padding-top: 81px;
  width: 100%;
  text-align: center;
}

.myPageSnbTop>ul>li {
  position: relative;
  width: 206px;
  text-align: center;
  line-height: 41px;
  color: #333;
  list-style: none;
}

.myPageSnbTop {
  width: 100%;
  min-width: 1240px;
  border-top: 1px solid #e6e6e6;
  background-color: #f3f3f3;
}

.inner>ul>li {
  width: 100%;
  line-height: 25px;
  text-align: center;
  color: #4c4c4c;
  list-style: none;
}

.inner>ul {
  position: relative;
  width: 206px;
  height: 128px;
}

.cols {
  width: 100%;
  border-collapse: collapse;
  border-top: 2px solid #171717;
  border-bottom: 1px solid #171717;
  table-layout: fixed;
  margin-bottom: 60px;
}

th {
  height: 68px;
  font-family: yg750;
  font-size: 14px;
  padding: 0 14px;
  color: #000;
  vertical-align: middle;
  border-bottom: 1px solid #b5b5b5;
}

.change {
  width: 350px;
  height: 400px;
  border: 1px solid black;
  position: absolute;
}



.box {
  width: 100vw;
  height: 100vh;
  /* background-color:rgba(0,0,0,0.2) ; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.box .title {
  display: none;
}

.item {
  width: 500px;
  height: 600px;
  display: flex;
  border: 1px solid black;
  background-color: #ffffff;
  display: none;
  position: relative;
}

.item h1 {
  text-align: center;
  margin: 30px auto;
  font-size: 60px;
}

.name {
  width: 80%;
  margin: 10px auto;
}

.name>input {
  outline: none;
  /* border: none; */
  width: 60%;
  height: 30px;
  padding: 10px 30px;
  margin-left: 30px;
  margin-top: 25px;
}

.sure {
  width: 50%;
  height: 50px;
  margin: 50px auto;
  margin-left: 25%;
  color: black;
  font-size: 20px;
  font-weight: 700;
}

.close {
  width: 30px;
  height: 30px;
  line-height: 30px;
  border-radius: 50%;
  border: 1px solid black;
  text-align: center;
  position: absolute;
  right: 5px;
  top: 5px;
}

.close:hover {
  cursor: pointer;
}

.mask {
  background-color: #000;
  opacity: 0.3;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.pop {
  background-color: #fff;

  position: fixed;
  top: 50px;
  left: 400px;
  width: 415px;
  height: 345px;
  z-index: 2;
 
}

.btn {
  background-color: #fff;
  border-radius: 4px;
  outline: none;
  border: none;
  padding: 4px 12px;
  cursor: pointer;
}

.cancel {
  float: right;
}

.pop>img {
  width: 15px;
  height: 15px;
  background-color: #fff;
  float: right;
}

.clear {
  clear: both;
}

.title {
  font-family: ProximaNova-Thin, yg740;
  font-size: 20px;
  color: #000;
  text-align: center;
  line-height: 100%;
  text-transform: uppercase;
}
</style>