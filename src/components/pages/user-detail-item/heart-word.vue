<template>
  <div class="alla">
    <div style="height: 70px"></div>
    <div class="head">
      <div class="shu"></div>
        <p class="fonts">介绍一下自己，描述一下理想的伴侣，说说你对婚姻的期望</p>
    </div>
    <hr>
<el-input
  type="textarea"
  :autosize="{ minRows: 15, maxRows: 15}"
  placeholder="请输入内容"
  v-model="heartWords"
  maxlength="200"
  show-word-limit
  class="shurukuang"
  style="width:90vw;">
</el-input>
<br>
<el-button type="primary" class="inputbutton">提交</el-button>
  </div>
</template>

<script>
export default {
data() {
    return {
        heartWords:"",
    }
},
}
</script>

<style scoped>
.head{
    position: relative;
    width: 100vw;
    height: 50px;
    display: flex;
}
.fonts{
    font-size: 20px;
    top: 20px;
    left: 50px;
}
.alla{
  height:600px
}
.shu{
  position:relative;
  width: 10px;
  height: 30px;
  background-color: blue;
}
.inputbutton{
  width: 80vw;
  position:relative;
  top: 50px;
  left: 10vw;
  
}
.shurukuang{
  position: relative;
  left: 20px;
}
</style>