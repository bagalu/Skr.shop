<template>
    <div class="app-container">
        <div class="datalist">
            <div class="databox">
                <div class="left">数据列表</div>

            </div>
        </div>
        <div class="table-container">
            <el-table ref="multipleTable" :data="orderList" tooltip-effect="dark" style="width: 100%">
                <el-table-column prop="id" label="编号" show-overflow-tooltip width="120" align="center">
                </el-table-column>
                <el-table-column prop="code" label="订单编号" width="500" align="center">
                </el-table-column>
                <el-table-column prop="create_time" label="提交时间" width="140" align="center">
                </el-table-column>
                <el-table-column prop="money" label="订单金额" width="120px" align="center">
                </el-table-column>
                <el-table-column prop="payment_type" label="支付方式" width="120px" align="center">
                    <template slot-scope="scope">
                        {{ payment_type[orderList[scope.$index].payment_type - 1] }}
                    </template>
                </el-table-column>
                <el-table-column label="订单状态" width="120px" align="center">
                    <!-- {{orderList[index].status}} -->
                    <template slot-scope="scope">
                        {{ statusname[orderList[scope.$index].status] }}
                    </template>
                </el-table-column>
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                        <el-button size="mini" 
                         
                         @click="handleEdit(scope.row)"
                         >
                         查看订单</el-button>
                        <el-button size="mini"  v-if="orderList[scope.$index].status==1||orderList[scope.$index].status==2">订单跟踪</el-button>
                        <el-button size="mini" type="danger" v-if="orderList[scope.$index].status==3" @click="handleDelete(scope.row)">删除订单
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination layout="prev, pager, next" :total="50" @current-change="changpage">
            </el-pagination>
        </div>
        <div class="details" v-show="boxshow">
            <div class="title">
                <h3>产品信息</h3>
            </div>
            <div class="main">
                <div>
                    <span>销售价格: </span>
                    <span>{{ showprice }}</span>
                </div>
                <div class="inventory">
                    <span>商品库存: </span>
                    <span>{{ inventory }}</span>
                </div>
            </div>

            <div class="bottom">
                <button @click="closebox">关闭</button>
            </div>
        </div>
    </div>
</template>

<script>
import { getOrder, deleteOrder } from '@/api/order'
export default {
    data() {
        return {
            orderList: [],
            boxshow: false,
            showprice: '',
            inventory: '',
            statusname: ['待支付', '待发货', '已发货', '已完成'],
            payment_type: ['支付宝', '微信'],
            pageSize: 1,//点击第几页
        }
    },
    created() {
        this.getorderList()
    },
    methods: {
        // 获取订单
        getorderList() {
            getOrder({
                store_id: 1,
                page: this.pageSize,
                count: 20
            }).then(data => {
                this.orderList = data.data[0]
            })
        },
        // 删除订单
        handleDelete(val) {
            console.log(val.id);
            deleteOrder({ id: val.id }).then(data => {
                console.log(data);
                if (data.code == 200) {
                    this.orderList()
                }
            })
        },
        closebox() {
            console.log(555);
            this.boxshow = false;
        },
        // 添加优惠券

        // 详情
        details(val) {
            this.boxshow = true
            this.showprice = this.orderList[val].price;
        },
        // 更改页
        changpage(val) {
            this.pageSize = val;
            this.getorderList()
        },
        // 查看订单
        handleEdit(val){
            console.log(val);
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
