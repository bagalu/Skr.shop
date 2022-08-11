<template>
    <div class="Topfour">
        <div class="listfour">
            <ul>
                <li v-for="(item, indexs) in imglistAll" :key="indexs" @click="to_details(item)">
                    <span class="icon_best">
                        <strong>{{  4+indexs }}</strong>
                        <p>BEST</p>
                    </span>
                    <img :src="item.img" alt="">
                    <div class="AllText">
                        <div class="text_worp">
                            <div class="brand">vunque</div>
                            <div class="front">[댓글 이벤트] | [04/16 예약배송]</div>
                            <div class="product">Toque tote S (토크 토트 스몰) Light beige</div>
                        </div>
                        <div class="price">
                            <span class="discount_price">285,000</span>
                            <span class="base_price">42,000</span>
                            <span class="discount_rate">10%</span>
                        </div>
                        <p class="reservation">预定</p>
                    </div>
                </li>
            </ul>

        </div>
    </div>
</template>

<script>
import { getImg } from '@/api/getImg'
export default {
    name: 'Topfour',
    data() {
        return {
            imglistAll: [],
            TopfourAll: [],
        }
    },
    props: {
        listTwo: {
            type: String,
            default: '',
        }
    },
    created() {
        if (this.listTwo == 'All') {
            let arr = ['鞋类'];
            arr.forEach(item => {
                this.getimgs(item, 4, 7, 'price')
            })
        } else {
            this.getimgs(this.listTwo, 4, 7)
        }
    },
    methods: {
        async getimgs(parent_name, start, end, sort) {
            const res = await getImg({ parent_name,start,end,sort })
            if (this.listTwo == 'All') {
                this.imglistAll = res;
                console.log( '----------------',this.imglistAll);
                this.TopfourAll = res
            } else {
                this.imglistAll = res
            }
        },
        // 跳转详情预留
        to_details(item){
            console.log(item);
        }
    },
    watch: {
        listTwo() {
            if (this.listTwo == 'All') {
                this.imglistAll = this.TopfourAll
            } else {
                this.getimgs(this.listTwo, 4, 7)
            }
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

*::before,
*::after {
    box-sizing: border-box;
}

.Topfour {
    width: 82%;
    margin: auto;
    background-color: #f2f2f2;

    .listfour {
        padding: 0 0 0 21px;

        & ul {
            display: flex;
            justify-content: space-around;
            margin-right: 21px;

            & li {
                width: calc(100%/4 - 4%);
                position: relative;

                .icon_best {
                    width: 50px;
                    height: 50px;
                    background: #555;
                    position: absolute;
                    top: 0;
                    left: 0;

                    & strong {
                        text-align: center;
                        color: white;
                        display: block;
                        margin-top: 4px;
                        line-height: 50px;
                        font-size: 26px;
                    }
                }

                & img {
                    width: 100%;
                }

                .AllText {
                    width: 100%;
                    height: 186px;

                    .text_worp {
                        height: 91px;

                        .brand {
                            color: #000000;
                            font-size: 13px;
                            margin-bottom: 10px !important;
                            font-family: "yg750";
                            width: auto;
                        }

                        .front {
                            color: #000000;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            line-height: 14px;
                            margin-bottom: 9px;
                            padding-top: 3px;

                        }

                        .product {
                            line-height: 15px;
                            color: #555;
                            overflow: hidden;
                            margin-bottom: 16px;

                        }
                    }

                    .price {
                        position: relative;
                        font-family: "ProximaNova-Regular";
                        line-height: 100%;
                        margin-bottom: 10px;

                        .discount_price {
                            font-size: 16px;
                            color: #000000 !important;
                            margin-right: 8px;
                        }

                        .base_price {
                            font-size: 12px;
                            color: #808080;
                            text-decoration: line-through;
                        }

                        .discount_rate {
                            display: block;
                            position: absolute;
                            top: 0;
                            right: 0;
                            font-size: 16px;
                            color: #ff4000;
                        }
                    }

                    .reservation {
                        border: 1px solid #9b9b9b;
                        font-size: 12px;
                        text-align: center;
                        line-height: 18px;
                        width: 30px;
                        height: 18px;
                        color: #b2b2b2;
                        box-shadow: 1px 1px 2px #9b9b9b;
                    }
                }
            }
        }
    }
}
</style>