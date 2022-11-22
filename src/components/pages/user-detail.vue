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
    position: relative;
    width: 100VW;
}
.left{
  width: 100vw;
  position: fixed;
  z-index:999
    
}

</style>