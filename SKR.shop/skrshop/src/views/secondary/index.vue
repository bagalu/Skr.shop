<template>
  <div class="secondary">
    <Title :title="title"></Title>
    <ContentTitle :title="title"></ContentTitle>
    <Recommend></Recommend>
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
  </div>
</template>

<script>
import Title from './ChildComponents/title.vue';
import ContentTitle from './ChildComponents/content.vue';
import Recommend from './ChildComponents/recommend.vue';

import { getSecondaryList } from '@/api/secondary';
export default {
  name: 'secondary',
  data() {
    return {
      twoPageOptions: {
        pageOptions: [
          {
            value: '选项1',
            label: '每页30',
          },
          {
            value: '选项2',
            label: '每页60',
          },
          {
            value: '选项3',
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
      },
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
      pageOptions_content: '30',
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
      options_content: '选项1',
      title: '',
      data: [],
      data_goal: [],
      data_low: [],
      data_height: [],
      data_hot: [],
      page: 1,
    };
  },
  methods: {
    deepCopy(data) {
      var _data;
      if (!(data instanceof Object)) {
        _data = data;
        return _data;
      }
      if (Array.isArray(data)) {
        _data = [];
      }
      if (data.constructor === Object) {
        _data = {};
      }
      for (var i in data) {
        _data[i] = this.deepCopy(data[i]);
      }
      return _data;
    },
    division() {
      // console.log(this.$route.params);
      // console.log(Object.values(this.$route.params).toString());
      let name = Object.values(this.$route.params).toString();
      this.title = name;
      let change = name.split('_');
      let data = {
        name: '',
        series: '',
      };
      data.name = change[0];
      data.series = change[1];
      return data;
    },
    skip(data) {
      // console.log(data);
      this.$router.push(`/details/${data}`);
    },
    changePage(page) {
      // console.log(page);
      this.page = page;
    },
    rank_price() {
      // 1:拿到原来数据
      // 2:把原来数据的每项价格按原本顺序放入新数组
      // 3:深拷贝新数组
      // 4:将拷贝后的数组按照大小顺序排列
      // 5:将排序后的数组按顺序用循环从2中的数组中查询,找到索引就把原来数组对应的数据添加到一个新数组中,找不到就开始下一个
      let data_one = this.deepCopy(this.data);
      let data_two = [],
        data_copy = [];
      data_one.forEach((element) => {
        data_two.push(element.price);
        data_copy.push(element.price);
        // 可以写一个然后深拷贝出另一个
      });
      for (let i = 0; i < data_copy.length; i++) {
        for (let j = 0; j < data_copy.length - i; j++) {
          let content = '';
          if (data_copy[j] < data_copy[j + 1]) {
            content = data_copy[j];
            data_copy[j] = data_copy[j + 1];
            data_copy[j + 1] = content;
          }
        }
      }
      let data = [],
        result = '';
      for (let i = 0; i < data_copy.length; i++) {
        result = data_two.indexOf(data_copy[i]);
        if (result == -1) {
          continue;
        } else {
          data.push(data_one[result]);
          data_two[result] = 's';
        }
      }
      this.data_height = data;
      this.data_low = this.deepCopy(data).reverse();
    },
    rank_sale() {
      // 1:拿到原来数据
      // 2:把原来数据的每项价格按原本顺序放入新数组
      // 3:深拷贝新数组
      // 4:将拷贝后的数组按照大小顺序排列
      // 5:将排序后的数组按顺序用循环从2中的数组中查询,找到索引就把原来数组对应的数据添加到一个新数组中,找不到就开始下一个
      let data_one = this.deepCopy(this.data);
      let data_two = [],
        data_copy = [];
      data_one.forEach((element) => {
        data_two.push(element.sale);
        data_copy.push(element.sale);
        // 可以写一个然后深拷贝出另一个
      });
      for (let i = 0; i < data_copy.length; i++) {
        for (let j = 0; j < data_copy.length - i; j++) {
          let content = '';
          if (data_copy[j] < data_copy[j + 1]) {
            content = data_copy[j];
            data_copy[j] = data_copy[j + 1];
            data_copy[j + 1] = content;
          }
        }
      }
      let data = [],
        result = '';
      for (let i = 0; i < data_copy.length; i++) {
        result = data_two.indexOf(data_copy[i]);
        if (result == -1) {
          continue;
        } else {
          data.push(data_one[result]);
          data_two[result] = 's';
        }
      }
      this.data_hot = data;
    },
    rank() {
      this.rank_price();
      this.rank_sale();
    },
  },
  created() {
    let data = this.division();
    getSecondaryList(data)
      .then((data) => {
        this.data = data.data;
        this.data_goal = data.data;
        this.rank();
        // console.log(data);
      })
      .catch(() => {
        console.log('请求出错');
      });
  },
  watch: {
    options_content: {
      deep: true,
      handler(newName, oldName) {
        if (newName == '选项1') {
          console.log('渲染原始数据');
          this.data_goal = this.data;
        } else if (newName == '选项2') {
          this.data_goal = this.data_height;
        } else if (newName == '选项3') {
          this.data_goal = this.data_low;
        } else if (newName == '选项4') {
          this.data_goal = this.data_hot;
        }
      },
    },
  },
  components: {
    Title,
    ContentTitle,
    Recommend,
  },
};
</script>

<style>
* {
  text-align: center;
  list-style: none;
  box-sizing: border-box;
}

.secondary {
  width: 83%;
  margin: 0 auto;
}

.data_content_content_item:hover {
  cursor: pointer;
  box-shadow: 0 0 3px 3px #e8e8e8;
}
</style>
