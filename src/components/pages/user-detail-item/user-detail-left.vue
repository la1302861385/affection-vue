<template>
<div class="top1">
  <el-button icon="el-icon-s-home" size="mini" type="primary" @click="jumptoindex">回到主页</el-button>
<wd-drop-menu class="dropmenu">
  <wd-drop-menu-item v-model="value1" :options="option" @change="jumpto"/>
</wd-drop-menu>
   <el-divider class="gege"></el-divider>
</div>
</template>

<script>
export default {
    data() {
        return {
          value1: 0,
       option: [
        {
          label: '基本资料',
          value: 0
        }, {
          label: '详细资料',
          value: 1,
        }, {
          label: '上传头像',
          value: 2,
          tip: '上传照片被人才能认识你哦'
        },
        {
          label: '填写兴趣爱好',
          value: 3,
          tip: '填写可以找到志同道合的伴侣哦'
        }, {
          label: '想说的话',
          value: 4,
          tip: '可以写写你相对择偶对象说的话'
        },
      ],
        }
    },
 methods: {
      jumpto(value){
        if (value == 0) {
           this.$router.push("/userdetail/modifyuserdetail", ()=>{}, ()=>{})
        }
        else if(value == 1){
          this.$router.push("/userdetail/detailinformation", ()=>{}, ()=>{})
        }
        else if(value == 4){
          this.$router.push("/userdetail/heartword", ()=>{}, ()=>{})
        }
        else if(value == 3){
          this.$router.push("/userdetail/uploadprofile", ()=>{}, ()=>{})
        }
       },
      jumpUploadPorfile(){
        this.$router.push("/userdetail/uploadprofile")
      },
      jumpModifyUserDetail(){
        this.$router.push("/userdetail/modifyuserdetail")
      },
      jumpDetailInformation(){
         this.$router.push("/userdetail/detailinformation")
      },
      jumpHeartWord(){
        this.$router.push("/userdetail/heartword")
      },
      jumptoindex(){
        this.$router.push("/home")
      }
     }
}
</script>

<style scoped>
.tac{
    width: 20vw;
}
.top1{
  display: flex;
    width: 100vw;
    height: 50px;
    background-color: white;
}
.gege{
  position: absolute;
  top: 26px;;;
}
.dropmenu{
  position: relative;
  left: 20vw;
}
</style>