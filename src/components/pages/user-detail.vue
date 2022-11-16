<template>
  <div>
    <UserDetailLeft class="left"/>
    <router-view class="item"></router-view>
    <div class="all"></div>
  </div>
</template>

<script>
import UserDetailLeft from "./user-detail-item/user-detail-left.vue"
export default {
    name:"UserDetai",
    components:{
        UserDetailLeft
    }
}
</script>

<style scoped>
.item{
    position: absolute;
    left: 600px;
    top: 170px;
    width: 50%;
}
.left{
    position: relative;
    width: 400px;
    top: 200px;
    left: 350px;
    
}
.all{
  position: absolute;
  left: 160px;
  width: 80%;
  height: 730px;
  bottom: 50px;
  background-color: rgba(0, 0, 255, 0.014);
  pointer-events:none;
   box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
</style>