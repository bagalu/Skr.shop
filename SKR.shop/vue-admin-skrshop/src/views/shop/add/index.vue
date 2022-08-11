<template>
  <div class="app-container">
    <div class="addbox">
      <el-form ref="form" label-width="80px" size="mini">
        <el-form-item label="产品分类:">
          <el-cascader :options="options" :show-all-levels="false" v-model="dataCate" @change="handleChange">
          </el-cascader>
        </el-form-item>
        <el-form-item label="产品名称:">
          <el-input v-model="productname" @blur="changename"></el-input>
        </el-form-item>
        <el-form-item label="产品介绍:">
          <el-input type="textarea" @blur="abstract" v-model="goodsabstract"></el-input>
        </el-form-item>
        <el-form-item label="产品售价:">
          <el-input v-model="price" @blur="changeprice"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary">下一步,填写</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'addData',
  data() {
    return ({
      dataCate: '',//产品分类
      productname: "",//产品名称
      price: '',//产品价格
      goodsabstract: '',//产品介绍
      options: [{
        value: 'shuma',
        label: '数码家电'
      },
      {
        value: 'jujia',
        label: '居家生活'
      },
      {
        value: '服饰',
        label: '服饰',
        children: [{
          value: '休闲上衣',
          label: '休闲上衣',
        },
        {
          value: '短袖针织衫',
          label: '短袖针织衫',
        },
        {
          value: '中袖针织衫',
          label: '中袖针织衫',
        },
        {
          value: '梭织休闲长裤',
          label: '梭织休闲长裤',
        },
        {
          value: '梭织运动长裤',
          label: '梭织运动长裤',
        },
        {
          value: '运动BRA',
          label: '运动BRA',
        },
        {
          value: '针织短裤',
          label: '针织短裤',
        },
        {
          value: '针织运动上衣',
          label: '针织运动上衣',
        }, {
          value: '单风衣',
          label: '单风衣',
        },
        ]
      },
      {
        value: 'meishi',
        label: '美食'
      },
      {
        value: 'gehu',
        label: '个护清洁'
      },
      {
        value: 'shoushi',
        label: '首饰珠宝'
      },]
    })
  },
  methods: {
    // 选择类型
    handleChange() {
      console.log(this.dataCate[1]);
    },
    // 更改价格
    changeprice() {
      console.log(this.price);
    },
    // 更改产品介绍
    abstract() {
      console.log(this.goodsabstract);
    },
    // 改变产品名称
    changename() {
      console.log(this.productname);
    }
  },
}
</script>
