<template>
  <div class="app-container">
    <div class="seachbox">
      <div>
        <span>筛选搜索</span>
      </div>
      <div style="margin-top:15px" class="buttom">
        <div class="left">
          <span style="font-size:18px">输入搜索: </span>
          <span>
            <input type="text" v-model="searchval" placeholder="请输入搜索内容">
          </span>
        </div>
        <div class="right">
          <el-button @click="reset">重置</el-button>
          <el-button type="primary" @click="search">查询结果</el-button>
        </div>
      </div>
    </div>
    <div class="datalist">
      <div class="databox">
        <div class="left">数据列表</div>
        <div class="right">
          <el-button type="primary" @click="addData">添加</el-button>
        </div>
      </div>
    </div>
    <div class="table-container">
      <el-table ref="multipleTable" type="index" :data="goodslist" tooltip-effect="dark" style="width: 100%" >
        <el-table-column type="selection" width="55" align="center">
        </el-table-column>
        <el-table-column prop="id" label="编号" show-overflow-tooltip width="120" align="center">
        </el-table-column>
        <el-table-column prop="img" label="图片" width="120" align="center">
          <template v-slot="scope">
            <img :src="scope.row.img" alt="" width="80" height="80">
          </template>
        </el-table-column>
        <el-table-column prop="title" label="商品名称" width="500" align="center">
        </el-table-column>
        <el-table-column prop="price" label="价格" width="120" align="center">
        </el-table-column>
        <el-table-column  label="SKU库存" width="120px" align="center">
          <template slot-scope="scope">
            <el-button size="mini" @click="details(scope.$index)">
              <div class="read">
                ✍
              </div>
            </el-button>
          </template>

        </el-table-column>
        <el-table-column label="销量" width="120px" align="center">
          <span>1200</span>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" @click="addpreferential">添加优惠券</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="details" v-show="boxshow">
      <div class="title">
        <h3>产品信息</h3>
      </div>
      <div class="main">
        <div>
          <span>销售价格: </span>
          <span>{{showprice}}</span>
        </div>
        <div class="inventory">
          <span>商品库存: </span>
          <span>{{inventory}}</span>
        </div>
      </div>

      <div class="bottom">
        <button @click="closebox">关闭</button>
      </div>
    </div>
  </div>
</template>

<script>
import { getShopList, deleteSpu } from '@/api/goodslist'
import { search } from '@/api/search'
export default {
  data() {
    return {
      goodslist: [],
      searchval: '',//搜索内容
      boxshow: false,
      showprice:'',
      inventory:'',

    }
  },
  created() {
    this.getShopList()
  },
  methods: {
    getShopList() {
      getShopList({
        store_id: 1
      }).then(data => {
        this.goodslist = data.data
      })
    },
    search() {
      if (this.searchval) {
        search({
          keyword: this.searchval
        }).then(data => {
          if (data.code == 200) {
            this.goodslist = data.data           
          }
        })
      }
    },
    reset() {
      this.searchval = ''
    },
    handleDelete(val) {
      console.log(val.id);
      deleteSpu({ id: val.id }).then(data => {
        console.log(data);
        if (data.code == 200) {
          this.getShopList()
        }
      })
    },
    addData() {
      console.log(222);
    },
    closebox() {
      console.log(555);
      this.boxshow = false;
    },
    // 添加优惠券
    addpreferential() {

    },
    // 详情
    details(val) {
      this.boxshow = true
     
      this.showprice=this.goodslist[val].price;


    }
  }
}
</script>

<style lang="scss" scoped>
* {

  box-sizing: border-box;
}

.read {
  width: 40px;
  height: 40px;
  padding: 5px;
  background-color: #409eff;
  margin: 0 auto;
  border-radius: 50%;
  cursor: pointer;
}

.datalist {
  margin-top: 30px;
  padding: 15px;
  border: 1px solid #634a4a97;

  .databox {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .left {
      line-height: 40px;
    }
  }
}

.seachbox {
  width: 100%;
  border: 1px solid #634a4a97;
  padding: 15px;

  & div {
    & span {
      & input {
        outline: none;
        border-radius: 5px;
      }
    }

  }

  .buttom {
    display: flex;
    justify-content: space-between;
  }
}

.table-container {
  width: 100%;
  display: flex;
  margin-top: 30px;
}

.details {
  width: 768px;
  border: 1px solid #e3e3e3;
  padding: 15px;
  background-color: #409eff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;

  .main {
    & div {
      padding: 15px;
      margin-top: 15px;
      border: 1px solid #e3e3e3;
    }
  }

  .bottom {
    margin-top: 15px;

    & button {
      margin-right: 0;
    }
  }
}
</style>>
