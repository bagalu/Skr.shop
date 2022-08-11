<template>
  <div class="offters">
    <div class="offters_text">
      <h2>招聘信息</h2>
    </div>
    <div class="off_pic" style="overflow: hidden">
      <img src="@/assets/imgs/img-ysfw.jpg" alt="" />
    </div>
    <div class="off_text">
      <h3>招聘程序</h3>
      <p>每次筛选的成功申请者公告均单独进行。</p>
      <p>如果申请表中有任何虚假信息，入场可能会被取消。</p>
    </div>
    <div class="steps">
      <div
        class="
          ant-steps
          ant-steps-horizontal
          ant-steps-small
          ant-steps-label-horizontal
        "
      >
        <div class="ant-steps-item ant-steps-item-finish">
          <div class="ant-steps-item-container">
            <div class="ant-steps-item-icon">
              <span class="ant-steps-icon">
                <i class="el-icon-check"></i>
              </span>
            </div>
            <div class="ant-steps-item-content">
              <div class="ant-steps-item-title">
                收到文件 <span style="color: #1890ff">—————————————————</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="ant-steps-item ant-steps-item-process ant-steps-item-active"
        >
          <div class="ant-steps-item-container">
            <div class="ant-steps-item-icon" style="background-color: #1890ff">
              <span class="ant-steps-icon" style="color: white">2</span>
            </div>
            <div class="ant-steps-item-content">
              <div class="ant-steps-item-title">
                面试 <span style="color: #e8e8e8">—————————————————</span>
              </div>
            </div>
          </div>
        </div>
        <div class="ant-steps-item ant-steps-item-wait">
          <div class="ant-steps-item-container">
            <div class="ant-steps-item-icon" style="">
              <span class="ant-steps-icon" style="">3</span>
            </div>
            <div class="ant-steps-item-content">
              <div class="ant-steps-item-title">
                第二次面试
                <span style="color: #e8e8e8">—————————————————</span>
              </div>
            </div>
          </div>
        </div>
        <div class="ant-steps-item ant-steps-item-wait">
          <div class="ant-steps-item-container">
            <div class="ant-steps-item-icon" style="">
              <span class="ant-steps-icon" style="">4</span>
            </div>
            <div class="ant-steps-item-content">
              <div class="ant-steps-item-title">加入</div>
            </div>
          </div>
        </div>
      </div>
      <div class="step_head">
        <div class="steps_row ant-row">
          <div class="ant-col ant-col-12">
            <p>薪资条件</p>
            <p>根据公司章程-最终面试后的决定</p>
          </div>
          <div class="ant-col ant-col-12">
            <p>工作地点</p>
            <p>首尔特别市江南区德黑兰路14街16号5楼（线馆驿三洞）</p>
          </div>
        </div>
      </div>
    </div>
    <div class="claim">
      <h3>应用</h3>
      <div class="claim_form">
        <form action="" class="ant-form ant-form-horizontal">
          <div class="ant-row ant-form-item">
            <div class="ant-col ant-col-6 ant-form-item-label">
              <label for="" class="">支援区域</label>
            </div>
            <div class="ant-col ant-col-16 ant-form-item-control-wrapper">
              <div class="ant-form-item-control">
                <el-radio-group v-model="radio1">
                  <el-radio :label="3"> 产品计划(w概念频道MD) </el-radio>
                  <el-radio :label="6"> 营销 </el-radio>
                  <el-radio :label="9">手术</el-radio>
                  <el-radio :label="12"> 设计 </el-radio>
                  <el-radio :label="15"> 产品开发(前排) </el-radio>
                  <el-radio :label="18">它</el-radio>
                </el-radio-group>
              </div>
            </div>
          </div>
          <div class="ant-row ant-form-item">
            <div class="ant-col ant-col-6 ant-form-item-label">
              <label for="" class="">申请人姓名</label>
            </div>
            <div class="ant-col ant-col-16 ant-form-item-control-wrapper">
              <div class="ant-form-item-control">
                <el-input v-model="input" placeholder=""></el-input>
              </div>
            </div>
          </div>
          <div class="ant-row ant-form-item">
            <div class="ant-col ant-col-6 ant-form-item-label">
              <label for="" class="">出生日期</label>
            </div>
            <div class="ant-col ant-col-16 ant-form-item-control-wrapper">
              <div class="ant-form-item-control">
                <el-input v-model="input" placeholder="2021/4/15"></el-input>
              </div>
            </div>
          </div>
          <div class="ant-row ant-form-item">
            <div class="ant-col ant-col-6 ant-form-item-label">
              <label for="" class="">性别</label>
            </div>
            <div class="ant-col ant-col-16 ant-form-item-control-wrapper">
              <div class="ant-form-item-control">
                <el-radio-group v-model="radio2">
                  <el-radio :label="3"> 男</el-radio>
                  <el-radio :label="6"> 女 </el-radio>
                </el-radio-group>
              </div>
            </div>
          </div>
          <div class="ant-row ant-form-item">
            <div class="ant-col ant-col-6 ant-form-item-label">
              <label for="" class="">电子邮件</label>
            </div>
            <div class="ant-col ant-col-16 ant-form-item-control-wrapper">
              <div class="ant-form-item-control">
                <el-input
                  v-model="input2"
                  placeholder="请输入内容"
                  style="width: 25%; margin-right: 2%"
                ></el-input>
                <span style="font-size: 20px; margin-right: 2%">@</span>
                <el-input
                  v-model="input3"
                  placeholder="请输入内容"
                  style="width: 25%; margin-right: 2%"
                ></el-input>
                <el-select v-model="value" placeholder="直接输入">
                  <el-option
                    v-for="item in options1"
                    :key="item.value1"
                    :label="item.label"
                    :value="item.value1"
                  >
                  </el-option>
                </el-select>
              </div>
            </div>
          </div>
          <div class="ant-row ant-form-item">
            <div class="ant-col ant-col-6 ant-form-item-label">
              <label for="" class="">手机号码</label>
            </div>
            <div class="ant-col ant-col-16 ant-form-item-control-wrapper">
              <div class="ant-form-item-control">
                <el-select
                  v-model="value"
                  placeholder="直接输入"
                  style="margin-right: 2%"
                >
                  <el-option
                    v-for="item in options2"
                    :key="item.value2"
                    :label="item.label"
                    :value="item.value2"
                  >
                  </el-option>
                </el-select>
                <el-input
                  v-model="input4"
                  placeholder="请输入内容"
                  style="width: 25%; margin-right: 2%"
                ></el-input>
                <el-input
                  v-model="input5"
                  placeholder="请输入内容"
                  style="width: 25%; margin-right: 2%"
                ></el-input>
              </div>
            </div>
          </div>
          <div class="ant-row ant-form-item">
            <div class="ant-col ant-col-6 ant-form-item-label">
              <label for="" class="">电话号码</label>
            </div>
            <div class="ant-col ant-col-16 ant-form-item-control-wrapper">
              <div class="ant-form-item-control">
                <el-select
                  v-model="value"
                  placeholder="直接输入"
                  style="margin-right: 2%"
                >
                  <el-option
                    v-for="item in options2"
                    :key="item.value2"
                    :label="item.label"
                    :value="item.value2"
                  >
                  </el-option>
                </el-select>
                <el-input
                  v-model="input6"
                  placeholder="请输入内容"
                  style="width: 25%; margin-right: 2%"
                ></el-input>
                <el-input
                  v-model="input7"
                  placeholder="请输入内容"
                  style="width: 25%; margin-right: 2%"
                ></el-input>
              </div>
            </div>
          </div>
          <div class="ant-row ant-form-item">
            <div class="ant-col ant-col-6 ant-form-item-label">
              <label for="" class="">期末教育</label>
            </div>
            <div class="ant-col ant-col-16 ant-form-item-control-wrapper">
              <div class="ant-form-item-control">
                <el-select
                  v-model="value"
                  placeholder="选择学术背景"
                  style="margin-right: 2%"
                >
                  <el-option
                    v-for="item in options3"
                    :key="item.value3"
                    :label="item.label"
                    :value="item.value3"
                  >
                  </el-option>
                </el-select>
                <el-radio-group v-model="radio3">
                  <el-radio :label="3"> 已毕业 </el-radio>
                  <el-radio :label="6"> 参加 </el-radio>
                  <el-radio :label="9">休假</el-radio>
                  <el-radio :label="12"> 辍学 </el-radio>
                </el-radio-group>
              </div>
            </div>
          </div>
          <div class="ant-row ant-form-item">
            <div class="ant-col ant-col-6 ant-form-item-label">
              <label for="" class="">学校名</label>
            </div>
            <div class="ant-col ant-col-16 ant-form-item-control-wrapper">
              <div class="ant-form-item-control">
                <el-input v-model="input8" placeholder=""></el-input>
              </div>
            </div>
          </div>
          <div class="ant-row ant-form-item">
            <div class="ant-col ant-col-6 ant-form-item-label">
              <label for="" class="">主要的</label>
            </div>
            <div class="ant-col ant-col-16 ant-form-item-control-wrapper">
              <div class="ant-form-item-control">
                <el-input v-model="input9" placeholder=""></el-input>
              </div>
            </div>
          </div>
          <div class="ant-row ant-form-item" style="height: 140px">
            <div class="ant-col ant-col-6 ant-form-item-label">
              <label for="" class="">附上简历</label>
            </div>
            <div class="ant-col ant-col-16 ant-form-item-control-wrapper">
              <div class="ant-form-item-control">
                <el-input
                  v-model="input10"
                  placeholder=""
                  style="width: 60%"
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
                >
                  <el-button
                    size="small"
                    type="primary"
                    style="background-color: #7d7d7d; border: none"
                    >点击上传</el-button
                  >
                </el-upload>
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
          <span>查看内容</span>
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
  name: "offters",
  data() {
    return {
      radio1: 3,
      radio2: "1",
      radio3: "3",
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
      options1: [
        {
          value: "选项1",
          label: "直接输入",
        },
      ],
      value1: "",
      options2: [
        {
          value: "选项1",
          label: "021",
        },
      ],
      value2: "",
      options3: [
        {
          value: "选项1",
          label: "选择学术背景",
        },
      ],
      value3: "",
      isshowMask: false,
    };
  },
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
.offters {
  width: 100%;
}
.offters .offters_text {
  width: 80%;
  padding-top: 81px;
  height: 200px;
  margin: 0 auto;
  text-align: center;
}
.offters .offters_text h2 {
  font-size: 44px;
  color: #000;
}
.offters .off_pic,
.offters .off_text,
.offters .steps,
.offters .claim,
.offters .step_head {
  width: 80%;
  margin: 0 auto 30px;
  text-align: center;
}
.offters .off_text {
  border: 1px solid transparent;
  font-size: 16px;
  text-align: left;
}
.offters .off_text h3 {
  font-weight: 700;
  font-size: 24px;
}
p {
  margin: 0;
  padding: 0;
}
.offters .steps {
  text-align: left;
  height: 30px;
  border: 1px solid transparent;
}
.ant-steps {
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.65);
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  font-feature-settings: "tnum";
  display: flex;
  width: 100%;
  font-size: 0;
}
.ant-steps-small.ant-steps-horizontal:not(.ant-steps-label-vertical)
  .ant-steps-item {
  margin-right: 12px;
}
.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item {
  white-space: nowrap;
}
.ant-steps-item-container {
  outline: none;
}
.ant-steps-small .ant-steps-item-icon {
  width: 24px;
  height: 24px;
  font-size: 12px;
  line-height: 24px;
  text-align: center;
  border-radius: 24px;
}
.ant-steps-item-finish .ant-steps-item-icon {
  background-color: #fff;
  border-color: #1890ff;
}
.ant-steps-item-icon {
  margin-right: 8px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC",
    "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-top-color: rgba(0, 0, 0, 0.25);
  border-right-color: rgba(0, 0, 0, 0.25);
  border-bottom-color: rgba(0, 0, 0, 0.25);
  border-left-color: rgba(0, 0, 0, 0.25);
  transition: background-color 0.3s, border-color 0.3s;
}
.ant-steps-item-icon,
.ant-steps-item-content {
  display: inline-block;
  vertical-align: top;
}
.ant-steps-item-finish .ant-steps-item-icon > .ant-steps-icon {
  color: #1890ff;
}
.ant-steps-item-icon > .ant-steps-icon {
  position: relative;
  top: -1px;
  line-height: 1;
}
.ant-steps-item-finish
  > .ant-steps-item-container
  > .ant-steps-item-content
  > .ant-steps-item-title {
  color: rgba(0, 0, 0, 0.65);
}
.ant-steps-small .ant-steps-item-title {
  padding-right: 12px;
  font-size: 14px;
  line-height: 24px;
}
.ant-steps-item-title {
  position: relative;
  display: inline-block;
}
.ant-steps-small.ant-steps-horizontal:not(.ant-steps-label-vertical)
  .ant-steps-item {
  margin-right: 12px;
}
.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item {
  margin-right: 16px;
  white-space: nowrap;
}
.ant-steps-item-container {
  outline: none;
}
.ant-steps-small .ant-steps-item-icon {
  width: 24px;
  height: 24px;
  font-size: 12px;
  line-height: 24px;
  text-align: center;
  border-radius: 24px;
}
.ant-steps-item-process .ant-steps-item-icon {
  background: #1890ff;
}
.ant-steps-item-process .ant-steps-item-icon {
  background-color: #fff;
  border-color: #1890ff;
}
.ant-steps-small.ant-steps-horizontal:not(.ant-steps-label-vertical)
  .ant-steps-item {
  margin-right: 12px;
}
.offters .step_head {
  width: 80%;
}
.offters .steps .steps_row {
  height: 60px;
  display: block;
  padding-top: 6px;
  padding-left: 30px;
  margin: 20px auto;
  position: relative;
}
.ant-col-12 {
  display: block;
  box-sizing: border-box;
  width: 50%;
}
.offters .steps .steps_row::before {
  left: 0;
}
.offters .steps .steps_row::after,
.offters .steps .steps_row::before {
  content: "";
  display: inline-block;
  position: absolute;
  top: 10px;
  width: 1px;
  height: 80%;
  background-color: #ccc;
}
::after,
::before {
  margin: 0;
  padding: 0;
  left: 50%;
}
.ant-col-12 {
  display: block;
  box-sizing: border-box;
  width: 50%;
  display: inline-block;
}
.offters .claim {
  margin-top: 80px;
  text-align: left;
}
.offters .claim h3 {
  font-size: 24px;
  border-bottom: 2px solid #333;
  display: block;
  padding-bottom: 10px;
}
.offters .claim .claim_form {
  width: 100%;
  margin: 10px auto;
  text-align: center;
}
.ant-form {
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  font-feature-settings: "tnum";
}
.offters .claim .claim_form .ant-form-item {
  border-bottom: 1px solid #d9d9d9;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
}
.ant-row {
  position: relative;
  box-sizing: border-box;
}
.ant-form-item {
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
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
  flex: 0 0 auto;
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
.ant-form-item-label {
  overflow: hidden;
  line-height: 39.9999px;
  white-space: nowrap;
  text-align: right;
}
.ant-col-16 {
  display: block;
  box-sizing: border-box;
  width: 66.66666667%;
}
.ant-form-item-control {
  position: relative;
  line-height: 40px;
}

.el-radio {
  margin-right: 15px;
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
</style>