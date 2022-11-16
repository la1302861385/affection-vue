<template>
 <el-row class="tac">
     <el-col :span="12">
         <el-menu default-active="2" class="el-menu-vertical-demo">
             <el-submenu index="1">
                 <template slot="title">
                     <i class="el-icon-location"></i>
                     <span >个人资料</span>
                 </template>
                 <el-menu-item-group>
                     <el-menu-item index="1-1">基本资料</el-menu-item>
                     <el-menu-item index="1-2">详细资料</el-menu-item>
                     <el-menu-item index="1-3">工作生活相关</el-menu-item>
                 </el-menu-item-group>
             </el-submenu>
             <el-menu-item index="2">
                 <i class="el-icon-menu"></i>
                 <span slot="title">想说的话</span>
             </el-menu-item>
             <el-menu-item index="3">
                 <i class="el-icon-document"></i>
                 <span slot="title">兴趣爱好</span>
             </el-menu-item>
             <el-menu-item index="4" @click="jumpUploadPorfile">
                 <i class="el-icon-setting"></i>
                 <span slot="title">上传头像</span>
             </el-menu-item>
             <el-menu-item index="5">
                 <i class="el-icon-setting"></i>
                 <span slot="title">择偶要求</span>
             </el-menu-item>
         </el-menu>
     </el-col>
 </el-row>
</template>

<script>
export default {
 methods: {
      jumpUploadPorfile(){
        this.$router.push("/userdetail/uploadprofile")
      }
    }
}
</script>

<style>

</style>