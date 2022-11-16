<template>
<div>
    <el-form ref="form" :model="form" label-width="80px" class="form">
        <el-form-item label="昵称">
            <el-input v-model="form.nickName" style="width:260px"></el-input>
        </el-form-item>
        <el-form-item label="性别">
            <el-radio-group v-model="form.sex">
                <el-radio label="男"></el-radio>
                <el-radio label="女"></el-radio>
            </el-radio-group>
        </el-form-item>
         <el-form-item label="身高">
            <el-slider v-model="form.height" :max=210 :step=1 :min=100></el-slider>
             <span class="demonstration">单位：厘米</span>
        </el-form-item>
        <el-form-item label="工作地点">
                <el-cascader size="large" 
                :options="areaoptions" 
                v-model="form.workPlace" 
                style="width:300px">
                </el-cascader>
        </el-form-item>
        <el-form-item label="出生日期">
            <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.birthday" style="width: 100%;">
                </el-date-picker>
            </el-col>
        </el-form-item>
        <el-form-item label="收入情况">
            <el-select v-model="form.income" placeholder="请选择">
                <el-option v-for="item in incomeoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
                </el-select>
        </el-form-item>
        <el-form-item label="学习经历">
            <el-select v-model="form.education" placeholder="请选择">
                <el-option v-for="item in educationoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
                </el-select>
        </el-form-item>
        <el-form-item label="婚姻情况">
            <el-select v-model="form.isMarry" placeholder="请选择">
                <el-option v-for="item in ismarryoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
                </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit" v-loading="flag">确认提交</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
</div>
</template>

<script>
import {updateUserDetail,getUserDetail} from '../../../api/userDetail'
import {regionData} from 'element-china-area-data'
export default {
    name:"UserDetail",
     data() {
      return {
        form: {
          nickName: '',
          birthday: '',
          workPlace: [],
          income:"",
          isMarry:"",
          height:100,
          education:"",
          sex:"",
        },
        areaoptions: regionData,
        ismarryoptions:[
            {
          value: "未婚",
          label: "未婚"
        }, {
          value: "离异",
          label: '离异'
        }, {
          value: "离异有孩子",
          label: '离异有孩子'
        }, {
          value: "未婚有孩子",
          label: '未婚有孩子'
        }
        ],
        incomeoptions:[
            {
          value: 1,
          label: "0~1500"
        }, {
          value: 2,
          label: '1500~3000'
        }, {
          value: 3,
          label: '3000~6000'
        }, {
          value: 4,
          label: '6000~9000'
        }, {
          value: 5,
          label: '9000以上'
        }
        ],
         educationoptions:[
            {
          value: "初中以下",
          label: "初中以下"
        }, {
          value: "高中",
          label: '高中'
        }, {
          value: "中专",
          label: '中专'
        }, {
          value: "大专",
          label: '大专'
        }, {
          value: "本科",
          label: '本科'
        },
        {
          value: "研究生",
          label: '研究生'
        },
         {
          value: "博士及以上",
          label: '博士及以上'
        },
        ],
       flag:false
      }
    },
    methods: {
      onSubmit() {
        this.flag=true
       if(this.form.nickName&&this.form.birthday&&this.form.workPlace&&this.form.income&&this.form.isMarry&&this.form.height&&this.form.education&&this.form.sex){
        updateUserDetail(this.form).then(res=>{
            if(res.msg =="更新成功" || res.msg == "插入成功"){
              this.$message({
              message: '更新成功!',
              type: 'success'
              });
               this.flag=false
            }else if(res.code == 401 || res.code == 403){
              this.flag=false
              localStorage.removeItem("token")
              this.$router.replace("/login")
            }else{
              this.$message({
              message: '服务器错误，修改失败',
              type: 'warning'
               });
               this.flag=false
            }
        },err=>{
            console.log(err)
        })
       }else{
        this.$message('选项不能为空');
        this.flag=false
       }
      },
    },
    mounted() {
      getUserDetail().then(res=>{
        if(res.msg=="查询成功"){
          this.form = res.data
        this.form.workPlace = JSON.parse(res.data.workPlace)
        }else if(res.msg == "用户信息为空"){
          this.$message({
              message: '这是您首次填写资料',
              type: 'success'
              });
        }else{
           localStorage.removeItem("token")
              this.$router.replace("/login")
        }
      },err=>{
        console.log(err)
      })
    },
}
</script>

<style scoped>

</style>