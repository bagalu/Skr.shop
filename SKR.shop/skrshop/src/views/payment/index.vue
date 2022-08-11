<template>
    <div class="payment">
        <pay-left :goodsList="payList"></pay-left>
        <payRight :pricea="prices" :cheapa="cheaps"></payRight>
    </div>
</template>

<script>
import payLeft from './childpoms/payleft'
import payRight from './childpoms/payright'

export default {
    name: 'payment',
    components: {
        payLeft, payRight
    },
    data(){
        return {
            payList:[],//支付列表
            prices:0,// 原价总价
            cheaps:0,// 优惠钱数
        }
    },
    created(){
        this.payList=JSON.parse(sessionStorage.getItem('cardList'))
        console.log(this.payList);
        this.payList.forEach((item) => {
            this.cheaps += (item.price - item.special_price) * item.num
            this.prices+=item.price*item.num
        })
    },
    methods:{

    }
}
</script>

<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
}
.payment{
    width: 82%;
    margin: 0 auto;
    display: flex;
}
</style>