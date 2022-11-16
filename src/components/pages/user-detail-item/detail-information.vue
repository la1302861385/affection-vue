<template>
  <div>
    <el-form ref="form" :model="form" label-width="100px" class="form">
     <el-form-item label="籍贯">
                <el-cascader size="large" 
                :options="areaoptions" 
                v-model="form.nativePlace" 
                style="width:300px">
                </el-cascader>
        </el-form-item>
        <el-form-item label="体型">
            <el-select v-model="form.shape" placeholder="请选择">
                <el-option v-for="item in shapeoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
                </el-select>
        </el-form-item>
         <el-form-item label="体重">
            <el-slider v-model="form.weight" :max=200 :step=1></el-slider>
             <span class="demonstration">单位：千克</span>
        </el-form-item>
         <el-form-item label="星座">
            <el-select v-model="form.constellation" placeholder="请选择">
                <el-option v-for="item in constellationoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
                </el-select>
        </el-form-item>
         <el-form-item label="民族">
            <el-select v-model="form.nation" placeholder="请选择">
                <el-option v-for="item in nationoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
                </el-select>
        </el-form-item>
        <el-form-item label="有没有孩子">
            <el-select v-model="form.isHaveChild" placeholder="请选择">
                <el-option v-for="item in childoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
                </el-select>
        </el-form-item>
        <el-form-item label="是否想要孩子" >
            <el-select v-model="form.isWantChild" placeholder="请选择">
                <el-option v-for="item in wantchildoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
                </el-select>
        </el-form-item>
        <el-form-item label="何时结婚">
            <el-select v-model="form.whenMarry" placeholder="请选择">
                <el-option v-for="item in whenmarryoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
                </el-select>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {regionData} from 'element-china-area-data'
export default {
    data() {
      return {
        form:{
          nativePlace:"",
          shape:"",
          constellation:"",
          nation:"",
          isHaveChild:"",
          isWantChild:"",
          whenMarry:"",
          weight:"",
        },
         areaoptions: regionData,
         shapeoptions:[
            {
          value: "匀称体型",
          label: "匀称体型"
        }, {
          value: "瘦小",
          label: '瘦小'
        }, {
          value: "瘦高",
          label: '瘦高'
        }, 
        {
          value: "较胖",
          label: '较胖'
        }, 
        {
          value: "魁梧",
          label: '魁梧'
        }, 
         {
          value: "有健身痕迹",
          label: '有健身痕迹'
        }, 
        {
          value: "保密",
          label: '保密'
        }, 
        ],
        constellationoptions:[
           {
          value: "牡羊座",
          label: " 牡羊座(03.21-04.20)"
        },
         {
          value: "金牛座",
          label: "金牛座(04.21-05.20)"
        },
         {
          value: "双子座",
          label: "双子座(05.21-06.21)"
        },
         {
          value: "巨蟹座",
          label: "巨蟹座(06.22-07.22)"
        },
         {
          value: "狮子座",
          label: "狮子座(07.23-08.22)"
        },
         {
          value: " 处女座",
          label: " 处女座(08.23-09.22)"
        },
         {
          value: " 天秤座",
          label: " 天秤座(09.23-10.22)"
        },
         {
          value: "天蝎座",
          label: "天蝎座(10.23-11.21)"
        },
         {
          value: "射手座",
          label: "射手座(11.22-12.21)"
        },
         {
          value: "魔羯座",
          label: "魔羯座(12.22-01.19)"
        },
         {
          value: "水瓶座",
          label: "水瓶座(01.20-02.19)"
        },
         {
          value: " 双鱼座",
          label: "双鱼座(02.20-03.20)型"
        },
        ],
        nationoptions:[
           {
          value: "汉族",
          label: "汉族"
        }, 
         {
          value: "朝鲜族",
          label: "朝鲜族"
        }, 
         {
          value: "藏族",
          label: "藏族"
        }, 
         {
          value: "蒙古族",
          label: "蒙古族"
        }, 
         {
          value: "回族",
          label: "回族"
        }, 
         {
          value: "满族",
          label: "满族"
        }, 
         {
          value: "维吾尔族",
          label: "维吾尔族"
        }, 
         {
          value: "壮族",
          label: "壮族"
        }, 
         {
          value: "彝族",
          label: "彝族"
        }, 
         {
          value: "苗族",
          label: "苗族"
        }, 
         {
          value: "侗族",
          label: "侗族"
        }, 
         {
          value: "瑶族",
          label: "瑶族"
        }, 
         {
          value: "白族",
          label: "白族"
        }, 
         {
          value: "布依族",
          label: "布依族"
        }, 
         {
          value: "傣族",
          label: "傣族"
        }, 
         {
          value: "京族",
          label: "京族"
        }, 
         {
          value: "黎族",
          label: "黎族"
        }, 
         {
          value: "羌族",
          label: "羌族"
        }, 
         {
          value: "怒族",
          label: "怒族"
        }, 
         {
          value: "佤族",
          label: "佤族"
        }, 
         {
          value: "水族",
          label: "水族"
        }, 
         {
          value: "畲族",
          label: "畲族"
        }, 
         {
          value: "土族",
          label: "土族"
        }, 
         {
          value: "阿昌族",
          label: "阿昌族"
        }, 
         {
          value: "哈尼族",
          label: "哈尼族"
        }, 
         {
          value: "景颇族",
          label: "景颇族"
        }, 
         {
          value: "珞巴族",
          label: "珞巴族"
        }, 
         {
          value: "锡伯族",
          label: "锡伯族"
        }, 
         {
          value: "德昂(崩龙)族",
          label: "德昂(崩龙)族"
        }, 
         {
          value: "保安族",
          label: "保安族"
        }, 
         {
          value: "基诺族",
          label: "基诺族"
        }, 
         {
          value: "门巴族",
          label: "门巴族"
        }, 
         {
          value: "毛南族",
          label: "毛南族"
        }, 
         {
          value: "赫哲族",
          label: "赫哲族"
        }, 
         {
          value: "裕固族",
          label: "裕固族"
        }, 
         {
          value: "撒拉族",
          label: "撒拉族"
        }, 
         {
          value: "独龙族",
          label: "独龙族"
        }, 
         {
          value: "普米族",
          label: "普米族"
        }, 
         {
          value: "仫佬族",
          label: "仫佬族"
        }, 
         {
          value: "仡佬族",
          label: "仡佬族"
        }, 
         {
          value: "东乡族",
          label: "东乡族"
        }, 
         {
          value: "拉祜族",
          label: "拉祜族"
        }, 
         {
          value: "土家族",
          label: "土家族"
        }, 
         {
          value: "纳西族",
          label: "纳西族"
        }, 
         {
          value: "傈僳族",
          label: "傈僳族"
        }, 
         {
          value: "布朗族",
          label: "布朗族"
        }, 
         {
          value: "哈萨克族",
          label: "哈萨克族"
        }, 
        {
          value: "达斡尔族",
          label: "达斡尔族"
        }, 
        {
          value: "鄂伦春族",
          label: "鄂伦春族"
        }, 
        {
          value: "鄂温克族",
          label: "鄂温克族"
        }, 
        {
          value: "俄罗斯族",
          label: "俄罗斯族"
        }, 
        {
          value: "塔塔尔族",
          label: "塔塔尔族"
        }, 
        {
          value: "塔吉克族",
          label: "塔吉克族"
        }, 
        {
          value: "柯尔克孜族",
          label: "柯尔克孜族"
        }, 
        {
          value: "乌兹别克族",
          label: "乌兹别克族"
        }, 
        ],
        childoptions:[
           {
          value: "没有小孩",
          label: "没有小孩"
        }, 
         {
          value: "有孩子且住在一起",
          label: "有孩子且住在一起"
        }, 
         {
          value: "有孩子没有住在一起",
          label: "有孩子没有住在一起"
        }, 
        ],
        wantchildoptions:[
           {
          value: "想要孩子",
          label: "想要孩子"
        }, 
         {
          value: "不想要孩子",
          label: "不想要孩子"
        }, 
         {
          value: "还没有决定",
          label: "还没有决定"
        }, 
        ],
        whenmarryoptions:[
           {
          value: "闪婚",
          label: "闪婚"
        }, 
         {
          value: "一年内",
          label: "一年内"
        }, 
         {
          value: "两年以上",
          label: "两年以上"
        }, 
         {
          value: "视情况而定",
          label: "视情况而定"
        }, 
        ],
      }
    },
}
</script>

<style>

</style>