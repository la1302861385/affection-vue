<template>
  <div class="updatepwd">
    <el-form status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="旧密码">
      <el-input v-model="oldPassword" @blur="checkOldPassword(oldPassword)"></el-input><br>
      <label v-show="ischecked&&a">密码正确</label>
      <label v-show="!ischecked&&a">密码错误</label>
    </el-form-item>
      <el-form-item label="新密码">
        <el-input type="password" v-model="newPassword" @blur="checkform(newPassword)"></el-input>
        <label v-show="ispassword&&b">密码格式正确</label>
        <label v-show="!ispassword&&b">密码必须大于8位并且含有数字和字母</label>
      </el-form-item>
      <el-form-item label="确认新密码">
        <el-input type="password" v-model="checkPassword" @blur="check(checkPassword)"></el-input>
        <label v-show="ispasswordchecked&&c">确认密码正确</label>
        <label v-show="!ispasswordchecked&&c">确认密码必须和密码一致且不能为空</label>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm" v-loading="flag">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {checkPassword,updatePassword} from "../../api/login.js"
export default {
  name:"UpdatePassword",
  data() {
    return {
      oldPassword:"",
      newPassword:"",
      checkPassword:"",
      ischecked:false,
      ispassword:false,
      ispasswordchecked:false,
      a:false,
      b:false,
      c:false,
      flag:false
    }
  },
  methods: {
    checkOldPassword(oldPassword) {
      this.a = true;
      if (oldPassword == "") {
        this.ischecked = false
      } else {
        checkPassword(oldPassword).then((res) => {
            if (res.msg == "密码正确") {
              this.ischecked = true
            } else {
              this.ischecked = false
            }
          },
          (err) => {
            console.log(err)
          })
      }
    },
    checkform(password) {
      this.b = true
      var regNumber = /\d+/; //验证0-9的任意数字最少出现1次。
      var regString = /[a-zA-Z]+/; //验证大小写26个字母任意字母最少出现1次。
      var flag = regNumber.test(password) && regString.test(password);
      if (password.length < 8 || !flag) {
        this.ispassword = false
      } else {
        this.ispassword = true
      }
    },
    check(checkpassword) {
      this.c = true
      if(checkpassword == this.newPassword && checkpassword != ""){
        this.ispasswordchecked = true
      }else{
        this.ispasswordchecked = false
      }
    },
    resetForm(){
      this.oldPassword=""
      this.newPassword=""
      this.checkPassword=""
    },
    submitForm(){
      this.a = true
      this.b = true
      this.c = true
      this.flag = true
      if(this.ischecked&&this.ispassword&&this.ispasswordchecked){
        updatePassword(this.newPassword).then((res) => {
            if (res.msg == "修改密码成功") {
              this.flag = false
              localStorage.removeItem("token")
              this.$router.replace("/login")
            } else if(res.code == 401) {
              if (localStorage.getItem("token")) {
                this.flag = false
                 localStorage.removeItem("token")
                 this.$router.replace("/login")
              }else{
                this.flag = false
                this.$router.replace("/login")
              }
            }else{
              this.flag = false
              this.$message.error("修改密码失败")
            }
          },
          (err) => {
            this.flag = false
            console.log(err)
          })
      }
      else{
        this.flag = false
      }
    }

  },
  mounted() {
    if(!localStorage.getItem("token")){
       this.$router.replace("/login")
    }
  },
  }
</script>

<style scoped>

.updatepwd{
  position: relative;
  width: 30%;
  left: 600px;
  top: 300px;
  height: 300px;
}
</style>>

