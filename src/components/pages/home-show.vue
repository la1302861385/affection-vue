<template>
<div> <NavigationBar/>
  <div class="container-fluid">
   <HomeTop/>
   <HomeMid :userDetails="userDetails"/>
  </div>
</div>
</template>

<script>
import {listUserDetails} from '../../api/userDetail.js'
import NavigationBar from '../navigation-bar.vue'
import HomeTop from './home-item/home-top.vue'
import HomeMid from './home-item/home-mid.vue'
export default {
    name:'HomeShow',
    components:{
        HomeTop,
        HomeMid,
        NavigationBar
    },
    data() {
        return {
            userDetails:[]
        }
    },
    mounted() {
        listUserDetails().then((res)=>{
                if(res.msg == "查询成功"){
                    this.userDetails = res.data
                }else{
                    localStorage.removeItem("token")
                    this.$router.replace("/login")
                }
            },(error)=>{
                 console.log(error)
            })
    },
}
</script>

<style scoped>
.container-fluid{
    width: 100%;
    height: 100%;
    position: relative;
}
</style>