<template>
  <div class="my">
    <div class="my-title">
      <h2>个人中心</h2>
      <p>
        <span style="cursor: pointer" @click="goHome">主页</span>
        <span> > </span>
        <span>个人中心</span>
      </p>

      <el-button
        type="text"
        @click="dialogFormVisible = true"
        style="color: #000"
        >修改密码</el-button
      >
      <el-dialog title="修改密码" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="用户名" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="新密码" :label-width="formLabelWidth">
            <el-input v-model="form.psd" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="confirm">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <div class="my-detail">
      <div class="detail-top">
        <ul>
          <li>我的♡</li>
          <li>订单管理</li>
          <li>我的活动</li>
          <li>购物优惠</li>
          <li>信息管理</li>
          <li>查询内容</li>
        </ul>
      </div>
      <div class="detail-bottom" :class="{ styleNone: styles }">
        <div class="detail-top-item">
          <ul>
            <li>我的♡物品</li>
            <li>我的♡品牌</li>
            <li>我的♡风格</li>
          </ul>
        </div>
        <div class="detail-top-item">
          <ul>
            <li>订购/配送查询</li>
            <li>取消/交换/退货查询</li>
            <li>收到的礼品盒</li>
            <li>签发凭证</li>
          </ul>
        </div>
        <div class="detail-top-item">
          <ul>
            <li>进货通知</li>
            <li>活动参与明细</li>
            <li>WDNA参与明细</li>
          </ul>
        </div>
        <div class="detail-top-item">
          <ul>
            <li>会员等级</li>
            <li>优惠券</li>
            <li>W POINT</li>
            <li>预收款</li>
            <li>购物券</li>
          </ul>
        </div>
        <div class="detail-top-item">
          <ul>
            <li>修改会员信息</li>
            <li>管理地址簿</li>
            <li>W.工资管理</li>
            <li>退款账户管理</li>
            <li>会员退出</li>
          </ul>
        </div>
        <div class="detail-top-item">
          <ul style="border: none">
            <li>商品Q&A</li>
            <li>商品评价</li>
            <li>1:1查询</li>
          </ul>
        </div>
      </div>
      <div class="detail-button" @click="styles = !styles">▲</div>
    </div>
    <div class="my-img">
      <img src="../../assets/images/personcenter.jpg" alt="" />
    </div>
    <div class="my-order">
      <order-user-list></order-user-list>
    </div>
    <div class="my-address">
      <div class="address-first-line">
        <h3>我的地址</h3>
        <div class="address-first-line-right">
          <span @click="addAddress"> + </span>
          <h3>新增地址</h3>
        </div>
      </div>
      <div class="address-first-line-content">
        <template>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="name" label="收货人姓名" width="280">
            </el-table-column>
            <el-table-column prop="address" label="收货人地址" width="580">
            </el-table-column>
            <el-table-column prop="tel" label="收货人电话" width="180">
            </el-table-column>
            <el-table-column label="操作" width="200">
              <template slot-scope="scope">
                <el-button type="text" @click="deleteAddress(scope.row.id)"
                  >删除</el-button
                >
                <el-button type="text" @click="updateAddress(scope.row.id)">操作</el-button>
              </template>
            </el-table-column>
            <el-table-column slot="empty">
              <svg
                width="130"
                height="130"
                viewBox="0 0 184 152"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <g transform="translate(24 31.67)">
                    <ellipse
                      fillOpacity=".8"
                      fill="#F5F5F7"
                      cx="67.797"
                      cy="106.89"
                      rx="67.797"
                      ry="12.668"
                    ></ellipse>
                    <path
                      d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
                      fill="#AEB8C2"
                    ></path>
                    <path
                      d="M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z"
                      fill="url(#linearGradient-1)"
                      transform="translate(13.56)"
                    ></path>
                    <path
                      d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
                      fill="#F5F5F7"
                    ></path>
                    <path
                      d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
                      fill="#DCE0E6"
                    ></path>
                  </g>
                  <path
                    d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
                    fill="#DCE0E6"
                  ></path>
                  <g transform="translate(149.65 15.383)" fill="#FFF">
                    <ellipse
                      cx="20.654"
                      cy="3.167"
                      rx="2.849"
                      ry="2.815"
                    ></ellipse>
                    <path
                      d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
                    ></path>
                  </g>
                </g>
              </svg>
              <p>No Data</p>
            </el-table-column>
          </el-table>
        </template>
      </div>
    </div>
    <add-Addresses
      :flag="isshow"
      :id="id"
      @changeflag="changeflag"
      class="add-Addresses"
    ></add-Addresses>
  </div>
</template>

<script>
import {changePassword,} from "@/api/changePassword.js";
import AddAddresses from "@/views/my/addAddresses/index.vue";
import { getUserOrder } from "@/api/getUserOrder.js";
import { getAddress,deleteAddress,updateAddress } from "@/api/addAddress.js";
export default {
  name: "ElMy",
  components: {
    AddAddresses,
  },
  data() {
    return {
      styles: false,
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        psd: "",
      },
      formLabelWidth: "120px",
      tableData: [],
      isshow: false, //新增收货地址表单是否出现 false不出现
      orderList: [],
      id:undefined,
    };
  },
  methods: {
    goHome() {
      this.$router.push("/home");
    },
    confirm() {
      this.dialogFormVisible = false;
      // this.form.name;用户名
      // this.form.psd密码
      let username = this.form.name;
      let password = this.form.psd;
      changePassword(username, password)
        .then((res) => {
          if (code === 200) {
            this.$message({
              message: res.message,
              type: "success",
            });
          } else {
            this.$message({
              message: res.message,
              type: "error",
            });
          }
        })
        .catch((error) => {
          this.$message({
            message: error,
            type: "error",
          });
        });
    },
    addAddress() {
      this.isshow = true;
    },
    async getOrder() {
      const res = await getUserOrder({
        customer_id: sessionStorage.userId,
      });
      if (res.code == 200) {
        let result = res.data.map((item) => {
          item.order_create_time = formDate(item.order_create_time);
          item.update_time = formDate(item.update_time);
          return item;
        });
        this.orderList = result;
      }
    },
    changeflag(value) {
      this.isshow = value;
      this.getAddress();
    },
    getAddress() {
      let customer_id = this.$store.getters.id;
      console.log(customer_id);
      getAddress({ customer_id }).then((res) => {
        console.log(res, "12345");
        this.tableData = [...res.data];
      });
    },
    deleteAddress(id) {
      console.log(id, "id");
      let data = {
        id,
      };
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          deleteAddress(data).then((res) => {
            console.log(res);
            this.$message({
              type: "success",
              message: "删除成功!",
            });
            this.getAddress()
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    updateAddress(id){
      this.id = id;
      this.isshow = true;
    }
  },
  created() {
    // 页面加载渲染收货地址
    this.getAddress();
  },
  mounted() {
    this.getOrder();
  },
};
</script>

<style lang="scss">
.add-Addresses {
  position: fixed;
  top: 15%;
  left: 25%;
  z-index: 10;
}
.my {
  width: 100%;
  .my-title {
    width: 1240px;
    height: 199px;
    margin: 0 auto;
    h2 {
      width: 1240px;
      height: 66px;
      font-size: 44px;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.85);
      padding: 81px 0 0;
    }
    p {
      width: 1240px;
      height: 21px;
      span {
        color: #676767;

        font-size: 80%;
        margin: 5px;
      }
    }
    .fixPassword {
      width: 1240px;
      height: 2px;
      padding: 5px 0 44px;
      // box-sizing: border-box;
      font-weight: bold;
      cursor: pointer;
      font-size: 12px;
    }
  }
  .my-detail {
    margin: 0 auto;
    margin-top: 44px;
    position: relative;
    .detail-top {
      ul {
        color: rgba(0, 0, 0, 0.65);
        font-size: 14px;
        line-height: 1.5;
        box-sizing: border-box;
        padding: 0;
        display: flex;
        margin: 0 auto;
        width: 1240px;
        margin: 0 auto;
        background-color: rgb(243, 243, 243);
        height: 41px;
        li {
          font-size: 14px;
          font-variant: tabular-nums;
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          list-style: none;
          width: 100%;
          line-height: 25px;
          text-align: center;
          color: #4c4c4c;
          line-height: 41px;
          border-top: 1px solid rgb(230, 230, 230);
        }
      }
    }
    .detail-bottom {
      width: 1240px;
      height: 146px;
      padding: 9px 0;
      box-sizing: border-box;
      display: flex;
      justify-self: left;
      margin: 0 auto;
      border-bottom: 1px solid rgb(218, 218, 218);
      ul {
        width: 206px;
        height: 130px;
        border-right: 1px solid rgb(218, 218, 218);
        li {
          width: 206px;
          height: 24px;
          // color: #2c3e50;
          margin: 0;
          padding: 0;
          list-style-type: none;
          color: #4c4c4c;
          font-size: 13px;
        }
      }
    }
    .styleNone {
      display: none;
    }
    .detail-button {
      box-sizing: border-box;
      overflow: visible;
      text-transform: none;
      margin: 0;
      padding: 0;
      position: absolute;
      bottom: -15px;
      right: 131px;
      width: 30px;
      height: 16px;
      text-align: center;
      line-height: 16px;
      background-color: #fff;
      outline: none;
      border: 1px solid #e6e6e6;
      border-top-width: 0;
      font-size: 12px;
      color: #000;
      cursor: pointer;
    }
  }
  .my-img {
    width: 1240px;
    height: 100px;
    margin: 60px auto;
  }
  .my-order {
    width: 1240px;
    margin: 0 auto;
  }
  .my-address {
    width: 1240px;
    margin: 0 auto;
    .address-first-line {
      height: 36px;
      width: 1240px;
      display: flex;
      justify-content: space-between;
      font-size: 24px;
      font-weight: 500;
      border-bottom: 2px solid rgb(92, 92, 92);
      line-height: 36px;
      h3 {
        font-weight: 500;
        font-size: 24px;
      }
      .address-first-line-right {
        display: flex;
        justify-content: space-between;
        width: 150px;
        span {
          background-color: #000;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          color: #fff;
          line-height: 34px;
        }
      }
    }
    .address-first-line-content {
    }
  }
}
.el-table__empty-text {
  line-height: 23px;
  width: 50%;
  color: #909399;
}
</style>