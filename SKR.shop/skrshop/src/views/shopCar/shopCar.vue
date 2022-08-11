<template>
    <div class="shopcar">
        <div class="shopcard">

            <h3 class="shopcarTitle"> shopCart<span>我的购物车</span><i>共{{ shopcarList.length }}件</i></h3>
            <div class="checkBox">
                <label class="checkbox-lable">
                    <input type="checkbox" name="" id="" class="checkbox-input" v-model="isAll" @change="chooseAll">
                    <span>全选</span>
                </label>
            </div>
            <ul>
                <li v-for="(shop, item) in shopcarList " :key="item">
                    <div class="check_item">
                        <input type="checkbox" class="checkbox-input" :checked="isAll" :value="shop" v-model="cardList">
                    </div>
                    <div class="item_img">
                        <img :src="shop.img" alt="">
                    </div>
                    <div class="infos">
                        <div class="info_top ">
                            <div class="fl">
                                <h5 class="info_name">
                                    {{ shop.title }}
                                </h5>
                                <p>
                                    <span>
                                        颜色:{{ shop.params[0] }};尺码:{{ shop.params[1] }}
                                    </span>
                                </p>
                            </div>
                            <div class="fr">
                                <div class="info_price">¥ &nbsp;{{ shop.special_price }}</div>
                                <div class="under_info_price">¥ &nbsp;{{ shop.price }}</div>
                            </div>
                        </div>
                        <div class="info_bom">
                            <p class="fl">
                                <span>数量</span>
                                <a href="javascript:;" class="num_minus" @click="rednum(shop, item)">-</a>
                                <input type="text" disabled="disabled" v-model="shopcarList[item].num">
                                <a href="javascript:;" class="num_plus" @click="addnum(shop, item)">+</a>
                            </p>
                            <p class="fr">
                                <a href="javascript:;" class="delet_one" @click="delShop(shop, item)">删除</a>
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="settlement">
            <div class="sellementBox">
                <div class="set_left">
                    <div class="left">
                        <div class="fl"></div>
                        <div class="fr">
                            <span>总价</span>
                            <span class="total_price">¥&nbsp;{{ totalPrice }}</span>
                        </div>
                    </div>
                </div>
                <div class="set_right">
                    <el-button :plain="true" @click="settlement" class="settlement">结算</el-button>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { getShopCar, delgoods, addshopCard } from '../../api/shopCar.js'
export default {
    name: "shopCar",
    data() {
        return {
            shopcarList: [],// 购物车列表
            totalPrice: 0,// 总价
            isAll: false,//是否全选
            cardList: [],//将选中的加入
            flag: true,
        }
    },
    created() {
        this.getShopCar();
    },
    methods: {
        getShopCar() {
            let customer_id = localStorage.getItem('userId');
            let username = localStorage.getItem('username');
            let data = {
                customer_id,
                username,
            }
            getShopCar(data).then(data => {
                if (data.code == 200&&localStorage.getItem('userId')) {
                    let b = data.data.map(item => {
                        item.params = JSON.parse(item.params)
                        return item
                    })
                    this.shopcarList = b;
                } else {
                }
            })
        },
        /**
         * 点击支付更改购物车
         * 点击加减不再发送请求
         */
        settlement() {
            /**
             * 将更改后的数据上传
             *  删除购物车原有数据
             *  在购物车新增数据
             */

            let ids = [];
            // 获取购物车所有商品id
            this.shopcarList.forEach(item => {
                ids.push(
                    {
                        id: item.id,
                        num: item.num
                    })
            })

            // 删除所有数据
            ids.forEach(item => {
                let data = {
                    id: item.id
                }
                console.log('删除数据', data);
                delgoods(data)

            })
            this.shopcarList.forEach(item => {
                addshopCard({
                    customer_id: item.customer_id,
                    sku_id: item.sku_id,
                    num: item.num,
                    params: item.params,
                })
            })
            /**
             * 获取总价格
             */
            let cardList = this.cardList;
            // 将选择的商品列表保存本地,同时从购物车中删除要结算物品
            if (cardList.length == 0) {
                this.$message('你还未选择结算商品，请选择');
            } else {
                // this.cardList.forEach(item => {
                //     delgoods({ id: item.id + (this.shopcarList.length) }).then(data => {
                //         console.log('购物车删除所选商品', data);
                //     })
                // })
                sessionStorage.setItem('cardList', JSON.stringify(cardList));
                this.$router.push('/payment')
            }
        },
        delShop(shop, num) {
            let id = shop.id;
            let data = {
                id,
            }
            delgoods(data).then(data => {
                this.getShopCar();
            })
        },
        addnum(shop, item) {
            this.shopcarList[item].num++



        },
        rednum(shop, item) {
            if (shop.num == 1) {
                return
            }
            this.shopcarList[item].num--
        },
        chooseAll() {
            if (this.isAll) {
                this.cardList = this.shopcarList
            } else {
                this.cardList = []
            }
        }
    },
    watch: {
        cardList: {
            deep: true,
            handler(val) {
                let Toprice = 0;
                val.forEach((shop) => {
                    Toprice += shop.num * shop.special_price
                });
                this.totalPrice = Toprice;
                if (this.shopcarList.length == val.length) {
                    this.isAll = true
                } else {
                    this.isAll = false
                }
            }
        }
    }
}

</script>

<style lang="scss" scoped>
// 统一样式
/* 编写统一样式*/
* {
    margin: 0;
    padding: 0;
}

html,
body {
    min-width: 100%;
    min-height: 1px;
    font-size: 14px;
    color: rgba($color: #000000, $alpha: 0.65);
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin-top: 0;
    margin-bottom: 0.5em;
    color: rgba($color: #000000, $alpha: 0.85);
    font-weight: 500;
}

div {
    display: block;
}

.fl {
    float: left;
}

.fr {
    float: right;
}

ol,
ul,
dl {
    margin-top: 0;
    margin-bottom: 1em;
}

li {
    list-style: none;
    box-sizing: border-box;
}

a {
    color: #1090ff;
    text-decoration: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    transition: color 0.3s;
}

.clearfot::after {
    content: "";
    display: block;
    clear: both;
}

*,
*::after,
*::before {
    box-sizing: border-box;
}

.shopcard {

    margin: 30px auto;
    width: 1200px;
    margin-bottom: 50px;

    & h3 {
        position: relative;
        height: 50px;
        line-height: 50px;
        overflow: hidden;

        & span {
            font-size: 28px;
            font-weight: 600;
            vertical-align: middle;
            overflow: hidden;
        }

        & i {
            font-size: 12px;
            color: #999;
            font-style: normal;
            margin-left: 10px;
            display: inline-block;
            line-height: 35px;
            vertical-align: bottom;
            font-weight: 400;
        }

        & ::after {
            content: '';
            position: absolute;
            top: 0;
            display: block;
            width: 55px;
            height: 4px;
            background-color: #000;
        }
    }

    & ul {
        max-width: 1200px;
        margin: 30px auto;
        overflow: hidden;

        & li {
            width: 100%;
            height: 140px;
            border-bottom: 1px solid #c3c3c3;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding: 20px 0;

            .check_item {
                width: 40px;

                & label {
                    & input {
                        width: 0px;
                        height: 0px;
                        margin: 0;
                        padding: 0;
                        border: none;

                    }

                    & i {
                        display: inline-block;
                        width: 15px;
                        height: 15px;
                        background-color: #fff;
                        border: 1px solid #111;
                        margin-right: 8px;
                        position: relative;
                        top: 3px;
                        cursor: pointer;

                    }

                    & ::after {
                        opacity: 1;
                        content: '';
                        position: absolute;
                        width: 9px;
                        height: 5px;
                        background: transparent;
                        top: 3px;
                        left: 2px;
                        border: 2px solid #000;
                        border-top: none;
                        border-right: none;
                        transform: rotate(-45deg);
                    }
                }



            }

            .item_img {
                margin: 0 25px;

                & img {
                    width: 100px;
                    height: 100px;
                }
            }

            .infos {
                flex: 1;
                margin: 20px 0;
                overflow: hidden;

                .info_top {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;

                    .fl {
                        .info_name {
                            font-size: 18px;
                            margin: 0;
                        }

                        & p {
                            height: 22px;
                        }
                    }

                    .fr {
                        float: right;

                        .info_price {
                            font-size: 16px;
                            color: #000;
                            font-weight: 500;
                        }

                        .under_info_price {
                            text-decoration-line: line-through;
                            color: #777;
                            text-align: right;
                        }
                    }
                }

                .info_bom {
                    .fl {
                        float: left;
                        display: flex;
                        justify-content: flex-start;

                        & span {
                            margin-right: 20px;
                        }

                        .num_minus {
                            margin-right: 3px;
                            display: inline-block;
                            width: 30px;
                            height: 26px;
                            box-sizing: border-box;
                            border: 1px solid #CCC;
                            text-align: center;
                            color: #000;
                        }

                        & input {
                            outline: none;
                            border: 1px solid #ccc;
                            width: 78px;
                            height: 26px;
                            font-size: 12px;
                            text-align: center;
                            padding: 0;
                            margin: 0;
                        }

                        .num_plus {
                            margin-left: 3px;
                            display: inline-block;
                            width: 30px;
                            height: 26px;
                            box-sizing: border-box;
                            border: 1px solid #ccc;
                            text-align: center;
                            color: #000;
                        }
                    }

                    .fr {
                        float: right;

                        .delet_one {
                            color: #000;
                        }
                    }
                }
            }
        }
    }

}

.settlement {
    width: 100%;
    background-color: #3e3e3e;
    height: 70px;

    .sellementBox {
        max-width: 1200px;
        margin: 30px auto;
        overflow: hidden;

        .set_left {
            float: left;
            width: 1000px;
            height: 40px;
            border-right: 1px solid #999;
            margin-top: 15px;
            color: #fff;
            margin-right: 20px;

            .fr {
                float: right;
                line-height: 40px;
                margin-right: 25px;
                font-size: 15px;

                & span {
                    display: block;
                    line-height: 14px;
                    font-size: 12px;
                }

                .total_price {
                    line-height: 30px;
                    font-size: 18px;
                }
            }
        }

        .set_right {
            float: left;
            width: 150px;
            height: 40px;
            margin-top: 15px;

            .settlement {
                display: inline-block;
                width: 150px;
                height: 40px;
                text-align: center;
                line-height: 40px;
                background-color: #ed4025;
                color: #fff;
            }
        }
    }
}
</style>