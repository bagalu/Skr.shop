<template>
    <div class="excusive">
        <div class="title">
            <h1>excusive</h1>
        </div>
        <div style="width: 1870px; margin: 0 auto; overflow: hidden" class="box1">
            <div class="swiper" style="float: left">
                <el-carousel indicator-position="outside">
                    <el-carousel-item v-for="(item, index) in picList" :key="index">
                        <img class="ssss" :src="item.img" alt="" />
                    </el-carousel-item>
                </el-carousel>
            </div>

            <div class="right">
                <el-row class="right1" style="cursor: pointer">
                    <el-col :span="4" v-for="(item, index) in littlepic" :key="index" :offset="0">
                        <el-card :body-style="{ padding: '0px' }" shadow="hover"
                            style="margin-left: 30px; margin-bottom: 10px">
                            <img :src="item.img" class="image" />
                            <div style="padding: 12px">
                                <p class="down" :key="index">{{ item.title }}</p>
                                <div class="bottom clearfix">
                                    <p class="site">www.stride.fun</p>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </div>
            <div class="little">
                <p class="title-middle">WANT.NEED</p>
                <button class="btn">+ALL(10943)</button>
            </div>

            <div class="want-item">
                <div class="block" v-for="(item, index) in fits" :key="index">
                    <el-image style="width: 225px; height: 240px; padding: 8px" :src="item.img"></el-image>
                    <div class="top">
                        <div class="det-tit">{{ item.title }}</div>
                        <div class="det-scr">www.stride.fun</div>
                    </div>
                    <div class="down1">
                        <p class="price">
                            <span class="discount-after">{{ item.special_price }} &nbsp; &nbsp; </span>
                            <span class="discount" style="text-decoration: line-through;color: rgba(0, 0, 0, 0.45);
                          "> {{ item.price }} </span>
                           <span class="percent" style="color:red">&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;{{Math.round(item.special_price*100/item.price)}}%</span>
                        </p>
                       
                    </div>
                </div>
            </div>
            <div class="talk">
                TALKING
            </div>
            <div class="third">
                <el-row style="cursor: pointer">
                    <el-col :span="6" v-for="(item, index) in picList" :key="index" :offset="2">
                        <el-card :body-style="{ padding: '0px' }">
                            <img :src="item.img" class="image1" />
                            <div style="padding: 12px">
                                <p class="down">{{item.title}}</p>
                                <div class="bottom clearfix">
                                    <p class="site">www.stride.fun</p>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </div>

            <div class="tittle2">
                <P>EDITION</P>
            </div>
            <div class="edition">
                <el-row>
                    <el-col :span="8" v-for="(item, index) in threelist" :key="item" :offset="index > 0 ? 5 : 0">
                        <el-card :body-style="{ padding: '0px' }">
                            <img :src="item.img" style="height: 100%; width: 100%" />
                            <div style="padding: 1px">
                                <span v-for="word in text" :key="word"></span>
                                <div class="bottom clearfix"></div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </div>
            <div class="tittle-last">
                <p class="need">WANT.NEED</p>
            </div>

            <div class="four-pic">
                <el-row class="four" style="cursor: pointer">
                    <el-col :span="3" v-for="(item, index) in fourpic" :key="index" :offset="2">
                        <el-card :body-style="{ padding: '0px' }">
                            <img :src="item.img" class="image" />
                            <div class="detail">
                                <div class="datail-title">{{item.title}}</div>
                                <div class="detail-decription">www.stride.fun</div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </div>

        </div>
    </div>
</template>

<script>
import {
    getPic,
    getlittlePic,
    getmidPic,
    getthreePic,
    getfourPic,
} from "../../api/exclusive.js";

export default {
    name: "excusive",
    data() {
        return {
            picList: [],
            littlepic: [],
            fits: [],
            threelist: [],
            text: [
                "安踏男服史努比联名短袖短T恤2021新款短t",
                "安踏女服史努比联名短袖短T恤2021新款短t",
                "安踏女裤史努比联名针织短裤2021新款",
            ],
            fourpic: [],
        };
    },
    methods: {
        getPic() {
            let data1 = {
                end: 9,
                parent_name: "服饰",
                start: 6,
            };
            getPic(data1).then((res) => {
                this.picList = res;
                // console.log(res);
            });
        },
        getlittlePic() {
            let data2 = {
                end: 15,
                parent_name: "服饰",
                start: 10,
            };
            getlittlePic(data2).then((data) => {
                this.littlepic = data;
                // console.log(data);
            });
        },
        getmidPic() {
            let data3 = {
                parent_name: "服饰"
            };
            getmidPic(data3).then((res1) => {

                this.fits = res1.res.slice(200, 208); //把想要获取的数据获取成功后,放进这个数组里边
                console.log(res1.res.slice(200, 208));
            });
        },
        getthreePic() {
            let data4 = {
                end: 18,
                parent_name: "服饰",
                start: 16,
            };
            getthreePic(data4).then((res2) => {
                this.threelist = res2;
                // console.log(res2);
            });
        },
        getfourPic() {
            let data5 = {
                end: 26,
                parent_name: "服饰",
                start: 19,
            };
            getfourPic(data5).then((res3) => {
                this.fourpic = res3;
                console.log(res3);
            });
        },
    },

    created() {
        this.getPic();
        this.getlittlePic();
        this.getmidPic();
        this.getthreePic();
        this.getfourPic();
    },
};
</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.det-tit {
    overflow: hidden;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    font-size: 16px;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 225px;
}

.excusive {
    overflow: hidden;
}

.swiper {
    width: 1083px;
}

.el-carousel {
    width: 1083px;
    height: 1083px;
}

.title {
    color: #333;
    font-family: "ProximaNova-Thin";
    font-size: 48px;
    text-transform: uppercase;
    text-align: center;
    margin: 60px 0 20px 0;
    font-weight: 10;
    line-height: 1.5;
}

.need {
    color: #333;
    font-family: "ProximaNova-Thin";
    font-size: 48px;
    text-transform: uppercase;
    text-align: center;
    margin: 60px 0 20px 0;
    font-weight: 100;
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    width: 1083px;
    height: 1083px;
}

.el-carousel__item:nth-child(2n + 1) {
    width: 1083px;
    height: 1083px;
}

.ssss {
    width: 100%;
    height: 100%;
}

.time {
    font-size: 13px;
    color: #999;
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
}

.right img {
    margin-right: 50px;
}

.image {
    width: 100%;
    display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both;
}

.down {
    overflow: hidden;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 547;
    font-size: 20px;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
    cursor: pointer;
}

.site {
    text-align: center;
    cursor: pointer;
}

.title-middle {
    color: #333;
    font-family: "ProximaNova-Thin";
    font-size: 48px;
    text-transform: uppercase;
    text-align: center;
    margin: 60px 0 20px 0;
    font-weight: 100;
}

button::after {
    border: none;
}

.btn {
    padding: 0 20px 0 18px;
    margin-left: 50%;
    background-color: white;
    left: 50%;
    transform: translate(-50%, 0);
    color: #aaa7a7;
    outline: 0;
    width: 140px;
    height: 40px;
    cursor: pointer;
    display: block;
    outline: none;
}

.block {
    float: left;
}

.want-item {
    overflow: hidden;
    padding-left: 35px;
    overflow: hidden;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    font-size: 16px;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.tittle2 {
    color: #333;
    font-family: "ProximaNova-Thin";
    font-size: 48px;
    text-transform: uppercase;
    text-align: center;
    margin: 60px 0 20px 0;
    font-weight: 100;
}

.image1 {
    width: 100%;
    height: 100%;
}
.talk{
        color: #333;
    font-family: "ProximaNova-Thin";
    font-size: 48px;
    text-transform: uppercase;
    text-align: center;
    margin: 60px 0 20px 0;
    font-weight: 100;

}
.detail{
    overflow: hidden;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    font-size: 16px;
    white-space: nowrap;
    text-overflow: ellipsis;
}

</style>