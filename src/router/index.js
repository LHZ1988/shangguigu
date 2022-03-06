import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes'
import store from '@/store'

Vue.use(VueRouter)

//先把VueRouter原型对象的push，保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace

//重写push|replace
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => { }, () => { })
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(this, location, () => { }, () => { })
    }
}


let router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { y: 0 }
    }
})

router.beforeEach(async (to,from,next)=>{
    //next()
    let token = store.state.user.token
    let name = store.state.user.userInfo.name
    if(token){ //有token表示已经登录
        if(to.path=='/login'||to.path=='/register'){
            next('/')
        }else{ //登录了去的不是login
            if(name){
                next()
            }else{
                try {
                    await store.dispatch('getUserInfo')   //刷新时重新获取值
                    next()
                } catch (error) {
                    //token失效
                    await store.dispatch('userLogout')
                    next('/login')
                }
            }
        }
    }else{ //未登录
        let toPath =to.path;
        if(toPath.indexOf('/trade')!=-1 || toPath.indexOf('/pay')!=-1 || toPath.indexOf('/center')!=-1){  //去的是trade
            next('/login?redirect='+toPath)
        }else{
            next()
        }
    }
})

export default router