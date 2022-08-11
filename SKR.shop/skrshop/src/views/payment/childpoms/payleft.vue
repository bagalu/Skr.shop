<template>
    <div class="left">
        <div>
            <div class="address">
                <h1>结算</h1>
                <div class="shop_address">
                    <div>收货地址</div>
                    <div class="add_site" @click="shows">
                        ✚新增收货地址
                    </div>
                </div>
            </div>
            <div class="content" v-show="recebar">
                <div class="defaultAddress">
                    <div>
                        <span>收货人:</span>{{ name }}
                    </div>
                    <div>
                        <span style="margin-right: 20px;">
                            地址:
                        </span>{{ detailedadd }}
                    </div>
                </div>
                <div class="right">
                    <div class="default_add" v-show="show_def">默认地址</div>
                    <div class="defaultcounted" @click="getAddress">
                        <div class="eitor">编辑</div>
                        <div>/</div>
                        <div class="more">更多</div>
                    </div>
                </div>
            </div>
        </div>
        <addressData @changehidden="changehid" v-show="isShow" @delivery="delivery"></addressData>
        <div class="moreAddress" v-show="shouaddList">
            <div class="title">
                <h2>选择您的收货地址</h2>
                <div class="cancel" @click="closeAddList">
                    ✖
                </div>
            </div>
            <li v-for="(item, index) in addressList" :key="index">
                <div class="checkRa">
                    <input type="radio" name="Addlist" ref="addressList">
                </div>
                <div class="defaultAddress">
                    <div>
                        <span>
                            收货人:
                        </span>{{ item.name + '-' + item.tel }}
                        <span class="d_address" v-show="item.prime">默认地址</span>
                    </div>
                    <div>
                        <span style="margin-right: 20px;">
                            地址
                        </span>{{ item.address }}
                    </div>
                </div>
                <div class="right">
                    <div>编辑</div>
                    <div @click="defaultAddress(index, item.id)" v-show="!(item.prime)">设为默认地址</div>
                </div>
            </li>
            <div class="submit">
                <div class="add" @click="shownewadd">
                    ✚新增收货地址
                </div>
                <button class="sure" @click="changeAddress">
                    <span>确认</span>
                </button>
            </div>
        </div>
        <div class="shop_detail">
            <div class="title">商品明细(共{{ goodsList.length }}件)</div>
            <ul class="goods_list">
                <li v-for="(goods, index) in goodsList" :key="index">
                    <div class="imga">
                        <img :src="goods.img" alt="">
                    </div>
                    <div class="detail">
                        <p>{{ goods.title }}</p>
                        <p>
                            <span>颜色:{{ goods.params[0] }}</span>
                            <span>尺码:{{ goods.params[1] }}</span>
                        </p>
                        <p>数量:{{ goods.num }}</p>
                    </div>
                    <div class="price">
                        <div class="disc_price">¥ {{ goods.special_price }}</div>
                        <div class="ori_price">¥ {{ goods.price }}</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import addressData from '@/components/address/index'
import { getAddress, defaultAddress } from '@/api/shopping_address';
export default {
    name: 'Payleft',
    data() {
        return {
            isShow: false,
            name: '',
            tel: '',
            address: '',
            detailedadd: '',
            recebar: true,// 收货栏
            show_def: false,// 默认地址
            addressList: [],// 收货地址列表
            shouaddList: false,//地址列表
        }
    },
    props: {
        goodsList: {
            type: Array,
            default: '',
        },
    },
    components: {
        addressData,
    },
    methods: {
        shows() {
            this.isShow = true;
        },
        changehid(val) {
            console.log('5464685485');
            this.isShow = val
            console.log(this.isShow);
        },
        delivery(val1, val2) {
            this.name = val1
            this.detailedadd = val2
        },
        // 获取地址列表
        getAddress() {
            this.shouaddList = true
            let data = {
                customer_id: 2
                // customer_id:sessionStorage.getItem('userId')
            }
            getAddress(data).then(data => {
                console.log(data);
                if (data.code == 200) {
                    this.addressList = data.data
                }
            })
        },
        closeAddList() {
            this.shouaddList = false;
        },
        // 设置默认地址
        defaultAddress(indexs, val) {
            // 看点击的那个设置哪个为默认地址
            this.addressList.forEach((item, index) => {
                if (index == indexs) {
                    let data = {
                        id: item.id,
                        prime: 1
                    }
                    defaultAddress(data)
                } else {
                    let data = {
                        id: item.id,
                        prime: 0
                    }
                    defaultAddress(data)
                }
            })
            let data = {
                id: val,
                prime: 1,
            }
            defaultAddress(data).then(data => {
                if (data.code == 200) {
                    this.getAddress()
                }
            })
        },
        // 更改收货地址
        changeAddress() {
            this.closeAddList()
            this.$refs.addressList.forEach((item, index) => {
                if (item.checked) {
                    this.name = this.addressList[index].name + '-' + this.addressList[index].tel
                    this.detailedadd = this.addressList[index].address
                }
            })
        },
        shownewadd() {
            this.shows();
            this.closeAddList()
        }
    },
    created() {
        let data = {
            customer_id: 2
            // customer_id:sessionStorage.getItem('userId')
        }
        getAddress(data).then(data => {
            console.log(data);
            if (data.code == 200) {
                this.addressList = data.data
                this.addressList.forEach(item => {
                    if (item.prime) {
                        this.name = item.name + '-' + item.tel;
                        this.detailedadd = item.address
                        this.show_def = item.prime
                    }
                })
            }
        })
    },
    watch: {
        name() {
            this.recebar = true
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

.left {
    float: left;

    & div {
        .address {
            width: 50vw;
            position: relative;

            & h1 {
                padding: 20px;
            }

            .shop_address {
                color: #ffffff;
                font-size: 16px;
                width: 100%;
                background-color: #4c4c4c;
                display: flex;
                justify-content: space-between;
                padding: 20px;

                .add_site {
                    cursor: pointer;
                }

            }
        }

        .content {
            border: 1px solid #cccccc;
            display: flex;
            justify-content: space-between;

            .defaultAddress {
                padding: 20px 25px;
                width: 85%;
                height: 100px;

                & div {
                    height: 30px;
                    line-height: 30px;

                    & span {
                        color: #999999;
                        margin-left: 10px;
                    }
                }
            }

            .right {
                height: 100%;
                padding-top: 30px;

                .default_add {
                    background-color: #000;
                    color: #fff;
                    font-size: 12px;
                    width: 55px;
                    padding: 2px;
                    border-radius: 2px;
                }

                .defaultcounted {
                    display: flex;
                    font-size: 15px;
                    color: #999999;

                    & div {
                        margin-right: 5px;
                        cursor: pointer;
                    }
                }
            }
        }


    }

    .moreAddress {
        position: fixed;
        width: 700px;
        background-color: #fff;
        box-shadow: 2px 2px 5px #cccccc;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 999;
        padding: 20px;

        .title {
            display: flex;
            justify-content: space-between;
            width: 100%;
            border-bottom: 2px solid #e6e6e6;

            & h2 {
                height: 50px;
            }

            .cancel {
                font-size: 20px;
                cursor: pointer;
            }
        }

        & li {
            border-bottom: 2px solid #e6e6e6;
            display: flex;

            .checkRa {
                line-height: 100px;

                & input {
                    width: 15px;
                    height: 15px;
                }
            }

            .defaultAddress {
                padding: 20px 25px;
                width: 85%;
                height: 100px;

                & div {
                    height: 30px;
                    line-height: 30px;

                    & span {
                        color: #999999;
                        margin-left: 10px;
                    }

                    .d_address {
                        background-color: #000;
                        color: #fff;
                        font-size: 12px;
                        width: 55px;
                        padding: 2px;
                        border-radius: 2px;
                    }
                }
            }

            .right {
                height: 100%;
                padding-top: 30px;
                font-size: 14px;
                color: rgba(0, 0, 0, .65);
            }
        }

        .submit {
            height: 50px;
            width: 100%;
            line-height: 50px;
            text-align: end;
            margin-top: 10px;
            display: flex;
            justify-content: space-between;

            .sure {
                background-color: #4c4c4c;
                color: #fff;
                padding: 0 25px;
                height: 40px;
                line-height: 38px;
                border: 1px solid #979797;
                border-radius: 0;
                margin: 10px 10px;
            }
        }
    }

    .address_city {
        position: fixed;

        width: 700px;
        height: 400px;
        padding: 20px;
        background-color: red;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 999;
    }

    .shop_detail {
        width: 100%;
        font-size: 15px;

        .title {
            margin-top: 4px;
            padding-left: 20px;
            height: 50px;
            font-size: 16px;
            line-height: 50px;
            background-color: #4c4c4c;
            color: #fff;

        }

        .goods_list {
            width: 100%;
            padding: 20px;
            border: 1px solid #cccccc;

            & li {
                height: 120px;
                display: flex;

                .imga {
                    width: 100px;
                    height: 100px;
                    margin: 5px 10px;

                    & img {
                        width: 100px;
                        height: 100px;
                        margin: 5px 10px;
                    }
                }

                .detail {
                    width: 60%;
                    padding: 15px 10px;

                    & P {
                        margin-top: 5px;
                        color: #999999;
                    }
                }

                .price {
                    padding: 5px;
                    width: 20%;
                    padding: 30px 10px;
                    text-align: end;

                    .disc_price {
                        font-size: 16px;
                        font-weight: bolder;
                    }

                    .ori_price {
                        font-size: 14px;
                        color: #4c4c4c;
                        text-decoration: line-through #999999;
                    }
                }
            }
        }
    }

}
</style>