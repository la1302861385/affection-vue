import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginUser from '../components/pages/login-user.vue'
import HomeShow from '../components/pages/home-show.vue'
import UserDetail from '../components/pages/user-detail.vue'
import ModifyUserDetail from '../components/pages/user-detail-item/modify-user-detail.vue'
import RegUser from '../components/pages/reg-user.vue'
import UpadtePassword from '../components/pages/update-password.vue'
import ErrorPage from '../components/pages/error-page.vue'
import UploadProfile from '../components/pages/user-detail-item/upload-profile.vue'
import {authToken} from '../api/login'
Vue.use(VueRouter)
const router = new VueRouter({
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/login',
            name:"login",
            component: LoginUser
        },
        {
            path: '/error',
            name:"error",
            component: ErrorPage
        },
        {
            path: '/home',
            component: HomeShow,
            meta:{isAuth:true},
        },
        {
            path: '/reg',
            component: RegUser
        },
        {
            path: '/updatepassword',
            component: UpadtePassword,
            meta:{isAuth:true}
        },
        {
            path: '/userdetail',
            component: UserDetail,
            meta:{isAuth:true},
            children:[
                {
                    path: 'modifyuserdetail',
                    component: ModifyUserDetail,
                    meta:{isAuth:true}
                },
                {
                    path: 'uploadprofile',
                    component: UploadProfile,
                    meta:{isAuth:true}
                },
            ]
        },
    ]
})

router.beforeEach((to,from,next)=>{
	if(to.meta.isAuth){
        authToken().then(res=>{
            if(res.code == 401){
                localStorage.removeItem("token")
                next({
                    name:"login"
                })
            }else{
                next()
            }
        },err=>{
            console.log(err)
            next({
                name:"error"
            })
        })
    }else{
        next()
    }
})
export default router