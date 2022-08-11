<template>
    <div class="event" style="width: 100%;">
        <h1 class="title">
            EVENT
        </h1>
        <div class="swip_capacity" style="width: 83%; margin: 0 auto;">
            <div class="capacity">
                <template>
                    <el-carousel indicator-position="nono" :autoplay="false">
                        <el-carousel-item v-for="item in background_img" :key="item">
                            <div class="swip_capacity_action" style="font-size: 0;width: 100%;">
                                <img :src="item" alt="" style="width: 100%;height: 100%;">
                                <div class="bottom_detail" style="
                                position: relative;
                                top: -194px;
                                left: 61%;
                                width: 450px;
                                height: 205px;
                                background-color: #fff;
                                z-index: 1;
                                display: flex;
                                justify-content: space-between;
                                box-sizing: border-box;
                                padding: 8px;
                                ">
                                    <img v-for="key in background_img_detail" style="width: 139px;height: 185px;"
                                        :key="key" :src="key" alt="">
                                </div>
                                <div class="bottom_title" style="width: 100%;
                                height: 150px;
                                background-color: #ffffffa6;
                                position: relative;
                                top: -355px;
                                ">
                                    <p class="swip_capacity_action_title_detail"
                                        style="font-size: 14px;color: #666;padding-top: 25px;padding-bottom: 5px;margin: 0 0 3px 150px;">10%세일
                                    </p>
                                    <p class="swip_capacity_action_title_detail"
                                        style="font-size: 40px;color: #000;padding-bottom: 5px;margin: 0 0 0 150px;">
                                        JSNY</p>
                                    <p class="swip_capacity_action_title_detail" style="font-size: 22px;color: #666;margin: 4px 0 0 150px;">21SUMMER</p>
                                </div>
                            </div>
                        </el-carousel-item>
                    </el-carousel>
                </template>
            </div>
        </div>
        <div class="middle" style="width: 83%;">
            <div class="middle_left" style="width: 48%;">
                <div class="middle_left_top">
                    <p style="text-align: left;border-bottom: 2px solid #000;font-size: 26px;">MY❤BRAND EVENT</p>
                </div>
                <div class="middle_left_bottom" style="padding: 30px 0;">
                    <p style="font-size: 14px;"> 로그인 하시면 MY❤에 등록한 BRAND의 최근 EVENT를 확인할 수 있습니다. </p>
                    <a style="display: inline-block; width: 140px;height: 40px;background-color: #000;text-align: center;line-height: 40px;color: #fff;text-decoration: none;margin: 18px 0;"
                        href="http://localhost:8080/login#/home">로그인</a>
                </div>
            </div>
            <div class="middle_right" style="width: 48%;">
                <div class="middle_right_top">
                    <p style="text-align: left;font-size: 26px;font-weight: 500; padding-left: 30px;">BENEFIT</p>
                </div>
                <div class="middle_right_bottom">
                    <ul style="display: flex; justify-content: space-between;">
                        <li v-for="(item, index) in benefit" :key="item" style="width: 25%;">
                            <a v-if="index <= benefit.length - 2" href="#"
                                style="display: inline-block;border-right: 1px dotted #000;width: 100%;list-style:none">
                                <img :src="item" alt="">
                            </a>
                            <a v-else href="#" style="display: inline-block;width: 25%;list-style:none">
                                <img :src="item" alt="">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="hotkeyword" style="width: 83%;margin: 0 auto; ">
            <ul class="hotkeyword_content" style="width: 100%;height: 161px;background-color:#e7e7e7;display: flex; ">
                <li class="hotkeyword_content_first" style="flex: 1;">hot keyword</li>
                <li
                    style="width: 933px;height: 100%;padding: 10px 15px;overflow: hidden;text-align: left;box-sizing: border-box;flex: 3;">
                    <span class="hotkeyword_content_item">21SS도함께할 베스트 아이템! #The Best, Forever</span>
                </li>
                <li style="display: flex; width: 266px;height: 40px;margin: 50px 0;text-align: center;flex: 1;">
                    <input
                        style="width: 100%;box-sizing: border-box;padding-left:10px;border: none;border-bottom: 1px #000 solid;background-color: #e7e7e7;outline-style: none;text-align: left;line-height: inherit;color: inherit;"
                        type="text" placeholder="제목 또는 내용, 브랜드명 입력">
                    <button
                        style="background-color: transparent;border: none;transform: scale(2.3);box-sizing: border-box;padding:5px 10px 0 5px;">
                        <i data-v-91f03308="" aria-label="icon: search" class="search_ anticon anticon-search"><svg
                                viewBox="64 64 896 896" data-icon="search" width="1em" height="1em" fill="currentColor"
                                aria-hidden="true" focusable="false" class="">
                                <path
                                    d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z">
                                </path>
                            </svg></i>
                    </button>
                </li>
            </ul>
        </div>
        <div class="content" style="width: 83%; margin: 0 auto;">
            <div class="type_title" style="width: 100%;">
                <ul style="display: flex;list-style: none;width: 100%;margin: 0 auto;display: flex;">
                    <li v-for="(item, index) in type" :key="item"
                        :class="{ type_title_item_static: true, type_title_item_dynamic: index == focus }"
                        @click="titleHandle(index)">
                        <!-- 传入当前序号 -->
                        {{ item }}
                    </li>
                </ul>
                <ul style="width: 100%;height: 32px;display: flex;margin: 24px auto;">
                    <li v-for="(item, index) in type_title_second" :key="item">
                        <a v-if="index <= type_title_second.length - 2" href="#"
                            style="padding: 6px 20px;box-sizing: border-box;color: #666;font-size: 16px;text-decoration: none;border-right: 1px #666 solid;">{{
                                    item
                            }}</a>
                        <a v-else href="#"
                            style="padding: 6px 20px;box-sizing: border-box;color: #666;font-size: 16px;text-decoration: none;">{{
                                    item
                            }}</a>
                    </li>
                </ul>
            </div>
            <div class="type_content" style="width: 100%;margin: 0 auto;">
                <div class="type_content_main" style="width: 100%;margin: 0 auto;">
                    <ul style="width: 100%; display: flex;justify-content: space-between;flex-flow: wrap;">
                        <li v-for="(item, index) in titleContent " :key="index" style="width: 18%;margin-bottom: 10px;">
                            <a href="#">
                                <img style=" display: inline-block;text-align: center; width: 100%;" :src="item.img"
                                    alt="">
                                <span
                                    style=" display: inline-block;text-align: center; width: 100%;overflow: hidden;white-space:nowrap;text-overflow: ellipsis;color: #000;">{{
                                            item.title
                                    }}</span>
                            </a>
                        </li>
                    </ul>
                    <el-pagination background layout="prev, pager, next" :total="1000" @current-change="changePage"
                        :current-page="page">
                    </el-pagination>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { titleRequest, titleItem } from '@/api/event'
export default {
    name: '',
    data() {
        return {
            background_img: ['http://image.wconcept.co.kr/images/builder/1/4/132/188/PIA1_1560x480_3_20210415175853.jpg', 'http://image.wconcept.co.kr/images/builder/1/4/132/188/PIA1_1560x480_w.app_20210409172737.jpg', 'http://image.wconcept.co.kr/images/builder/1/4/132/188/PIA1_1560x480_2_20210415180123.jpg', 'http://image.wconcept.co.kr/images/builder/1/4/132/188/PIA1_1560x480_6_20210415180048.jpg'],
            background_img_detail: ['http://image.wconcept.co.kr/productimg/image/img1/80/301239080.jpg', 'http://image.wconcept.co.kr/productimg/image/img1/74/301239074.jpg', 'http://image.wconcept.co.kr/productimg/image/img1/70/301239070.jpg'],
            benefit: ['http://image.wconcept.co.kr/images/builder/1/4/132/189/wc_benefit_03_20200713153123.png', 'http://image.wconcept.co.kr/images/builder/1/4/132/189/wc_benefit_09_20190905092308.png', 'http://image.wconcept.co.kr/images/builder/1/4/132/189/%EB%A9%A4%EB%B2%84%EC%89%BD_20190731154447.jpg', 'http://image.wconcept.co.kr/images/builder/1/4/132/189/pc_icon_20210205184922_20210226182134.jpg'],
            titleItem_content: [],
            type: ['all'],
            focus: 0,//点击的是哪个标题
            type_title_second: ['全部', '收藏', '趋势', '讨论', '销售', '事件'],
            titleContent: [],
            page: 1,
            // currentpage:1
        }
    }, methods: {
        titleHandle(index) {
            if (index == this.focus) {
                console.log('和当前标题一致');
                return
            } else {
                console.log('点击了新的标题,改变样式,渲染数据');
                this.focus = index;
                this.page = 1;
            }
        },
        getshoesItem(start, type) {
            // 标题数据对应的项目数据
            let data = {
                start,
                parent_name: this.type[type],
                end: start + 9
            }
            titleItem(data).then((data) => {
                console.log("得到的数据:", data);
                this.titleContent = data
            }).catch(() => {
                console.log('数据请求失败');
            })

        },
        allTitle() {
            let allItem = []
            let data_one = {
                start: 5,
                parent_name: '鞋类',
                end: 7
            }
            titleItem(data_one).then((data) => {
                // console.log("得到的数据:", data);
                allItem = allItem.concat(data)
                // console.log(allItem);
                let data_two = {
                    start: 5,
                    parent_name: '服饰',
                    end: 7
                }
                titleItem(data_two).then((data) => {
                    // console.log("得到的数据:", data);
                    allItem = allItem.concat(data)
                    let data_three = {
                        start: 5,
                        parent_name: '配件',
                        end: 6
                    }
                    titleItem(data_three).then((data) => {
                        // console.log("得到的数据:", data);
                        allItem = allItem.concat(data)
                        let data_fore = {
                            start: 5,
                            parent_name: '儿童专区',
                            end: 6
                        }
                        titleItem(data_fore).then((data) => {
                            // console.log("得到的数据:", data);
                            allItem = allItem.concat(data)
                            // console.log(allItem);
                            this.titleContent = allItem
                        }).catch(() => {
                            console.log('数据请求失败');
                        })
                    }).catch(() => {
                        console.log('数据请求失败');
                    })
                }).catch(() => {
                    console.log('数据请求失败');
                })
            }).catch(() => {
                console.log('数据请求失败');
            })

        },
        changePage(page) {
            console.log(page);
            this.page = page
        }
    },
    created() {
        // 标题数据
        let data = {
            parent_name: '',
        }
        titleRequest(data).then((data) => {
            // console.log(data);
            this.type = this.type.concat(data.data)
        }).catch(() => {
        })
        this.allTitle()

    },
    watch: {
        focus: {
            deep: true,
            handler(newName, oldName) {
                if (newName == 0) {
                    this.allTitle()
                } else {
                    this.getshoesItem(this.page, this.focus)
                }
            }
        },
        page: {
            deep: true,
            handler(newName, oldName) {
                if (this.focus == 0) {
                    this.allTitle()
                } else {
                    this.getshoesItem(newName, this.focus)
                }

            }
        }
    }
}
</script>

<style>
* {
    /* margin: 0; */
    padding: 0;
    text-align: center;
    list-style: none;
    text-decoration: none;
}

.title {
    text-align: center;
    font-weight: 100;
    font-size: 48px;
    font-family: "ProximaNova-Thin";
    text-transform: uppercase;
    color: #333;
    margin: 60px 0 20px 0;
}

.swip_capacity {
    width: 100%;
}

.capacity {
    margin: 0 auto;
    width: 100%;
    height: 483px;
}

/* 轮播图部分 */
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 483px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}

.el-carousel__indicators--horizontal {
    display: none;
}

.el-carousel__container {
    height: 483px;
}

.swip_capacity_action {
    width: 100%;
    height: 100%;
    position: relative;
    /* box-sizing: border-box;
    padding-left: 50px; */
}

.swip_capacity_action_title_detail {
    text-align: left;
    margin-left: 150px;
}

/* 轮播图部分结束 */
.middle {
    margin: 70px auto;
    width: 1570px;
    height: 187px;
    display: flex;
    justify-content: space-between;
}

.hotkeyword_content>li {
    display: inline-block;
}

.hotkeyword_content_item {
    display: inline-block;
    height: 37px;
    line-height: 37px;
    border-radius: 20px;
    background-color: #fff;
    margin: 5px 3px;
    padding: 0 13px;
    font-size: 14px;
    font-family: "yg740";
}

.hotkeyword_content_item:hover {
    cursor: pointer;
    background-color: rgb(73, 199, 223);
}

.hotkeyword_content_first {
    width: 295px;
    height: 100%;
    background-color: #5a5a5a;
    text-transform: uppercase;
    color: #fff;
    font-size: 26px;
    text-align: center;
    font-family: "ProximaNova-Thin";
    line-height: 161px;
}

.type_title_item_static {
    margin-top: 40px;
    border: 1px solid #b5b5b5;
    text-transform: uppercase;
    height: 59px;
    border-bottom: 2px #333 solid;
    color: black;
    line-height: 59px;
    flex: 1
}

.type_title_item_static:hover {
    cursor: pointer;
}

.type_title_item_dynamic {
    border: 2px #333 solid;
    border-bottom: none;
}
</style>