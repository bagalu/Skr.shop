<template>
  <div class="privacy">
    <div class="privacy_text">
      <h2>隐私政策</h2>
    </div>
    <div class="main_text">
      <p>
        Double U Concept Korea
        Co.，Ltd.（以下简称``公司''）重视用户信息并遵守相关法律法规。
      </p>
      <p>
        因此，公司已根据《信息和通信网络使用促进和信息保护法》和《个人信息保护法》等相关法律制定了个人信息处理政策，并在公司网站上进行了披露，以便用户可以随时轻松浏览。
      </p>
      <p>
        本政策可能会根据公司政策不时更改，如果重要内容发生更改，我们将通过网站通知用户，以便用户可以检查更改。
      </p>
    </div>
    <div class="rule">
      <div class="ant-row" style="display: flex">
        <div class="ant-col ant-col-8">
          <p>第一条总则</p>
          <p>第二条个人信息的收集和使用</p>
          <p>第三条向第三方提供个人信息</p>
          <p>第四条链接网站</p>
          <p>第5条个人信息的处理委托</p>
        </div>
        <div class="ant-col ant-col-8">
          <p>第一条总则</p>
          <p>第二条个人信息的收集和使用</p>
          <p>第三条向第三方提供个人信息</p>
          <p>第四条链接网站</p>
          <p>第5条个人信息的处理委托</p>
        </div>
        <div class="ant-col ant-col-8">
          <p>第一条总则</p>
          <p>第二条个人信息的收集和使用</p>
          <p>第三条向第三方提供个人信息</p>
          <p>第四条链接网站</p>
          <p>第5条个人信息的处理委托</p>
        </div>
      </div>
    </div>
    <div class="first_gen">
      <h3>第一条总则</h3>
      <p>
        1.“个人信息”是指有关在世个人的信息，包括可用于通过姓名，移动电话号码等来识别个人的信息（包括即使特定个人无法将其与其他信息轻松组合的信息）仅由信息识别）说。
      </p>
      <p>
        2.公司遵守相关法律法规，安全处理有价值用户的个人信息。通过个人信息处理政策，公司告知使用用户提供的个人信息的目的和方法，以及正在采取哪些措施来保护个人信息。
      </p>
      <p>
        3.公司在网站的第一个屏幕上披露隐私政策，以便用户可以随时轻松查看它。
      </p>
      <p>
        4.为了不断改进个人信息处理策略，建立了修改个人信息处理策略的必要步骤，并且在进行修改时，通过版本管理，用户可以轻松地查看修改后的事项。
      </p>
    </div>
    <div class="first_gen">
      <h3>第二条总则</h3>
      <p>
        1.“个人信息”是指有关在世个人的信息，包括可用于通过姓名，移动电话号码等来识别个人的信息（包括即使特定个人无法将其与其他信息轻松组合的信息）仅由信息识别）说。
      </p>
      <div class="ant-table-wrapper">
        <div class="ant-spin-nested-loading">
          <div class="ant-spin-container">
            <div
              class="
                ant-table
                ant-table-scroll-position-left
                ant-table-default
                ant-table-bordered
                ant-table-empty
              "
            >
              <div class="ant-table-content">
                <div class="ant-table-body">
                  <table class="" style="width:100%;">
                    <colgroup>
                      <col />
                      <col />
                      <col />
                      <col />
                    </colgroup>
                    <thead class="ant-table-thead">
                      <tr style="display:flex;flex-wrap:wrap;justify-content: space-between;">
                        <th class="k1" :key="0">
                          <span class="ant-table-header-column">
                            <div>
                              <span class="ant-table-column-title">
                                <span> Name</span>
                              </span>
                            </div>
                          </span>
                        </th>
                        <th class="k1" :key="0">
                          <span class="ant-table-header-column">
                            <div>
                              <span class="ant-table-column-title">
                                <span> 收集目的</span>
                              </span>
                            </div>
                          </span>
                        </th>
                        <th class="k1" :key="0">
                          <span class="ant-table-header-column">
                            <div>
                              <span class="ant-table-column-title">
                                <span> 分配</span>
                              </span>
                            </div>
                          </span>
                        </th>
                        <th class="k1 ant-table-row-cell-last">
                          <span class="ant-table-header-column">
                            <div>
                              <span class="ant-table-column-title">
                                <span> 收集物品</span>
                              </span>
                            </div>
                          </span>
                        </th>
                      </tr>
                    </thead>
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
</template>

<script>
export default {
  name: "privacy",
};
</script>

<style lang="scss" scoped>
.privacy {
  width: 100%;
}
.privacy .privacy_text {
  width: 80%;
  padding-top: 81px;
  height: 200px;
  margin: 0 auto;
  text-align: center;
}
.privacy .privacy_text h2 {
  font-size: 44px;
  color: #000;
}
p {
  margin: 0;
  padding: 0;
}
.privacy .main_text {
  width: 80%;
  margin: 0 auto 20px;
}
.privacy .rule {
  position: relative;
  width: 80%;
  margin: 0 auto 20px;
  padding: 20px;
  background-color: #f8f8f8;
}
.privacy .rule::before {
  left: 30%;
}
.privacy .rule::before,
.privacy .rule::after {
  content: "";
  display: inline-block;
  position: absolute;
  top: 15px;
  width: 1px;
  height: 80%;
  background-color: #ccc;
}
.ant-row {
  position: relative;
  height: auto;
  display: block;
  box-sizing: border-box;
}
.ant-row::before,
.ant-row::after {
  display: table;
  content: "";
}
.ant-col-8 {
  display: block;
  box-sizing: border-box;
  width: 33.33333333%;
}
.privacy .rule::after {
  right: 38%;
}
.privacy .first_gen {
  width: 80%;
  margin: 20px auto;
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
.ant-table-thead > tr:first-child > th:first-child {
  border-top-left-radius: 4px;
}
.ant-table-bordered .ant-table-thead > tr > th,
.ant-table-bordered .ant-table-tbody > tr > td {
  border-right: 1px solid #e8e8e8;
}
.ant-table-thead > tr > th,
.ant-table-tbody > tr > td {
  padding: 16px 16px;
  overflow-wrap: break-word;
}
.ant-table-thead > tr > th {
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  text-align: left;
  background: #fafafa;
  border-bottom: 1px solid #e8e8e8;
  transition: background 0.3s ease;
}
.ant-table-thead > tr > th .ant-table-header-column {
  display: inline-block;
  max-width: 100%;
  vertical-align: top;
}
.ant-table-thead > tr:first-child > th:last-child {
  border-top-right-radius: 4px;
}
.ant-table-bordered .ant-table-thead > tr > th,
.ant-table-bordered .ant-table-tbody > tr > td {
  border-right: 1px solid #e8e8e8;
}
.ant-table-thead > tr > th,
.ant-table-tbody > tr > td {
  padding: 16px 16px;
  overflow-wrap: break-word;
}
.ant-table-thead > tr > th {
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  text-align: left;
  background: #fafafa;
  border-bottom: 1px solid #e8e8e8;
  transition: background 0.3s ease;
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
  .k1{
    width: 22%;
  }
</style>