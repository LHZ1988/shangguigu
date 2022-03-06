import { reqAddressInfo,reqOrderInfo } from "@/api"
const state={
    orderInfo:{}
}
const mutations={
    GETORDERINFO(state,orderInfo){
        state.orderInfo = orderInfo
    }
}
const actions={
    async getUserAddress({commit}){
        let result = await reqAddressInfo()
        //console.log(result);
    },
    async getOrederInfo({commit}){
        let result = await reqOrderInfo()
        if(result.code==200){
            commit('GETORDERINFO',result.data)
        }
    }
}
const getters={}
export default {
    state,
    mutations,
    actions,
    getters
}