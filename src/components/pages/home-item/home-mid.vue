<template>
  <div class="container1">
      <div class="usershow" v-for="item in userDetail" :key="item.id">
        <div id="userimg"><img class="img" src="https://tse1-mm.cn.bing.net/th/id/OIP-C.6Z5tewI43AYPg94BjRukQgHaE7?pid=ImgDet&rs=1"/></div>
        <div class="detail">
            <div>{{item.nickName}}</div>
        </div>
        <div class="detaila">
            {{item.sex}}<el-divider direction="vertical"></el-divider>
            {{age(item.birthday)}}岁<el-divider direction="vertical"></el-divider>
            {{item.height}}cm<el-divider direction="vertical"></el-divider>
            其他职业ssssss
        </div>
        <div class="xiangshuo">
            <hr>
        </div>
         <el-button class="button1" @click="hello"><i class="el-icon-bell"></i>打个招呼吧</el-button>
      </div>
  </div>
</template>

<script>
export default {
    props:['userDetails'],
    data() {
        return {
            userDetail:""
        }
    },
    watch: {
	userDetails(val){
		this.userDetail = val;
	}
},
    methods: {
        age(strBirthday) {
            var returnAge;
            var strBirthdayArr = strBirthday.split("-");
            var birthYear = strBirthdayArr[0];
            var birthMonth = strBirthdayArr[1];
            var birthDay = strBirthdayArr[2];

            var d = new Date();
            var nowYear = d.getFullYear();
            var nowMonth = d.getMonth() + 1;
            var nowDay = d.getDate();

            if (nowYear == birthYear) {
                returnAge = 0; //同年 则为0岁
            } else {
                var ageDiff = nowYear - birthYear; //年之差
                if (ageDiff > 0) {
                    if (nowMonth == birthMonth) {
                        var dayDiff = nowDay - birthDay; //日之差
                        if (dayDiff < 0) {
                            returnAge = ageDiff - 1;
                        } else {
                            returnAge = ageDiff;
                        }
                    } else {
                        var monthDiff = nowMonth - birthMonth; //月之差
                        if (monthDiff < 0) {
                            returnAge = ageDiff - 1;
                        } else {
                            returnAge = ageDiff;
                        }
                    }
                } else {
                    returnAge = -1; //返回-1 表示出生日期输入错误 晚于今天
                }
            }

            return returnAge; //返回周岁年龄
        },
        hello(){
            console.log(this.userDetail)
        }
    },
    created(){
         this.userDetail=this.userDetails
    }

}
</script>

<style scoped>
.container1{
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    position: relative;
    top:30px;
    background-color: rgba(0, 255, 255, 0);
}
.usershow{
    position: relative;
    width: 100vw;
    max-width: 360px;
    height: 300px;
    background-color: rgba(196, 13, 13, 0);
    border: 0.25px solid rgba(0, 0, 0, 0.103);
}
#userimg{
    position: relative;
    left: 10px;
    top: 50px;
    width: 40%;
    height: 50%;
    background-color: rgba(20, 20, 8, 0.043);
}
.detail{
    position: relative;
    width:30%;
    font-weight: bolder;
    left: 50%;
    bottom: 30%;
    text-align: center;
     background-color: rgba(20, 20, 8, 0);
    
}
.detail1{
    background-color: rgba(20, 20, 8, 0.116);
    position: relative;
    text-align: center;
    width: 260px;
    height: 60px;
    left: 250px;
    bottom: 150px;
    margin-top: 20px;
    
}
.button1{
    position: absolute;
    bottom: 15%;
    left: 2%;
    background-color: rgba(137, 43, 226, 0.155);
}
.img{
    width: 100%;
    height: 100%;
}
.detaila{
     display: flex;
    flex-wrap: wrap;
    position:relative;
    width: 40%;
    background-color: rgba(0, 0, 0, 0);
    font-size: 80%;
    left: 52%;
    bottom: 26%;
    text-align: center;
    
}
.xiangshuo{
    position: relative;
    height: 50%;
    width: 50%;
    background-color: rgb(240, 243, 255);
    left: 45%;
    bottom: 28%;
}

</style>