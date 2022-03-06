import { reqGetCode, reqUserRegister, reqUserLogin, reqUserInfo,reqLogout } from '@/api'
const state = {
    code: '',
    token: localStorage.getItem('TOKEN'),
    userInfo:{}
}
const mutations = {
    GETCODE(state, coed) {
        state.code = coed
    },
    USERLOGIN(state, token) {
        state.token = token
    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo
    },
    CLEAR(state){
        state.token=''
        state.userInfo={}
        localStorage.removeItem("TOKEN")
    }
}
const actions = {
    async getCode({ commit }, phone) {
        let result = await reqGetCode(phone)
        if (result.code == 200) {
            commit("GETCODE", result.data)
           
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    async userRegister({ commit }, user) {
        let result = await reqUserRegister(user)
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    async userLogin({ commit }, data) {
        let result = await reqUserLogin(data)
        if (result.code = 200) {
            commit('USERLOGIN', result.data.token)
            localStorage.setItem('TOKEN',result.data.token)
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    async getUserInfo({commit}) {
        let result = await reqUserInfo()
        if (result.code == 200) {
            //console.log(123);
            commit('GETUSERINFO', result.data)
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    async userLogout({commit}){
        let result = await reqLogout()
        if (result.code = 200) {
            commit('CLEAR')
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
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