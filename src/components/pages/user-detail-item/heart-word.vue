<template>
  <div class="alla">
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
  style="width:590px;
  left:30px">
</el-input>
<el-button type="primary" class="inputbutton">主要按钮</el-button>
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
    width: 830px;
    height: 50px;
}
.fonts{
    position: absolute;
    font-size: 20px;
    top: 20px;
    left: 50px;
}
.alla{
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  height:600px
}
.shu{
  position:absolute;
  width: 10px;
  height: 30px;
  background-color: blue;
  top: 20px;
  left: 35px;
}
.inputbutton{
  position:absolute;
  top: 500px;
}
</style>