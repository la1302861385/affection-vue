<template>
     <div class="container-fluid" id="index">
         <div class="col-md-3" id="login">
                 <h1 id="logintitle">请登录</h1><br/>
             <form action="" id="loginform">
                 <input class="input" type="text" id="username" v-model="username" placeholder="请输入用户名"><br/><br/>
                 <label id="alert"></label><br />
                 <input class="input" type="password" v-model="pwd" placeholder="请输入密码"><br/><br/>
                 <input type="submit" id="submit" value="登陆" @click="userlogin(username,pwd)"><br/><br/>
                 <el-link icon="el-icon-edit" @click="jumpreg" class="reg">没有账号？点击==>注册账号</el-link><br/>
             </form>
             <div id="updatepwd">
                 <label >忘记密码</label>
             </div>
         </div>
     </div>
</template>

<script>
 import {login} from '../../api/login.js'
export default {
    name: 'login-user',
    data() {
        return {
            username:"",
            pwd:""
        }
    },
    methods: {
        userlogin(username, pwd) {
            if(username&&pwd){
            login(username, pwd).then((res) => {
                   if(res.code == 401){
                    this.$message.error("账号或密码错误")
                   }else{
                    localStorage.setItem("token",res.data.token)
                    this.$router.replace("/home")
                   }

                },
                (err) => {
                    console.log(err)
                })
            }
            else{
                this.$message.error("账号或密码不能为空")
            }
        },
        jumpreg(){
            this.$router.replace("/reg")
        },

    },
    mounted(){
        if(localStorage.getItem("token")){
            this.$router.replace("/home")
        }
    },

}
</script>

<style scoped>
#submit{
    background-color: rgba(80, 159, 255, 0.763);
    color: black;
    width: 80%;
    height: 50px;
    border-radius: 10px;
    text-align: center;
}
#login{
    position: absolute;
    left: 900px;
    top: 150px;
    height: 600px;
    background-color: rgba(215, 231, 250, 0.626);

}
#loginform{
    position: relative;
    top: 70px; 
    text-align: center;
}
#index{
    height: 881px;
    background-image: url(../../assets/img/backgroud.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
#logintitle{
    position: relative;
    text-align: center;
    top: 70px;

}
.input{
    background-color: rgba(215, 231, 250, 0);
    width: 80%;
    height: 50px;
    border:none;
    border-bottom: 1px solid #000
}
#updatepwd{
    position: absolute;
    bottom: 0;
    right: 3px;
}
.reg{
    color: #000;
}
</style>