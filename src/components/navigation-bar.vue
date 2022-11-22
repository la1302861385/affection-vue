<template>
<div class="row1">
    <el-button class="topspan" type="primary" icon="el-icon-s-home" @click="sendindex">主页</el-button>
    <el-button type="primary topspan" icon="el-icon-search">搜索</el-button>
    <el-dropdown>
        <el-button type="primary" icon="el-icon-s-custom" v-show="flag" class="geren topspan">个人中心</el-button>
        <el-dropdown-menu class="dropdown" slot="dropdown">
            <el-dropdown-item @click.native="jumpUserDetail">修改资料</el-dropdown-item>
            <el-dropdown-item @click.native="jumpUpdatePassword">修改密码</el-dropdown-item>
            <el-dropdown-item @click.native="logout">退出登陆</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</div>
</template>

<script>
import {logoutUser} from "../api/login.js"
export default {
    name: "NavigationBar",
    data() {
        return {
            flag:""
        }
    },
    methods: {
        sendlogin() {
            this.$router.push("/login")
        },
        sendindex() {
            this.$router.push("/home")
        },
        sendreg(){
             this.$router.push("/reg")
        },
        logout(){
            console.log("1")
          logoutUser().then((res)=>{
            if(res.msg == "认证失败请重新登陆")
            {
             if(localStorage.getItem("token")==""){
                this.flag = false
                this.$router.push("/login")
             }else{
                localStorage.removeItem("token")
                this.flag = false
                this.$router.push("/login")
             }
            }else{
                localStorage.removeItem("token")
                this.flag = false
                this.$router.push("/login")
            }
            },(error)=>{
                 console.log(error)
            })
        },
        jumpUpdatePassword(){
            this.$router.replace("/updatepassword")
        },
        jumpUserDetail(){
            this.$router.push("/userdetail/modifyuserdetail")
        }
    },
    mounted() {
        if(localStorage.getItem("token")){
            this.flag = true
        }
        else{
            this.flag = false
        }
    },

}
</script>

<style scoped>
.row1{
    display: flex;
 position: relative;
    width: 100vw;
    height: 90px;
    background-color: #409EFF;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
} 
.col-md-4{
    background-color: #409EFF;
    height: 100%;
    

}
.col-md-8{
    background-color: #409EFF;
    height: 100%;
}
.topspan{
   top: 30%;
   position: relative;
   height: 30px;
   width: 100px;
   background-color: #409EFF;
}
.geren{

}

</style>