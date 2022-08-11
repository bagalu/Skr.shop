<template>
    <div class="topOne">
        <div class="listOne">
            <ul>
                <li v-for="(item,index) in imgOneList" :key="index" @click="to_details(item)">
                    <span class="icon_best">
                        <strong>{{++index}}</strong>
                        <p>BEST</p>
                    </span>
                    <img :src="item.img" alt="">
                    <div class="AllText">
                        <div class="text_worp">
                            <div class="brand">LOEUVRE</div>
                            <div class="front"> [펜트하우스 이지아,강민경,효민,류이서,보라끌레르
                                착용] | [04/16 예약배송]</div>
                            <div class="product">Sac de Trompette Small FA0SB013-10</div>
                        </div>
                        <div class="price">
                            <span class="discount_price">37,800</span>
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
import { getImg } from "../../../../api/getImg";
export default {
    name: "TopOne",
    data() {
        return {
            imgOneList: [],
            oneListAll:[],
        }
    },
    props: {
        listOne: {
            type: String,
            default: '',
        }
    },
    methods:{
        async getImg_(parent_name,start,end,sort){
            let res= await getImg({parent_name,start,end,sort});
            if(this.listOne=="All"){
                this.imgOneList=res;
                console.log('------------------------123',this.imgOneList,res);
               this.oneListAll=res;
            }else{
                this.imgOneList=res
            }
        },
        // 跳转详情预留
        to_details(item){
            console.log(item);
        }
    },
    created() {
        if (this.listOne == 'All') {
            let arr=['服饰',];
            arr.forEach(item=>{
                this.getImg_(item,1,3,'price')
            })
        }else{
            this.getImg_(this.listOne,1,3)
        }
    },
    watch:{
        listOne(){
            if(this.listOne=='All'){
                this.imgOneList=this.oneListAll
            }else{
                this.getImg_(this.listOne,1,3)
                console.log('-------------1223');
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

body {
    margin: 0;
    color: rgba($color: #000000, $alpha: 0.65);
    font-size: 14px;
}

.topOne {
    width: 82%;
    margin: 0 auto;
    background-color: #f2f2f2;

    .listOne {
        padding: 4% 20px 0 20px;

        & ul {
            width: 100%;
            display: flex;
            padding-bottom: 50px;
            flex-wrap: wrap;
            justify-content: space-around;

            & li {
                width: calc(100% / 3 - 4%);
                position: relative;

                .icon_best {
                    width: 70px;
                    height: 79px;
                    background-image: url('http://static.wconcept.co.kr/web/images/common/bg_best.png');
                    position: absolute;
                    top: 0;
                    left: 0;

                    & strong {
                        text-align: center;
                        color: white;
                        display: block;
                        height: 36px;
                        margin-top: 4px;
                        font-size: 34px;
                        font-family: "ProximaNova-Semibold";
                    }

                    & p {
                        font-size: 14px;
                        color: white;
                        text-align: center;
                        font-family: "ProximaNova-Semibold";
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