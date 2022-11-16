<template>
<div>
        <el-upload
        drag
        list-type="picture"
         action=""
        :before-upload="beforeAvatarUpload"
        :on-change="beforeAvatarUpload"
        :auto-upload="false"
        ref="upload"
        :limit=1
        >
          <i class="el-icon-upload"></i>
  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        <el-button size="small" type="primary" @click="clickupload">点击上传</el-button>
         <img v-if="imageUrl" :src="imageUrl" class="avatar">
        </el-upload>

</div>
</template>
·
<script>
export default {
    data() {
        return {
            imageUrl: ''
        }
    },
methods: {
    beforeAvatarUpload(file){
        this.imageUrl = URL.createObjectURL(file.raw);
        const isJPG = file.type === 'image/jpeg';
        const isPNG = file.type === 'image/png';
        const filetype = isJPG || isPNG;
        const isLt2M = file.size / 1024 / 1024 < 10;

        if (!filetype) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 10MB!');
        }
        return filetype && isLt2M;
    },
    clickupload(){
      this.$refs.upload.submit()
    }
},
}
</script>

<style scoped>
.upload{
    position: absolute;
    left: 700px;
}
</style>