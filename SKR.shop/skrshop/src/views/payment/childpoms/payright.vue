<template>
    <div class="right">
        <div class="order_total">
            <div class="order">
                <h1>选择支付方式</h1>
                <div class="type">
                    <div class="wechat">
                        <img src="@/assets/images/wecart.jpeg" alt="">
                    </div>
                    <div class="alipay">
                        <img src="@/assets/images/alipy.jpeg" alt="">
                    </div>
                </div>
            </div>
            <ul>
                <li class="title">商品小计</li>
                <li>
                    <span>商品总价</span>
                    <span>¥ {{ pricea }}</span>
                </li>
                <li>
                    <span>优惠</span>
                    <span>¥ {{ cheapa }}</span>
                </li>
                <li>
                    <span>其他</span>
                    <span> ¥ 0</span>
                </li>
                <li class="pay">
                    <div>
                        <div>总计</div>
                        <div class="payPrice">¥ {{ pricea - cheapa }}</div>
                    </div>
                    <div>
                        <button @click="newOrder">
                            <span>提交订单</span>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { addOrder } from '@/api/order'
import { delgoods } from '@/api/shopCar'
import {payOrder} from '@/api/payOrder'
export default {
    name: 'Payright',

    props: ['pricea', 'cheapa'],

    methods: {
        newOrder() {
            // 生成订单号
            let code = new Date().getTime()
            let store_id = 1;//店铺id从本地拿
            let customer_id = sessionStorage.getItem('userId');//用户id
            let money = this.pricea - this.cheapa;
            let skus = [];
            let cardList = JSON.parse(sessionStorage.getItem('cardList'))
            cardList.forEach((item, index) => {
                skus.push({
                    sku_id: item.sku_id,
                    price: item.price,
                    actual_price: item.special_price,
                    num: item.num
                })
            });
            let data = {
                code,
                store_id,
                customer_id,
                money,
                skus: JSON.stringify(skus)
            }
            addOrder(data).then(res => {
                console.log(data);
            })

            // 跳转支付页面
            payOrder({
                outTradeNo:new Date().getTime(),
                totalAmount:money,
                subject:sessionStorage.getItem('username')+"'s shopping order",
                body:sessionStorage.getItem('username')+`is paying for ${sessionStorage.getItem('cardList')[0].title} ...`,

            }).then(data=>{
                if(data.code==200){
                   this.$message.success('jumping to alipay page');
                        setTimeout(() => location.replace(data.data), 1000) 
                }
            })
            // 删除购物车
            cardList.forEach(item => {
                delgoods({ id: item.id + cardList.length }).then(data => {
                    console.log(data);
                })
            })
        }
    }
}

</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

ul,
li {
    list-style: none;
}

.right {
    float: right;

    .order_total {
        width: 25vw;
        margin-top: 82px;
        padding: 0 20px;

        .order {
            width: 100%;
            margin: 50px auto;

            .type {
                display: flex;
                align-items: center;

                .wechat {
                    height: 120px;
                    overflow: hidden;
                    cursor: not-allowed;
                    margin-top: 10px;
                    width: 180px;

                    & img {
                        width: 100%;
                        position: relative;
                        top: -20px;
                    }
                }

                .alipay {
                    border: 2px solid #999999;
                    height: 120px;
                    overflow: hidden;
                    margin-top: 10px;
                    width: 180px;

                    & img {
                        width: 100%;
                        position: relative;
                        top: -20px;
                    }
                }
            }
        }

    }

    & ul {
        width: 100%;
        border: 1px solid #cccccc;

        & li {
            height: 50px;
            line-height: 50px;
            margin: 0 10px;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #ccc;
            font-size: 13px;
        }

        .title {
            font-size: 16px;
            margin: 0;
            padding: 0 10px;
            background-color: #f6f6f6;
        }

        .pay {
            height: 80px;
            border-bottom: none;

            & div {
                .payPrice {
                    line-height: 0;
                    font-size: 18px;
                    font-weight: bolder;
                    margin-top: 10px;
                }
            }

            & div {
                & button {
                    margin-top: 30px;
                    width: 140px;
                    background-color: #ed4025;
                    border-color: #ff4d4f;
                    height: 40px;
                    border-radius: 0;
                    color: #fff;


                }
            }
        }
    }
}
</style>