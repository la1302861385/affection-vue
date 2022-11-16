<template>
  <div class="container">
      <div class="usershow" v-for="item in userDetails" :key="item.id">
        <div id="userimg"><img class="img" src="https://tse1-mm.cn.bing.net/th/id/OIP-C.6Z5tewI43AYPg94BjRukQgHaE7?pid=ImgDet&rs=1"/></div>
        <div class="row detail">
            <div class="col-md-12">{{item.nickName}}</div>
        </div>
        <div class="row detail">
            <div class="col-md-1">{{item.sex}}</div>
            <div class="col-md-3">{{age(item.birthday)}}</div>
            <div class="col-md-3">{{item.height}}</div>
            <div class="col-md-4">其他职业</div>
        </div>
         <div class="row detail1">
            <div class="col-md-12"></div>
        </div>
         <el-button class="button1"><i class="el-icon-bell"></i>打个招呼吧</el-button>
      </div>
      <div class="block">
          <el-pagination layout="prev, pager, next" :total="80">
          </el-pagination>
      </div>
  </div>
</template>

<script>
export default {
    props:["userDetails"],
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
        }
    },
}
</script>

<style souped>
.container{
    display: flex;
    flex-wrap: wrap;
    position: relative;
    top:100px;
    background-color: rgba(0, 255, 255, 0);
}
.usershow{
    position: relative;
    width: 50%;
    height: 300px;
    background-color: rgba(196, 13, 13, 0);
    border: 0.25px solid rgba(0, 0, 0, 0.103);
}
#userimg{
    position: relative;
    left: 30px;
    top: 50px;
    width: 200px;
    height: 200px;
    background-color: rgba(20, 20, 8, 0.043);
}
.detail{
    background-color: rgba(20, 20, 8, 0);
    position: relative;
    text-align: center;
    width: 300px;
    height: 35px;
    left: 250px;
    bottom: 170px;
    margin-top: 20px;
    
}
.detail1{
    background-color: rgba(20, 20, 8, 0);
    position: relative;
    text-align: center;
    width: 300px;
    height: 60px;
    left: 250px;
    bottom: 170px;
    margin-top: 20px;
    
}
.button1{
    position: relative;
    bottom: 165px;
    left: 240px;
    width: 290px;
    height: 50px;
    background-color: rgba(137, 43, 226, 0.155);
}
.img{
    width: 200px;
    height: 200px;
}

</style>