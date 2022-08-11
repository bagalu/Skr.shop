<template>
  <div class="FooterNav">
    <el-container>
      <el-footer>
        <!-- 底 -->
        <div id="di" class="footer" data-v-d233b470="">
          <div class="footerNav" data-v-d233b470="">
            <div
              class="ant-row-flex ant-row-flex-space-around ant-row-flex-middle"
              data-v-d233b470=""
            >
              <div class="ant-col ant-col-2.4" data-v-d233b470="">
                <p
                  data-v-d233b470=""
                  type="flex"
                  justify="space-around"
                  class="height-100 footer_bar"
                  align="center"
                >
                  <a data-v-d233b470="" href="javascript:;" @click="about"
                    >关于我们</a
                  >
                </p>
              </div>
              <div class="ant-col ant-col-2.4" data-v-d233b470="">
                <p
                  data-v-d233b470=""
                  type="flex"
                  justify="space-around"
                  class="height-100 footer_bar"
                  align="center"
                >
                  <a data-v-d233b470="" href="javascript:;" @click="inquiry"
                    >咨询服务</a
                  >
                </p>
              </div>
              <div class="ant-col ant-col-2.4" data-v-d233b470="">
                <p
                  data-v-d233b470=""
                  type="flex"
                  justify="space-around"
                  class="height-100 footer_bar"
                  align="center"
                >
                  <a data-v-d233b470="" href="javascript:;" @click="partner"
                    >合租伙伴查询</a
                  >
                </p>
              </div>
              <div class="ant-col ant-col-2.4" data-v-d233b470="">
                <p
                  data-v-d233b470=""
                  type="flex"
                  justify="space-around"
                  class="height-100 footer_bar"
                  align="center"
                >
                  <a data-v-d233b470="" href="javascript:;" @click="terms"
                    >服务条款</a
                  >
                </p>
              </div>
              <div class="ant-col ant-col-2.4" data-v-d233b470="">
                <p
                  data-v-d233b470=""
                  type="flex"
                  justify="space-around"
                  class="height-100 footer_bar"
                  align="center"
                >
                  <a data-v-d233b470="" href="javascript:;" @click="privacy"
                    >隐私政策</a
                  >
                </p>
              </div>
              <div class="ant-col ant-col-2.4" data-v-d233b470="">
                <p
                  data-v-d233b470=""
                  type="flex"
                  justify="space-around"
                  class="height-100 footer_bar"
                  align="center"
                >
                  <a data-v-d233b470="" href="javascript:;" @click="service"
                    >服务中心</a
                  >
                </p>
              </div>
              <div class="ant-col ant-col-2.4" data-v-d233b470="">
                <p
                  data-v-d233b470=""
                  type="flex"
                  justify="space-around"
                  class="height-100 footer_bar"
                  align="center"
                >
                  <a data-v-d233b470="" href="javascript:;" @click="offters">招聘信息</a>
                </p>
              </div>
              <div class="ant-col ant-col-2.4" data-v-d233b470="">
                <p
                  data-v-d233b470=""
                  type="flex"
                  justify="space-around"
                  class="height-100 footer_bar"
                  align="center"
                >
                  <a data-v-d233b470="" href="javascript:;">全球的</a>
                </p>
              </div>
            </div>
          </div>
          <div class="footerMsg" data-v-d233b470="">
            <div class="ant-row" data-v-d233b470="">
              <div class="footMsg_left ant-col ant-col-12" data-v-d233b470="">
                <p data-v-d233b470="">网站名称</p>
                <p data-v-d233b470="">
                  © 2009-2021 Stride.fun 版权所有 ICP主体备案号：
                  苏ICP备2021007111号
                </p>
                <a data-v-d233b470="" href="javascript:;"
                  ><span data-v-d233b470="">网站备案信息</span></a
                >
                <p data-v-d233b470="">
                  <a
                    data-v-d233b470=""
                    target="_blank"
                    href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32011402010859"
                    style="
                      display: inline-block;
                      text-decoration: none;
                      height: 20px;
                      line-height: 20px;
                    "
                  >
                    <!-- <img
                      data-v-d233b470=""
                      src="/static/img/beian.d0289dc0.png"
                      style="float: left"
                    /> -->
                    <i
                      class="el-icon-s-check"
                      style="float: left; font-size: 20px"
                    ></i>
                    <p
                      data-v-d233b470=""
                      style="
                        float: left;
                        height: 20px;
                        line-height: 20px;
                        margin: 0px 0px 0px 5px;
                        color: rgb(147, 147, 147);
                      "
                    >
                      苏公网安备 32011402010859号
                    </p></a
                  >
                </p>
              </div>
              <div class="footMsg_right ant-col ant-col-12" data-v-d233b470="">
                <p data-v-d233b470="">消费者损害赔偿保险</p>
                <p data-v-d233b470="">
                  客户在以现金支付安全交易时可以使用Wconcept订阅的<span
                    data-v-d233b470=""
                  >
                    消费者损害赔偿保险服务。
                  </span>
                </p>
                <p data-v-d233b470="">赔偿对象：不送/退货，拒绝退款/商场破产</p>
                <a data-v-d233b470="" href="javascript:;"
                  ><span data-v-d233b470="">检查服务订阅事实</span></a
                >
              </div>
            </div>
          </div>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "FooterNav",
  methods: {
    about() {
      this.$router.push("/about");
    },
    inquiry() {
      this.$router.push("/inquiry");
    },
    partner() {
      this.$router.push("/partner");
    },
    terms() {
      this.$router.push("/terms");
    },
    privacy() {
      this.$router.push("/privacy");
    },
    service() {
      this.$router.push("/service");
    },
    offters(){
      this.$router.push("/offters")
    }
  },
};
</script>

<style lang="scss" scoped>
// 底
.footer[data-v-d233b470] {
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding-top: 90px;
  padding-bottom: 20px;
  .footerNav[data-v-d233b470] {
    width: 100%;
    height: 60px;
    background-color: #848484;
  }
  [data-v-d233b470] .ant-row-flex-middle {
    min-width: 650px;
    height: 60px;
    font-size: 14px;
    color: #fff;
  }
  [data-v-d233b470],
  [data-v-d233b470]::after,
  [data-v-d233b470]::before {
    margin: 0;
    padding: 0;
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
  .footer_bar[data-v-d233b470] {
    min-width: 110px;
    height: 60px;
    line-height: 60px;
    display: inline-block;
  }
  .footer_bar[data-v-d233b470]:hover {
    background-color: #636262;
    cursor: pointer;
  }
  [data-v-d233b470] .ant-row-flex-middle a {
    color: #fff;
  }
  a[data-v-d233b470] {
    text-decoration: none;
  }
  .footerMsg[data-v-d233b470] {
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
    padding-top: 40px;
    margin-bottom: 20px;
  }
  [data-v-d233b470] .ant-row {
    width: 80%;
    margin: 0 auto;
  }
  .ant-row {
    position: relative;
    height: auto;
    display: block;
    box-sizing: border-box;
  }
  .footMsg_left[data-v-d233b470] {
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
  a[data-v-d233b470] {
    color: #666;
    text-decoration: none;
  }
  .footMsg_right[data-v-d233b470] {
    padding-left: 30px;
  }
}
</style>