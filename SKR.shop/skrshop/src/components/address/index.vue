<template>
    <div class="address">
        <div class="title">
            <h2>收货地址</h2>
            <div class="cancel" @click="changeshow">
                ✖
            </div>
        </div>
        <div class="main">
            <div class="info">
                <el-form :model="ruleForm" :rules="rules" label-position="top" ref="ruleForm" label-width="100px"
                    class="demo-ruleForm">
                    <el-form-item label="收货人" prop="name">
                        <el-input v-model="ruleForm.name" placeholder="姓名" ></el-input>
                    </el-form-item>
                    <el-form-item label="手机号码" prop="tel">
                        <el-input v-model="ruleForm.tel" placeholder="手机号码"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <div class="address_item">
                <div>
                    国家/地区
                    <span style="color:red">*</span>
                </div>
                <div>
                    省/直辖市
                    <span style="color:red">*</span>
                </div>
                <div>
                    市
                    <span style="color:red">*</span>
                </div>
                <div>
                    区/县
                    <span style="color:red">*</span>
                </div>
            </div>
            <div class="choose_city">
                <el-select v-model="provals" placeholder="中国大陆" class="selregion" >
                    <el-option key="chinese" label="中国大陆" :value="avalue">
                    </el-option>
                </el-select>
                <el-select v-model="proval" placeholder="请选择" class="selregion" >
                    <el-option v-for="(item, index) in provinces" :key="index" :label="item.province.name"
                        :value="index">
                    </el-option>
                </el-select>
                <el-select v-model="cityval" placeholder="请选择" class="selregion">
                    <el-option v-for="(item, index) in citys" :key="index" :label="item.city.name" :value="index">
                    </el-option>
                </el-select>
                <el-select v-model="countyval" placeholder="请选择" class="selregion" >
                    <el-option v-for="(item, index) in countys" :key="index" :label="item.county" :value="index">
                    </el-option>
                </el-select>
            </div>
            <div class="detail_address">
                <div>详细地址
                    <span style="color:red">*</span>
                </div>
                <input type="text" placeholder="详细地址" v-model="carefully">
            </div>
            <div class="default">
                <input type="checkbox" id="default" v-model="defaultAddress">
                <label for="default">设置为默认地址</label>
            </div>
        </div>
        <div class="submit">
            <button class="retun_btn" @click="changeshow">
                <span>返回</span>
            </button>
            <button class="confirm_btn" @click="save">
                <span>保存地址</span>
            </button>
        </div>
    </div>
</template>

<script>
import { addressData } from './address'
import { addAddress } from '@/api/shopping_address'
export default {
    name: 'newAddress',
    data() {
        return {
            // 表单名称
            ruleForm: {
                name: '',
                tel: ''
            },
            // 验证规则
            rules: {
                name: [
                    { required: true, message: '请输入你的名字', trigger: 'blur' },
                    { min: 2, max: 4, message: '长度在 2 到 4 个字符', trigger: 'blur' }
                ], tel: [
                    { pattern: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/, message: '号码格式错误', trigger: 'blur' }
                ]
            },
            form: {
                region: ''
            },
            provals: '',
            proval: '',//省值
            cityval: '',// 市值
            countyval: '',//县值
            provinces: [],//保存省份
            citys: [],//保存市
            countys: [],//保存县
            avalue: '',
            show:false,//显示与隐藏
            site:'',// 省份+市+县
            carefully:'',// 详情地址
            defaultAddress:0,//默认地址
            carefullys:'',//地址全称
        }
    },
    props:{
        isShow:{
            type:Boolean,
            default:true
        }
    },
    created() {
        // 初始化拿到省份
        for (const key in addressData) {
            this.provinces.push({
                province: addressData[key]
            })
        }
    },
    watch: {
        proval(item) {
            this.cityval = '';
            this.changepro(item);
        },
        cityval(item) {
            this.countyval = '';
            this.changecounty(item)
        },
        defaultAddress(){
            this.$emit('default',this.defaultAddress)
        }
        
    }, methods: {
        // 拿到各个省份对应市
        changepro(index) {
            this.citys = []
            for (const key in this.provinces[index].province.child) {
                this.citys.push({
                    city: this.provinces[index].province.child[key]
                })
            }

        },
        // 拿到市下面的县
        changecounty(index) {
            this.countys = [];
            for (const key in this.citys[index].city.child) {
                this.countys.push({
                    county: this.citys[index].city.child[key]
                })
            }
        },
        changeshow(){
            // this.isShow=false;
            console.log(this.show);

            this.$emit('changehidden',this.show)
        },
        save(){
            this.carefullys=`${this.provinces[this.proval].province.name}-${this.citys[this.cityval].city.name}-${this.countys[this.countyval].county}-${this.carefully}`
            this.$emit('delivery',this.ruleForm.name,this.carefullys)
            let customer_id=localStorage.getItem('userId');
            let name=this.ruleForm.name;
            let tel=this.ruleForm.tel;
            let address=this.carefullys;
            let prime=this.defaultAddress
            let data={
                customer_id,
                name,
                tel,
                address,
                prime,
            }
            addAddress(data).then(data=>{
                console.log(data);
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

.address {
    position: fixed;
    width: 740px;
    height: 490px;
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

    .main {
        .info {
            display: flex;
            padding: 20px 0;
            .demo-ruleForm{
                display: flex;
                width: 100%;
                justify-content: space-around;
            }
        }
        .address_item{
            display: flex;
            & div{
                width: 150px;
                margin: 0 28px 5px 0;
            }                              
        }
        .choose_city{
            .selregion{
                width: 150px;
                margin-right: 25px;
                border:1px solid black ;
                border-radius: 5px;
            }
        }
        .detail_address{
            padding: 20px 0;
            & input{
                width: 500px;
                margin-top: 10px;
                height: 32px;
                border: 1px solid #000;
                border-radius: 3px;
                text-emphasis: ellipsis;
            }
        }
        .default{
            & input{
                width: 16px;
                height: 16px;
                vertical-align: middle;
                border: 1px solid #000;
                vertical-align: middle;
            }
            & label{
                margin-left: 10px;
                vertical-align: middle;
            }
        }
    }
    .submit{
        height: 80px;
        width: 740px;
        position: absolute;
        left: 0;
        bottom: 0;
        line-height: 80px;
        text-align: end;
        border-top: 2px solid #e6e6e6;
        margin-top: 10px;
        & button{
            padding: 0 25px;
            height: 40px;
            line-height: 38px;
            border: 1px solid #979797;
            border-radius: 0;
            margin-right: 10px;
        }
        .confirm_btn{
            background-color: #4c4c4c;
            color: #fff;
        }
    }
}
</style>
