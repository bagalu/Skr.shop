<template>
  <div class="detailsbox">
    <div class="top">
      <el-steps :active="state" align-center>
        <el-step title="提交订单" :description="time"></el-step>
        <el-step title="支付订单"></el-step>
        <el-step title="平台发货"></el-step>
        <el-step title="确认收货"></el-step>
      </el-steps>
    </div>
    <div class="main">
      <div class="main_box">
        <div class="operate">
          <div class="text">
            <span>当前订单状态</span>
          </div>
        </div>
        <div style="margin-top:20px">
          <span class="font-small">基本信息</span>
        </div>
        <div class="table-layout">
          <div class="el-row">
            <div class="table-cell-title  el-col-8">订单编号</div>
            <div class="table-cell-title  el-col-8">订单流水号</div>
            <div class="table-cell-title  el-col-8">支付方式</div>
          </div>
          <div class="el-row">
            <div class="table-cell el-col-8">{{ orederdata.id }}</div>
            <div class="table-cell el-col-8">{{ orederdata.code }}</div>
            <div class="table-cell el-col-8">{{ payment_type[orederdata.payment_type + 1] }}</div>
          </div>
          <div class="el-row">
            <div class="table-cell-title  el-col-8">配送方式</div>
            <div class="table-cell-title  el-col-8">物流单号</div>
            <div class="table-cell-title  el-col-8">自动确认收货时间</div>
          </div>
          <div class="el-row">
            <div class="table-cell el-col-8">暂无</div>
            <div class="table-cell el-col-8">暂无</div>
            <div class="table-cell el-col-8">暂无</div>
          </div>
        </div>
        <div style="margin-top:20px">
          <span class="font-small">收货人信息</span>
        </div>
        <div class="table-layout">
          <div class="el-row">
            <div class="table-cell-title  el-col-8">收货人</div>
            <div class="table-cell-title  el-col-8">手机号</div>
            <div class="table-cell-title  el-col-8">收货地址</div>
          </div>
          <div class="el-row">
            <div class="table-cell el-col-8">{{ orederdata.name }}</div>
            <div class="table-cell el-col-8">{{ orederdata.tel }}</div>
            <div class="table-cell el-col-8">{{ orederdata.address }}</div>
          </div>

        </div>
        <div style="margin-top:20px">
          <span class="font-small">收货人信息</span>
        </div>
        <div class="table-layout">
          <div class="el-row">
            <div class="table-cell-title  el-col-3">商品编号</div>
            <div class="table-cell-title  el-col-4">商品图片</div>
            <div class="table-cell-title  el-col-4">商品名称</div>
            <div class="table-cell-title  el-col-3">商品单价</div>
            <div class="table-cell-title  el-col-3">商品参数</div>
            <div class="table-cell-title  el-col-3">数量</div>
            <div class="table-cell-title  el-col-4">总价</div>
          </div>
          <div class="el-row">
            <div class="table-cell el-col-3">{{ orederdata.skus[0].id }}</div>
            <div class="table-cell el-col-4">
              <img src="" alt="">
            </div>
            <div class="table-cell el-col-4">鞋子</div>
            <div class="table-cell el-col-3">{{ orederdata.skus[0].price }}</div>
            <div class="table-cell el-col-3">5545</div>
            <div class="table-cell el-col-3">{{ orederdata.skus[0].num }}</div>
            <div class="table-cell el-col-4">{{ orederdata.skus[0].price * orederdata.skus[0].num }}</div>
          </div>
          <div style="float: right; margin: 20px;">
            合计 :
            <span class="color-danger">{{ orederdata.skus[0].actual_price * orederdata.skus[0].num }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getOrderDetail } from '@/api/order'
export default {
  name: 'orderdetail',
  data() {
    return {
      orederdata: [],//订单详情
      time: '',//订单生成时间
      state: 1,//订单状态
      payment_type: ['支付宝', '微信'],
      imgs: '',//处理图片
    }
  },
  created() {
    getOrderDetail({
      order_id: 87,
      status: 0,
    }).then(data => {
      if (data.code == 200) {
        this.orederdata = data.data
      
        this.time=this.getYMDHMS(this.orederdata.create_time);

      }
    })
  },
  methods: {
    getYMDHMS(timestamp) {
      var date = new Date(timestamp*1);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + '-';
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      var D = date.getDate() + ' ';
      var h = date.getHours() + ':';
      var m = date.getMinutes() < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':';
      var s = date.getSeconds();
      return Y + M + D + h + m + s;
    }
  }
}
</script>

<style lang="scss" scoped>
.detailsbox {
  margin: 0 150px;

  .top {
    margin: 50px 0;
  }

  .main {
    border: 1px solid #ebeef5;
    background-color: #fff;
    color: #303133;
    transition: .3s;
    border-radius: 4px;
    overflow: hidden;

    .main_box {
      padding: 20px;

      .detailsbox {
        display: flex;
        background-color: #f2f6fc;
        height: 80px;
        justify-content: space-between;
        margin: -20px -20px 0 -20px;

        .text {
          color: red;

        }
      }
    }
  }
}

.font-small {
  font-size: 14px;
  color: #606266;
}

.table-layout {
  border-left: 1px solid #dcdfe6;
  border-top: 1px solid #dcdfe6;
}

.el-row {
  display: flex;

}

.table-cell-title {
  border-right: 1px solid #dcdfe6;
  border-bottom: 1px solid #dcdfe6;
  padding: 10px;
  background: #f2f6fc;
  text-align: center;
  font-size: 14px;
  color: #303133;
}

.el-col-3 {
  width: 12.5%;
}

[class*=el-col-] {
  float: left;
}

.el-col-4 {
  width: 16.66667%;
}

.el-col-8 {
  width: 33.33333%;
}

.table-cell {
  height: 60px;
  line-height: 40px;
  border-right: 1px solid #dcdfe6;
  border-bottom: 1px solid #dcdfe6;
  padding: 10px;
  font-size: 14px;
  color: #606266;
  text-align: center;
  overflow: hidden;
}

.color-danger {
  color: #f56c6c;
}
</style>>
