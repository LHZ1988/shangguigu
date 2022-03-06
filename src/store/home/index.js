import { reqCategoryList, reqGetBannerList,reqFloorList } from '@/api'

const state = {
    categoryList: [],
    bannerList: [],
    floorList:[]
}
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    CATEBANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    },
    CATFLOORLIST(state,floorList){
        state.floorList=floorList
    }
}
const actions = {
    async categoryList({ commit }) {
        let result = await reqCategoryList();
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data)
        }
    },
    async getBannerList({ commit }) {
        let result = await reqGetBannerList()
        if (result.code == 200) {
            commit("CATEBANNERLIST", result.data)
        }
    },
    async getFloorList({commit}){
        let result = await reqFloorList()
        if (result.code == 200) {
            commit("CATFLOORLIST", result.data)
        }
    }
}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}