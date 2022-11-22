<template>
         <div id="login">
            <div>
                很欢迎来到
            </div>
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
    position: relative;
    height:100vh;
    background-color: rgba(215, 231, 250, 0.838);

}
#loginform{
    position: relative;
    top: 260px;
    text-align: center;
}
#logintitle{
    position: relative;
    text-align: center;

}
.input{
    background-color: rgba(215, 231, 250, 0);
    width: 80%;
    height: 50px;
    border:none;
    border-bottom: 1px solid #000
}
#updatepwd{
    position:absolute;
    bottom: 0;
    right: 0;
}
.reg{
    color: #000;
}
</style>