
export default{
    name:'shopcar',
    namespaced:true,
    actions:{
        addshopCard(store,goodslist){
            store.commit('ADDSHOPCARD',goodslist)
        },
        payment(store,data){
            store.commit('PAYMENT',data)
        }
    },
    mutations:{
        ADDSHOPCARD(state,data){
            state.shopCard= data;
        },
        PAYMENT(state,data){
            console.log(data);
            state.payList=data.cardList;
            state.totalPrice=data.totalPrice
        }
    },state:{
        shopCard:[],//当前购物车商品数组
    }
}