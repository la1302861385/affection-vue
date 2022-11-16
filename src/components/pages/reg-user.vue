<template>
  <div class="container-fluid">
    <div class="reg">
           <div>
            <el-input placeholder="请输入你要注册的账号" v-model="username" @blur="sfuser(username)" class="checkname"></el-input><br><br>
            <el-input v-model="password" placeholder="请设置您的密码" class="check" @blur="sfpassword(password)"></el-input><br>
            <el-input v-model="checkpassword" placeholder="请确认您的密码" class="check" @blur="sfcheckpassword(checkpassword)"></el-input><br>
            <el-link type="warning" class="warning" v-show="isrepeat"> <i class="el-icon-close"></i>您输入的账号已被注册</el-link>
            <el-link type="warning" class="warning" v-show="isempty"> <i class="el-icon-close"></i>输入的账号不能为空</el-link>
            <el-link type="warning" class="warning" v-show="toshort"> <i class="el-icon-close"></i>用户名应不低于6位</el-link>
            <el-link type="success" class="warning"  v-show="!isempty&&!isrepeat&&!toshort&&!a"><i class="el-icon-check"></i>账号可以使用</el-link><br>
            <el-link type="warning" class="passwordwarning" v-show="ispassword"> <i class="el-icon-close"></i>密码必须大于8位且含有数字和字母，不可以使用汉字</el-link>
            <el-link type="warning" class="passwordwarning" v-show="!ispassword&&!b"> <i class="el-icon-check"></i>密码可以使用</el-link><br>
            <el-link type="warning" class="checkpasswordwarning" v-show="ischeckpassword"> <i class="el-icon-close"></i>确认密码必须与密码一致并且不能为空</el-link>
            <el-link type="warning" class="checkpasswordwarning" v-show="!ischeckpassword&&!c"> <i class="el-icon-check"></i>确认密码通过</el-link><br>
            <el-button class="checkbutton" type="primary" @click="regUser" v-loading="loading">主要按钮</el-button><br>
            <el-link icon="el-icon-edit" @click="jumplogin" class="jumplogin">已有账号？=>点击登陆</el-link><br/>


           </div>

    </div>

  </div>
</template>

<script>
import {repeatuser,registerUser} from "../../api/login.js"
export default {
    name:"RegUser",
    data() {
        return {
            a:true,
            b:true,
            c:true,
            toshort:false,
            isrepeat:false,
            isempty:false,
            username:"",
            password:"",
            checkpassword:"",
            ispassword:false,
            ischeckpassword:false,
            loading:false
        }
    },
    computed:{
            flag(){
                return !this.a&&!this.b&&!this.c&&!this.toshort&&!this.isrepeat&&!this.isempty&&!this.ispassword&&!this.ischeckpassword
            }
    },
    methods: {
        sfuser(username){
           if(username == null || username === ''){
            this.isempty = true
            this.isrepeat = false
            this.toshort = false
            this.a=false
           }else if(username.length<6){
             this.toshort = true
              this.a=false
              this.isempty=false
              this.isrepeat=false
           }
           else{
            this.isempty = false
            this.a = false
            this.toshort = false
            repeatuser(username).then((res)=>{
                if(res.msg == "用户名可以使用"){
                    this.isrepeat=false
                }else{
                    this.isrepeat=true
                }
                  
            },(error)=>{
                 console.log(error)
            })
           }
        },
        sfpassword(password) {
            this.b = false
            var regNumber = /\d+/; //验证0-9的任意数字最少出现1次。
            var regString = /[a-zA-Z]+/; //验证大小写26个字母任意字母最少出现1次。
            var flag = regNumber.test(password)&&regString.test(password);
            if (password.length < 8 || !flag){
                this.ispassword = true
            }else{
                this.ispassword = false
            }
        },
        sfcheckpassword(checkpassword){
            this.c = false
            if(checkpassword != this.password || checkpassword === ""){
                this.ischeckpassword = true
            }else{
                this.ischeckpassword=false
            }

        },
        regUser(){
            this.sfuser(this.username)
            this.sfpassword(this.password)
            this.sfcheckpassword(this.checkpassword)
        if(this.flag == true){
            this.loading = true
        registerUser(this.username,this.password).then((res)=>{
                if(res.msg == "注册成功"){
                    console.log(res)
                    localStorage.setItem("token",res.data.token)
                    this.loading = false
                    this.$router.replace("/home")
                }else{
                    console.log('注册失败')
                    this.loading = false
                    
                }
                  
            },(error)=>{
                 console.log(error)
                 this.loading = false
            })
        }

        },
        jumplogin(){
            this.$router.replace("/login")
        }

    },
     mounted(){
        if(localStorage.getItem("token")){
            this.$router.replace("/home")
        }
    },

}
</script>

<style scoped>
.container-fluid{
    position: relative;
    background-color: rgba(0, 0, 255, 0.073);
    height: 840px;
}
.reg{
    position: relative;
    background-color: aqua;
    text-align: center;
    width: 500px;
    height: 600px;
    top: 100px;
    left: 600px;
}
.check{
    position: relative;
    top: 200px;
    margin-top: 40px;
    width: 60%;
}
.checkname{
    position: relative;
    top: 200px;
    width: 60%;
}
.warning{
    position: relative;
    top: 20px;
}
.passwordwarning{
    position: relative;
    top: 100px;
}
.checkpasswordwarning{
    position: relative;
    top: 170px;
}
.checkbutton{
    position: relative;
    width: 70%;
    height: 60px;
    top: 200px;
}
.jumplogin{
    top: 220px;
}
</style>