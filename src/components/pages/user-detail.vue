<template>
  <div>
    <UserDetailLeft class="left"/>
    <router-view class="item"></router-view>
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
    top: 200px;
    width: 50%;
}
.left{
    position: relative;
    height: 700px;
    width: 500px;
    top: 200px;
    left: 350px;
}
</style>