<template>
  <div class="container">
  <div class="row">
    <div class="col-md-4">
        <img id="eye" src="../../../assets/img/eye.png">
    </div>
     <div class="col-md-4">
        <span class="topspan"></span>
    </div>
     <div class="col-md-4">
        <span class="topspan">nihao</span>
    </div>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container{
    position: relative;
    top: 60px;
    width: 60%;
    height: 100px;
    background-color: rgba(0, 0, 255, 0.023);
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
.col-md-4{
    position: relative;
    text-align: center;
}
#eye{
    position: relative;
    width: 50%;
    height: 50%;
    left: 20%;
    top:15px
}
.topspan{
    position: absolute;
    top: 0;
    right:0;
}
</style>