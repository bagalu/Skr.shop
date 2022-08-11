<template>
  <div class="advisory" style="">
    <div class="adv">
      <h2>咨询服务</h2>
    </div>
    <div class="fromStep">
      <ul>
        <li class="step_li">
          <span class="step">步骤01</span>
          <i>
            <i class="el-icon-document-copy anticon anticon-snippets"></i>
          </i>
          <strong>
            <span>填写合作伙伴/进入申请</span>
          </strong>
          <p>请申请隶属关系/进入</p>
        </li>
        <li class="step_li">
          <span class="step">步骤02</span>
          <i>
            <i class="el-icon-document-copy anticon anticon-snippets"></i>
          </i>
          <strong>
            <span>查看并与负责人联系</span>
          </strong>
          <p>
            在每个领域的负责人审核之后，如果商店合适，我们将通过电话或电子邮件与您联系
          </p>
        </li>
        <li class="step_li">
          <span class="step">步骤03</span>
          <i>
            <i class="el-icon-document-copy anticon anticon-snippets"></i>
          </i>
          <strong>
            <span>条件咨询及合同签订</span>
          </strong>
          <p>在讨论合伙的细节和条件后，订立合同</p>
        </li>
      </ul>
    </div>
    <div class="note">
      <h3>※申请店铺咨询时的注意事项</h3>
      <p>
        1.如果您申请商店咨询，我们将在内部审查后通知您进入商店的可能性和合同程序。
      </p>
      <p>
        2.办理入住手续可能需要一段时间，因此请避免注册重复，并避免与MD联络以及通过客户中心查询可用性。
      </p>
      <p>
        3.
        W.Concept基于真正的处理方式，只有设计和生产自己的品牌公司才可以进入商店。（不允许进入商店买卖品牌或处理假货）
      </p>
      <p>
        4.必须指定负责人以促进产品管理（MD）和订单管理（交货/
        CS处理），如果不能这样做，则可能会拒绝接纳。
      </p>
    </div>
    <!-- 表格 -->
    <div>
      <div class="fromMain">
        <form action="" class="from_ ant-form ant-form-horizontal">
          <div class="ant-row ant-form-item" style="height: 65px">
            <div
              class="
                ant-col ant-col-6 ant-form-item-label ant-form-item-label-left
              "
            >
              <label for="" class="" title="查询分类">查询分类:</label>
            </div>
            <div class="ant-col ant-col-18 ant-form-item-control-wrapper">
              <div class="ant-form-item-control">
                <span class="ant-form-item-children">
                  <el-select v-model="value1" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </span>
              </div>
            </div>
          </div>
          <div class="ant-row ant-form-item" style="height: 65px">
            <div
              class="
                ant-col ant-col-6 ant-form-item-label ant-form-item-label-left
              "
            >
              <label for="" class="" title="查询分类">类别分类:</label>
            </div>
            <div class="ant-col ant-col-18 ant-form-item-control-wrapper">
              <div class="ant-form-item-control">
                <span class="ant-form-item-children">
                  <el-select v-model="value1" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                  <el-select
                    v-model="value1"
                    placeholder="请选择"
                    style="margin-left: 20px"
                  >
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </span>
              </div>
            </div>
          </div>
          <div class="ant-row ant-form-item" style="height: 65px">
            <div
              class="
                ant-col ant-col-6 ant-form-item-label ant-form-item-label-left
              "
            >
              <label for="" class="" title="查询分类">公司名称:</label>
            </div>
            <div class="ant-col ant-col-18 ant-form-item-control-wrapper">
              <div class="ant-form-item-control">
                <span class="ant-form-item-children">
                  <el-input
                    v-model="input1"
                    placeholder="请输入内容"
                  ></el-input>
                </span>
              </div>
            </div>
          </div>
          <div class="ant-row ant-form-item" style="height: 65px">
            <div
              class="
                ant-col ant-col-6 ant-form-item-label ant-form-item-label-left
              "
            >
              <label for="" class="" title="查询分类">品牌:</label>
            </div>
            <div class="ant-col ant-col-18 ant-form-item-control-wrapper">
              <div class="ant-form-item-control">
                <span class="ant-form-item-children">
                  <el-input
                    v-model="input2"
                    placeholder="请输入内容"
                  ></el-input>
                </span>
              </div>
            </div>
          </div>
          <div class="ant-row ant-form-item" style="height: 65px">
            <div
              class="
                ant-col ant-col-6 ant-form-item-label ant-form-item-label-left
              "
            >
              <label for="" class="" title="">负责人:</label>
            </div>
            <div class="ant-col ant-col-18 ant-form-item-control-wrapper">
              <div class="ant-form-item-control">
                <span class="ant-form-item-children">
                  <el-input
                    v-model="input3"
                    placeholder="请输入内容"
                  ></el-input>
                </span>
              </div>
            </div>
          </div>
          <div class="ant-row ant-form-item" style="height: 65px">
            <div
              class="
                ant-col ant-col-6 ant-form-item-label ant-form-item-label-left
              "
            >
              <label for="" class="" title="查询分类">电话号码:</label>
            </div>
            <div class="ant-col ant-col-18 ant-form-item-control-wrapper">
              <div class="ant-form-item-control">
                <span class="ant-form-item-children">
                  <el-select v-model="value2" placeholder="请选择">
                    <el-option
                      v-for="item in options2"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                  <el-input
                    v-model="input4"
                    placeholder="请输入内容"
                    style="width: 25%; margin-left: 2%"
                  ></el-input>
                  <el-input
                    v-model="input5"
                    placeholder="请输入内容"
                    style="width: 25%; margin-left: 2%"
                  ></el-input>
                </span>
              </div>
            </div>
          </div>
          <div class="ant-row ant-form-item" style="height: 65px">
            <div
              class="
                ant-col ant-col-6 ant-form-item-label ant-form-item-label-left
              "
            >
              <label for="" class="" title="查询分类">负责人手机号码:</label>
            </div>
            <div class="ant-col ant-col-18 ant-form-item-control-wrapper">
              <div class="ant-form-item-control">
                <span class="ant-form-item-children">
                  <el-select v-model="value2" placeholder="请选择">
                    <el-option
                      v-for="item in options2"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                  <el-input
                    v-model="input6"
                    placeholder="请输入内容"
                    style="width: 25%; margin-left: 2%"
                  ></el-input>
                  <el-input
                    v-model="input7"
                    placeholder="请输入内容"
                    style="width: 25%; margin-left: 2%"
                  ></el-input>
                </span>
              </div>
            </div>
          </div>
          <div class="ant-row ant-form-item" style="height: 65px">
            <div
              class="
                ant-col ant-col-6 ant-form-item-label ant-form-item-label-left
              "
            >
              <label for="" class="" title="查询分类">联系电子邮件:</label>
            </div>
            <div class="ant-col ant-col-18 ant-form-item-control-wrapper">
              <div class="ant-form-item-control">
                <span class="ant-form-item-children">
                  <el-input
                    v-model="input6"
                    placeholder="请输入内容"
                    style="width: 25%"
                  ></el-input>
                  <span
                    style="
                      margin-left: 1%;
                      display: inline-block;
                      font-size: 22px;
                    "
                  >
                    @
                  </span>
                  <el-input
                    v-model="input7"
                    placeholder="请输入内容"
                    style="width: 25%; margin-left: 1%"
                  ></el-input>
                  <el-select
                    v-model="value3"
                    placeholder="请选择"
                    style="width: 25%; margin-left: 2%"
                  >
                    <el-option
                      v-for="item in options3"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </span>
              </div>
            </div>
          </div>
          <div class="ant-row ant-form-item" style="height: 65px">
            <div
              class="
                ant-col ant-col-6 ant-form-item-label ant-form-item-label-left
              "
            >
              <label for="" class="" title="">网站地址:</label>
            </div>
            <div class="ant-col ant-col-18 ant-form-item-control-wrapper">
              <div class="ant-form-item-control">
                <span class="ant-form-item-children"
                  >http://
                  <el-input
                    v-model="input8"
                    placeholder="请输入内容"
                    style="width: 65%"
                  ></el-input>
                </span>
              </div>
            </div>
          </div>
          <div class="ant-row ant-form-item" style="height: 130px">
            <div
              class="
                ant-col ant-col-6 ant-form-item-label ant-form-item-label-left
              "
            >
              <label for="" class="" title="">公司地址:</label>
            </div>
            <div class="ant-col ant-col-18 ant-form-item-control-wrapper">
              <div class="ant-form-item-control">
                <span class="ant-form-item-children">
                  <el-input
                    v-model="input9"
                    placeholder="请输入内容"
                    style="width: 45%; margin: 5px"
                  ></el-input>

                  <el-button type="info" style="margin: 5px"
                    >查找邮政编码</el-button
                  >
                  <el-input
                    v-model="input10"
                    placeholder="请输入内容"
                    style="width: 45%; margin: 5px"
                  ></el-input>
                  <el-input
                    v-model="input11"
                    placeholder="请输入内容"
                    style="width: 45%; margin: 5px"
                  ></el-input>
                </span>
              </div>
            </div>
          </div>
          <div class="ant-row ant-form-item" style="height: 130px">
            <div
              class="
                ant-col ant-col-6 ant-form-item-label ant-form-item-label-left
              "
            >
              <label for="" class="" title="">关于我们:</label>
            </div>
            <div class="ant-col ant-col-18 ant-form-item-control-wrapper">
              <div class="ant-form-item-control">
                <span class="ant-form-item-children">
                  <el-input
                    type="textarea"
                    :rows="2"
                    placeholder="请输入内容"
                    v-model="textarea"
                  >
                  </el-input>
                </span>
              </div>
            </div>
          </div>
          <div class="ant-row ant-form-item" style="height: 65px">
            <div
              class="
                ant-col ant-col-6 ant-form-item-label ant-form-item-label-left
              "
            >
              <label for="" class="" title="">产品类别:</label>
            </div>
            <div class="ant-col ant-col-18 ant-form-item-control-wrapper">
              <div class="ant-form-item-control">
                <span class="ant-form-item-children">
                  <el-radio-group v-model="radio1">
                    <el-radio :label="3">国内产品经销</el-radio>
                    <el-radio :label="6">收入</el-radio>
                    <el-radio :label="9">自我生产</el-radio>
                  </el-radio-group>
                </span>
              </div>
            </div>
          </div>
          <div class="ant-row ant-form-item" style="height: 65px">
            <div
              class="
                ant-col ant-col-6 ant-form-item-label ant-form-item-label-left
              "
            >
              <label for="" class="" title="">销售方式:</label>
            </div>
            <div class="ant-col ant-col-18 ant-form-item-control-wrapper">
              <div class="ant-form-item-control">
                <span class="ant-form-item-children">
                  <el-radio v-model="radio2" label="1">寄售</el-radio>
                </span>
              </div>
            </div>
          </div>
          <div class="ant-row ant-form-item" style="height: 130px">
            <div
              class="
                ant-col ant-col-6 ant-form-item-label ant-form-item-label-left
              "
            >
              <label for="" class="" title="">产品介绍:</label>
            </div>
            <div class="ant-col ant-col-18 ant-form-item-control-wrapper">
              <div class="ant-form-item-control">
                <span class="ant-form-item-children">
                  <el-input
                    type="textarea"
                    :rows="2"
                    placeholder=""
                    v-model="textarea"
                  >
                  </el-input>
                </span>
              </div>
            </div>
          </div>
          <div class="ant-row ant-form-item" style="height: 65px">
            <div
              class="
                ant-col ant-col-6 ant-form-item-label ant-form-item-label-left
              "
            >
              <label for="" class="" title="">领店进入状态:</label>
            </div>
            <div class="ant-col ant-col-18 ant-form-item-control-wrapper">
              <div class="ant-form-item-control">
                <span class="ant-form-item-children">
                  <el-input v-model="input12" placeholder=""></el-input>
                </span>
              </div>
            </div>
          </div>
          <div class="ant-row ant-form-item" style="height: 130px">
            <div
              class="
                ant-col ant-col-6 ant-form-item-label ant-form-item-label-left
              "
            >
              <label for="" class="" title="">品牌介绍:</label>
            </div>
            <div class="ant-col ant-col-18 ant-form-item-control-wrapper">
              <div class="ant-form-item-control">
                <span class="ant-form-item-children">
                  <el-input
                    v-model="input13"
                    placeholder=""
                    style="width: 50%"
                  ></el-input>
                  <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :before-remove="beforeRemove"
                    multiple
                    :limit="3"
                    :on-exceed="handleExceed"
                    :file-list="fileList"
                    style="width: 11%"
                  >
                    <el-button
                      size="small"
                      type="primary"
                      style="background-color: grey; border-color: grey"
                      >文件选择</el-button
                    >
                    <div slot="tip" class="el-upload__tip"></div>
                  </el-upload>
                </span>
              </div>
            </div>
          </div>
          <div class="ant-row ant-form-item" style="height: 130px">
            <div
              class="
                ant-col ant-col-6 ant-form-item-label ant-form-item-label-left
              "
            >
              <label for="" class="" title="">防止自动注册:</label>
            </div>
            <div class="ant-col ant-col-18 ant-form-item-control-wrapper">
              <div class="ant-form-item-control">
                <span class="ant-form-item-children"> </span>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="viewContent">
        <label class="ant-checkbox-wrapper">
          <el-checkbox v-model="checked"
            >同意使用和收集个人信息(必填)</el-checkbox
          >
        </label>
        <button
          type="button"
          class="btn_micro ant-btn"
          ant-click-animating-without-extra-node="false"
          @click="showMask()"
        >
          <span >查看内容</span>
        </button>
      </div>
      <div class="application">
        <button class="btn_cancel ant-btn">
          <span>取消</span>
        </button>
        <button type="button" class="btn_appli ant-btn">
          <span>申请</span>
        </button>
      </div>
      <div class="mask" v-if="isshowMask">
        <div class="mask_box">
          <div class="mBar">
            <h2>收集和使用个人信息(必填)</h2>
            <span @click="closeMask()">
              <i class="mIco anticon anticon-close el-icon-close"></i>
            </span>
          </div>
          <div class="ant-table-wrapper">
            <div class="ant-spin-nested-loading">
              <div class="ant-spin-container">
                <div
                  class="
                    ant-table
                    ant-table-scroll-position-left
                    ant-table-default
                    ant-table-empty
                  "
                >
                  <div class="ant-table-content">
                    <div class="ant-table-body">
                      <table class="">
                        <colgroup></colgroup>
                        <thead class="ant-table-thead"></thead>
                        <tbody class="ant-table-tbody"></tbody>
                      </table>
                    </div>
                    <div class="ant-table-placeholder">
                      <div class="ant-empty ant-empty-normal">
                        <div class="ant-empty-image">
                          <i
                            class="el-icon-folder-opened"
                            style="font-size: 50px"
                          ></i>
                        </div>
                        <p class="ant-empty-description">No Data</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Advisory",
  data() {
    return {
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
      input6: "",
      input7: "",
      input8: "",
      input9: "",
      input10: "",
      input11: "",
      input12: "",
      input13: "",
      options: [
        {
          value1: "选项1",
          label: "Zone one",
        },
        {
          value1: "选项2",
          label: "Zone two",
        },
      ],
      options2: [
        {
          value2: "选项2",
          label: "018",
        },
      ],
      options3: [
        {
          value2: "选项2",
          label: "直接输入",
        },
      ],
      value: "",
      value2: "",
      value3: "",
      textarea: "",
      radio1: 3,
      radio2: "1",
      checked: true,
      isshowMask:false,
    };
  },
  components: {},
  methods: {
    // 开
    showMask() {
      this.isshowMask = true;
    },
    // 关
    closeMask() {
      this.isshowMask = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.advisory {
  width: 100%;
  .adv {
    width: 100%;
    height: 200px;
    padding-top: 81px;
    text-align: center;
  }
  .adv > h2 {
    font-size: 44px;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    margin-bottom: 0.5em;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
  }
  *,
  ::before,
  ::after {
    box-sizing: border-box;
    ::after,
    ::before {
      margin: 0;
      padding: 0;
    }
  }
  // 中间三个
  .fromStep {
    width: 80%;
    height: 184px;
    text-align: center;
    margin: 0 auto 20px;
  }
  .fromStep ul {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .fromStep ul::before {
    left: 67%;
    background-color: #fff;
  }
  .fromStep ul::after {
    position: absolute;
    top: 50%;
    display: inline-block;
    content: ">";
    width: 30px;
    height: 30px;
    line-height: 1;
    text-align: center;
    border: 1px solid #d9d9d9;
    background-color: #fff;
    border-radius: 50%;
    font-size: 24px;
    color: #d9d9d9;
    z-index: 2;
    left: 34%;
  }
  .fromStep ul::before {
    position: absolute;
    top: 50%;
    display: inline-block;
    content: ">";
    width: 30px;
    height: 30px;
    line-height: 1;
    text-align: center;
    border: 1px solid #d9d9d9;
    background-color: #fff;
    border-radius: 50%;
    font-size: 24px;
    color: #d9d9d9;
    z-index: 2;
  }
  .fromStep ul .step_li {
    position: relative;
    height: 100%;
    flex: 1;
    border: 1px solid #d9d9d9;
    padding: 0 20px;
  }
  li {
    list-style: none;
  }
  .fromStep ul .step_li .step {
    position: absolute;
    top: 5%;
    left: 5%;
    color: #a5a5a5;
    font-size: 14px;
  }
  .fromStep ul .step_li i {
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    font-style: normal;
    font-size: 36px;
  }
  .anticon {
    display: inline-block;
    color: inherit;
    line-height: 0;
    text-align: center;
    text-transform: none;
    text-rendering: optimizeLegibility;
  }
  .fromStep ul .step_li strong {
    display: inline-block;
    margin: 90px 0 6px;
    font-size: 16px;
  }
  .fromStep ul .step_li p {
    font-size: 14px;
    color: #666;
  }
  // note
  .note {
    width: 80%;
    padding: 40px 42px;
    margin: 0 auto 70px;
    background-color: #eee;
    font-size: 14px;
    line-height: 24px;
  }
  .note h3 {
    padding-bottom: 15px;
  }
  p {
    margin: 0;
    padding: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  // 表格
  .fromMain {
    width: 80%;
    margin: 0 auto 20px;
    border-top: 2px solid #000;
    padding: 20px 30px;
  }
  .from_ {
    width: 100%;
  }
  .ant-form {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    font-feature-settings: "tnum";
  }
  .ant-form-item {
    width: 100%;
    margin: 0 auto;
    line-height: 68px;
    padding: 14px 60px;
    border-bottom: 1px solid #ccc;
  }
  .ant-row {
    position: relative;
    height: auto;
    display: block;
    box-sizing: border-box;
  }
  .ant-form-item {
    font-size: 14px;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: "tnum";
  }
  .ant-col-6 {
    display: block;
    box-sizing: border-box;
    width: 25%;
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
    float: left;
  }
  .ant-col-1,
  .ant-col-xs-1,
  .ant-col-sm-1,
  .ant-col-md-1,
  .ant-col-lg-1,
  .ant-col-2,
  .ant-col-xs-2,
  .ant-col-sm-2,
  .ant-col-md-2,
  .ant-col-lg-2,
  .ant-col-3,
  .ant-col-xs-3,
  .ant-col-sm-3,
  .ant-col-md-3,
  .ant-col-lg-3,
  .ant-col-4,
  .ant-col-xs-4,
  .ant-col-sm-4,
  .ant-col-md-4,
  .ant-col-lg-4,
  .ant-col-5,
  .ant-col-xs-5,
  .ant-col-sm-5,
  .ant-col-md-5,
  .ant-col-lg-5,
  .ant-col-6,
  .ant-col-xs-6,
  .ant-col-sm-6,
  .ant-col-md-6,
  .ant-col-lg-6,
  .ant-col-7,
  .ant-col-xs-7,
  .ant-col-sm-7,
  .ant-col-md-7,
  .ant-col-lg-7,
  .ant-col-8,
  .ant-col-xs-8,
  .ant-col-sm-8,
  .ant-col-md-8,
  .ant-col-lg-8,
  .ant-col-9,
  .ant-col-xs-9,
  .ant-col-sm-9,
  .ant-col-md-9,
  .ant-col-lg-9,
  .ant-col-10,
  .ant-col-xs-10,
  .ant-col-sm-10,
  .ant-col-md-10,
  .ant-col-lg-10,
  .ant-col-11,
  .ant-col-xs-11,
  .ant-col-sm-11,
  .ant-col-md-11,
  .ant-col-lg-11,
  .ant-col-12,
  .ant-col-xs-12,
  .ant-col-sm-12,
  .ant-col-md-12,
  .ant-col-lg-12,
  .ant-col-13,
  .ant-col-xs-13,
  .ant-col-sm-13,
  .ant-col-md-13,
  .ant-col-lg-13,
  .ant-col-14,
  .ant-col-xs-14,
  .ant-col-sm-14,
  .ant-col-md-14,
  .ant-col-lg-14,
  .ant-col-15,
  .ant-col-xs-15,
  .ant-col-sm-15,
  .ant-col-md-15,
  .ant-col-lg-15,
  .ant-col-16,
  .ant-col-xs-16,
  .ant-col-sm-16,
  .ant-col-md-16,
  .ant-col-lg-16,
  .ant-col-17,
  .ant-col-xs-17,
  .ant-col-sm-17,
  .ant-col-md-17,
  .ant-col-lg-17,
  .ant-col-18,
  .ant-col-xs-18,
  .ant-col-sm-18,
  .ant-col-md-18,
  .ant-col-lg-18,
  .ant-col-19,
  .ant-col-xs-19,
  .ant-col-sm-19,
  .ant-col-md-19,
  .ant-col-lg-19,
  .ant-col-20,
  .ant-col-xs-20,
  .ant-col-sm-20,
  .ant-col-md-20,
  .ant-col-lg-20,
  .ant-col-21,
  .ant-col-xs-21,
  .ant-col-sm-21,
  .ant-col-md-21,
  .ant-col-lg-21,
  .ant-col-22,
  .ant-col-xs-22,
  .ant-col-sm-22,
  .ant-col-md-22,
  .ant-col-lg-22,
  .ant-col-23,
  .ant-col-xs-23,
  .ant-col-sm-23,
  .ant-col-md-23,
  .ant-col-lg-23,
  .ant-col-24,
  .ant-col-xs-24,
  .ant-col-sm-24,
  .ant-col-md-24,
  .ant-col-lg-24 {
    position: relative;
    padding-right: 0;
    padding-left: 0;
  }
  .ant-col {
    min-height: 1px;
  }
  .ant-form-item-label-left {
    text-align: left;
  }
  .ant-form-item-label {
    overflow: hidden;
    line-height: 39.9999px;
    white-space: nowrap;
  }
  .ant-form-item label {
    position: relative;
  }
  .ant-form-item-label > label {
    color: rgba(0, 0, 0, 0.85);
  }
  .ant-form label {
    font-size: 14px;
  }
  .ant-col-18 {
    display: block;
    box-sizing: border-box;
    width: 75%;
  }
  .ant-form-item-control {
    position: relative;
    line-height: 40px;
  }
  .ant-form-item-children {
    position: relative;
  }
  .select_sort_30 {
    width: 30%;
    margin: 0 5px;
  }
  .ant-select {
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    font-feature-settings: "tnum";
    position: relative;
    display: inline-block;
    outline: 0;
  }
  .ant-select-selection--single {
    background-color: #f2f2f2;
  }
  .ant-select-selection--single {
    position: relative;
    height: 32px;
    cursor: pointer;
  }
  .ant-select-selection {
    display: block;
    box-sizing: border-box;
    border: 1px solid #d9d9d9;
    border-top-width: 1px;
    border-top-width: 1.02px;
    border-radius: 4px;
    outline: none;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    user-select: none;
  }
  .ant-select-selection--single .ant-select-selection__rendered {
    margin-right: 24px;
  }
  .ant-select-selection__rendered {
    position: relative;
    display: block;
    margin-left: 11px;
    line-height: 30px;
  }
  .ant-select-selection__placeholder,
  .ant-select-search__field__placeholder {
    position: absolute;
    top: 50%;
    right: 9px;
    left: 0;
    max-width: 100%;
    height: 20px;
    margin-top: -10px;
    overflow: hidden;
    color: #bfbfbf;
    line-height: 20px;
    white-space: nowrap;
    text-align: left;
    text-overflow: ellipsis;
  }
  ant-select-arrow {
    display: inline-block;
    font-style: normal;
    text-align: center;
    text-transform: none;
    text-rendering: optimizeLegibility;
    position: absolute;
    top: 50%;
    right: 11px;
    margin-top: -6px;
    color: rgba(0, 0, 0, 0.25);
    font-size: 12px;
    line-height: 1;
    transform-origin: 50% 50%;
  }
  .ant-select-arrow .ant-select-arrow-icon {
    display: block;
  }
  .ant-select-arrow > * {
    line-height: 1;
  }
  .anticon {
    display: inline-block;
    color: inherit;
    font-style: normal;
    text-align: center;
    text-transform: none;
    text-rendering: optimizeLegibility;
  }
  .viewContent {
    width: 75%;
    height: 50px;
    margin: 0 auto;
    line-height: 2;
    padding: 13px 40px 0;
    background-color: #f2f2f2;
    display: flex;
    justify-content: space-between;
  }
  .ant-checkbox-wrapper {
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: "tnum";
    display: inline-block;
    line-height: unset;
    cursor: pointer;
  }
  .ant-checkbox {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: "tnum";
    position: relative;
    top: -0.09em;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    vertical-align: middle;
    outline: none;
    cursor: pointer;
  }
  input[type="checkbox"] {
    box-sizing: border-box;
    padding: 0;
  }
  .ant-checkbox-input {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 0;
  }
  .ant-checkbox-inner {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    width: 16px;
    height: 16px;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    border-collapse: separate;
    transition: all 0.3s;
  }
  .ant-checkbox + span {
    padding-right: 8px;
    padding-left: 8px;
  }
  .btn_micro {
    min-width: 60px;
    padding: 0 8px;
    height: 20px;
    line-height: 18px;
    border: 1px solid #333;
    text-align: center;
    color: #000;
  }
  .btn_cancel,
  .btn_appli {
    min-width: 180px;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    text-align: center;
    padding: 0 20px;
    border: 1px solid #000;
    border-radius: 0;
    color: #000;
  }
  .ant-btn > i,
  .ant-btn > span {
    display: inline-block;
    transition: margin-left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    pointer-events: none;
  }
  .btn_appli {
    background-color: #000;
    color: #fff;
    margin-left: 20px;
  }
  .application {
    width: 100%;
    height: 50px;
    margin-top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 998;
  }
  .mask_box {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 65%;
    height: 50%;
    background-color: #fff;
    overflow: hidden;
    min-width: 480px;
    padding: 40px;
    border: 1px solid #000;
  }
  .mask_box .mBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #000;
    padding-bottom: 27px;
  }
  .mask_box .mBar h2 {
    font-size: 24px;
  }
  .mask_box .mBar .mIco {
    font-size: 32px;
    color: #ccc;
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
  .ant-spin-nested-loading {
    position: relative;
  }
  .ant-spin-container {
    position: relative;
    transition: opacity 0.3s;
  }
  .ant-table {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    font-feature-settings: "tnum";
    position: relative;
    clear: both;
  }
  .ant-table-empty .ant-table-body {
    overflow-x: auto !important;
    overflow-y: hidden !important;
  }
  .ant-table-body {
    transition: opacity 0.3s;
  }
  .ant-table table {
    width: 100%;
    text-align: left;
    border-radius: 4px 4px 0 0;
    border-collapse: separate;
    border-spacing: 0;
  }
  .ant-table-placeholder {
    position: relative;
    z-index: 1;
    margin-top: -1px;
    padding: 16px 16px;
    color: rgba(0, 0, 0, 0.25);
    font-size: 14px;
    text-align: center;
    background: #fff;
    border-top: 1px solid #e8e8e8;
    border-bottom: 1px solid #e8e8e8;
    border-radius: 0 0 4px 4px;
  }
  .ant-empty-normal {
    margin: 32px 0;
    color: rgba(0, 0, 0, 0.25);
  }
  .ant-empty {
    font-size: 14px;
    line-height: 22px;
    text-align: center;
  }
  .ant-empty-normal .ant-empty-image {
    height: 40px;
  }
  .ant-empty-image {
    margin-bottom: 8px;
  }
  .ant-empty-description {
    margin: 0;
  }
}
</style>