<template>
  <div class="data_content">
    <div
      class="data_content_title"
      style="
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-top: 20px;
      "
    >
      <span style="line-height: 40px; color: #595959"
        >共计 {{ data.length }} 件</span
      >
      <div>
        <div style="width: 120px; height: 30px; display: inline-block">
          <template>
            <el-select v-model="pageOptions_content" placeholder="请选择">
              <el-option
                v-for="(item, index) in pageOptions"
                :key="index"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </template>
        </div>
        <div style="width: 120px; height: 30px; display: inline-block">
          <template>
            <el-select v-model="options_content" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </template>
        </div>
      </div>
    </div>
    <div class="data_content_content" style="width: 100%; margin: 0 auto">
      <ul
        style="
          width: 100%;
          padding-left: 1.65%;
          padding-top: 1.65%;
          text-align: left;
          margin: 0;
        "
      >
        <li
          @click="skip(item.id)"
          class="data_content_content_item"
          v-for="(item, index) in data_goal"
          :key="index"
          style="
            width: 18%;
            height: 23%;
            background-color: #fff;
            outline: 1px solid #e8e8e8;
            display: inline-block;
            margin-right: 1.65%;
            margin-bottom: 1.65%;
          "
        >
          <img style="width: 100%" :src="item.img" />
          <h2
            style="
              width: 100%;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              color: #333333;
              font-size: 20px;
              padding: 0 30px;
            "
          >
            {{ item.title }}
          </h2>
          <span style="width: 100%; color: #666; font-size: 16px"
            >COST: ￥{{ item.price }}</span
          >
        </li>
      </ul>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="10"
        @current-change="changePage"
        :current-page="page"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contentList',
  data() {
    return {
      pageOptions: [
        {
          value: '30',
          label: '每页30',
        },
        {
          value: '60',
          label: '每页60',
        },
        {
          value: '90',
          label: '每页90',
        },
      ],
      pageOptions_content: '选项1',
      options: [
        {
          value: '选项1',
          label: '默认',
        },
        {
          value: '选项2',
          label: '价格最高',
        },
        {
          value: '选项3',
          label: '价格最低',
        },
        {
          value: '选项4',
          label: '销量最高',
        },
      ],
    };
  },
  props: {
    twoPageOptions: Object,
  },
};
</script>

<style></style>
