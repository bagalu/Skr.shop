<template>
  <div class="Footer">
    <el-container>
      <el-footer height="590px">
        <div class="footerbar">
          <div class="footertop">
            <div class="footertop-inner">
              <a href="">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
              </a>
              <a href="">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
              </a>
              <a href="">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
              </a>
            </div>
            <div class="footer_content" data-v-3bd5e4b0="">
              <div class="notice" data-v-3bd5e4b0="">
                <div
                  class="tab_head ant-tabs ant-tabs-top ant-tabs-line"
                  data-v-3bd5e4b0=""
                >
                  <div
                    class="ant-tabs-bar ant-tabs-top-bar"
                    role="tablist"
                    tabindex="0"
                  >
                    <div class="ant-tabs-extra-content" style="float: right">
                      <button class="ant-btn" data-v-3bd5e4b0="" type="button">
                        <span>+</span>
                      </button>
                    </div>
                    <div class="ant-tabs-nav-container">
                      <div class="ant-tabs-nav-wrap">
                        <div class="ant-tabs-nav-scroll">
                          <div class="ant-tabs-nav ant-tabs-nav-animated">
                            <div>
                              <div
                                class="ant-tabs-tab-active ant-tabs-tab"
                                role="tab"
                              >
                                消息
                              </div>
                              <div class="ant-tabs-tab">活动公告</div>
                            </div>
                            <div
                              class="ant-tabs-ink-bar ant-tabs-ink-bar-animated"
                              style="
                                display: block;
                                transform: translate3d(0px, 0px, 0px);
                                width: 80px;
                              "
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      tabindex="0"
                      role="presentation"
                      style="
                        width: 0px;
                        height: 0px;
                        overflow: hidden;
                        position: absolute;
                      "
                    ></div>
                    <div
                      class="ant-tabs-content ant-tabs-content-animated ant-tabs-top-content"
                      style="margin-left: 0%"
                    >
                      <div
                        class="tab_text ant-tabs-tabpane ant-tabs-tabpane-active"
                      >
                        <div
                          tabindex="0"
                          role="presentation"
                          style="
                            width: 0px;
                            height: 0px;
                            overflow: hidden;
                            position: absolute;
                          "
                        ></div>
                        <ul data-v-3bd5e4b0="" style="margin-top: 10px">
                          <li data-v-3bd5e4b0="">
                            <a data-v-3bd5e4b0="" href="">· [指南](3/5罢工)</a>
                          </li>
                          <li data-v-3bd5e4b0="">
                            <a data-v-3bd5e4b0="" href="">· [指南] 3月1日</a>
                          </li>
                          <li data-v-3bd5e4b0="">
                            <a data-v-3bd5e4b0="" href="">· [信息] 客服</a>
                          </li>
                          <li data-v-3bd5e4b0="">
                            <a data-v-3bd5e4b0="" href="">· [concept] </a>
                          </li>
                          <li data-v-3bd5e4b0="">
                            <a data-v-3bd5e4b0="" href="">· [concept]</a>
                          </li>
                        </ul>
                        <div
                          tabindex="0"
                          role="presentation"
                          style="
                            width: 0px;
                            height: 0px;
                            overflow: hidden;
                            position: absolute;
                          "
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="contact" data-v-3bd5e4b0="">
                <p data-v-3bd5e4b0="">
                  <span data-v-3bd5e4b0="" class="fuwu">服务中心</span>
                  <span data-v-3bd5e4b0="" class="phone_">1566-5027</span>
                </p>
                <p data-v-3bd5e4b0="" class="timer_">营业时间</p>
                <p data-v-3bd5e4b0="" class="adress_">2801810010@qq.com</p>
                <p class="button_icon" data-v-3bd5e4b0="">
                  <span data-v-3bd5e4b0="">
                    <button
                      data-v-3bd5e4b0=""
                      type="button"
                      class="footer_btn ant-btn"
                    >
                      <span>常见问题</span>
                    </button>
                    <button
                      data-v-3bd5e4b0=""
                      type="button"
                      class="footer_btn ant-btn"
                    >
                      <span>1：1查询</span>
                    </button>
                  </span>
                  <span data-v-3bd5e4b0="">
                    <i
                      class="anticon anticon-facebook el-icon-lollipop"
                      style="font-size: 32px; width: 41px"
                    ></i>
                    <i
                      class="anticon anticon-facebook el-icon-help"
                      style="font-size: 32px; width: 41px"
                    ></i>
                    <i
                      class="anticon anticon-facebook el-icon-odometer"
                      style="font-size: 32px; width: 41px"
                    ></i>
                    <i
                      class="anticon anticon-facebook el-icon-reading"
                      style="font-size: 32px; width: 41px"
                    ></i>
                  </span>
                </p>
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
    name:'Footer'
}
</script>

<style lang="scss" scoped>
    // 底部
.footerbar {
  width: 100%;
  padding-top: 90px;
  .footertop {
    width: 80%;
    height: 500px;
    margin: 0 auto;
    .footertop-inner {
      height: 130px;
      margin-bottom: 80px;
      img {
        width: 33%;
      }
    }
    .footer_content[data-v-3bd5e4b0] {
      display: flex;
      justify-content: space-between;
    }
    [data-v-3bd5e4b0],
    [data-v-3bd5e4b0]::after,
    [data-v-3bd5e4b0]::before {
      margin: 0;
      padding: 0;
    }
    .notice[data-v-3bd5e4b0] {
      width: 50%;
    }
    .ant-tabs {
      box-sizing: border-box;
      color: rgba(0, 0, 0, 0.65);
      font-size: 14px;
      font-variant: tabular-nums;
      line-height: 1.5;
      list-style: none;
      font-feature-settings: 'tnum';
      position: relative;
      overflow: hidden;
    }
    .ant-tabs-bar,
    .ant-tabs-nav-container {
      transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .ant-tabs-bar {
      margin: 0 0 16px 0;
      border-bottom: 1px solid #e8e8e8;
      outline: none;
    }
    .ant-tabs-extra-content {
      line-height: 45px;
    }
    button[data-v-3bd5e4b0] {
      border: 0;
    }
    .ant-btn,
    .ant-btn:active,
    .ant-btn:focus {
      outline: 0;
    }
    .ant-btn {
      line-height: 1.499;
      position: relative;
      display: inline-block;
      font-weight: 400;
      white-space: nowrap;
      text-align: center;
      background-image: none;
      box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      user-select: none;
      touch-action: manipulation;
      height: 32px;
      font-size: 14px;
      border-radius: 4px;
      color: rgba(0, 0, 0, 0.65);
      background-color: #fff;
    }
    .ant-btn > i,
    .ant-btn > span {
      display: inline-block;
      transition: margin-left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      pointer-events: none;
    }
    .ant-tabs-nav-container {
      position: relative;
      box-sizing: border-box;
      margin-bottom: -1px;
      overflow: hidden;
      font-size: 14px;
      line-height: 1.5;
      white-space: nowrap;
    }
    .ant-tabs-bar,
    .ant-tabs-nav-container {
      transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .ant-tabs-nav-wrap {
      margin-bottom: -1px;
      overflow: hidden;
    }
    .ant-tabs-nav-scroll {
      overflow: hidden;
      white-space: nowrap;
    }
    .ant-tabs-nav {
      position: relative;
      display: inline-block;
      box-sizing: border-box;
      margin: 0;
      padding-left: 0;
      list-style: none;
      transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    [data-v-3bd5e4b0] .ant-tabs-nav .ant-tabs-tab {
      font-size: 24px;
      color: #000;
    }
    .ant-tabs-nav .ant-tabs-tab-active {
      font-weight: 500;
    }
    .ant-tabs-nav .ant-tabs-tab {
      position: relative;
      display: inline-block;
      box-sizing: border-box;
      height: 100%;
      margin: 0 32px 0 0;
      padding: 12px 16px;
      text-decoration: none;
      cursor: pointer;
      transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    [data-v-3bd5e4b0] .ant-tabs-nav .ant-tabs-tab {
      font-size: 24px;
      color: #000;
    }
    .ant-tabs-nav .ant-tabs-tab:last-child {
      margin-right: 0;
    }
    .ant-tabs-nav .ant-tabs-tab {
      position: relative;
      display: inline-block;
      box-sizing: border-box;
      height: 100%;
      margin: 0 32px 0 0;
      margin-right: 32px;
      padding: 12px 16px;
      text-decoration: none;
      cursor: pointer;
      transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .ant-tabs-bottom .ant-tabs-ink-bar-animated,
    .ant-tabs-top .ant-tabs-ink-bar-animated {
      transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
        width 0.2s cubic-bezier(0.645, 0.045, 0.355, 1),
        left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .ant-tabs-ink-bar {
      position: absolute;
      bottom: 1px;
      left: 0;
      z-index: 1;
      box-sizing: border-box;
      width: 0;
      height: 2px;
      background-color: #1890ff;
      transform-origin: 0 0;
    }
    .ant-tabs .ant-tabs-bottom-content.ant-tabs-content-animated,
    .ant-tabs .ant-tabs-top-content.ant-tabs-content-animated {
      display: flex;
      flex-direction: row;
      transition: margin-left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      will-change: margin-left;
    }
    .ant-tabs .ant-tabs-bottom-content,
    .ant-tabs .ant-tabs-top-content {
      width: 100%;
    }
    .ant-tabs .ant-tabs-bottom-content > .ant-tabs-tabpane,
    .ant-tabs .ant-tabs-top-content > .ant-tabs-tabpane {
      flex-shrink: 0;
      width: 100%;
      opacity: 1;
      transition: opacity 0.45s;
    }
    .tab_text[data-v-3bd5e4b0] {
      font-size: 14px;
      color: #000;
    }
    [data-v-3bd5e4b0],
    [data-v-3bd5e4b0]::after,
    [data-v-3bd5e4b0]::before {
      margin: 0;
      padding: 0;
    }
    li[data-v-3bd5e4b0] {
      list-style: none;
    }
    a[data-v-3bd5e4b0] {
      color: #666;
      text-decoration: none;
    }
    [data-v-3bd5e4b0],
    [data-v-3bd5e4b0]::after,
    [data-v-3bd5e4b0]::before {
      margin: 0;
      padding: 0;
    }
    contact[data-v-3bd5e4b0] {
      width: 40%;
      color: #000;
    }
    [data-v-3bd5e4b0],
    [data-v-3bd5e4b0]::after,
    [data-v-3bd5e4b0]::before {
      margin: 0;
      padding: 0;
    }
    [data-v-3bd5e4b0],
    [data-v-3bd5e4b0]::after,
    [data-v-3bd5e4b0]::before {
      margin: 0;
      padding: 0;
    }
    .fuwu[data-v-3bd5e4b0] {
      font-size: 22px;
      color: #000;
    }
    .phone_[data-v-3bd5e4b0] {
      font-size: 42px;
      color: #000;
    }
    .timer_[data-v-3bd5e4b0] {
      font-size: 14px;
      margin-bottom: 5px;
    }
    .adress_[data-v-3bd5e4b0] {
      margin-bottom: 50px;
    }
    .button_icon[data-v-3bd5e4b0] {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    [data-v-3bd5e4b0] .footer_btn {
      width: 95px;
      height: 40px;
      line-height: 36px;
      color: #000;
      font-size: 14px;
      border: 1px solid #000;
      border-radius: 0;
      margin-right: 10px;
      text-transform: uppercase;
    }
    .ant-btn > i,
    .ant-btn > span {
      display: inline-block;
      transition: margin-left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      pointer-events: none;
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
  }
}
</style>