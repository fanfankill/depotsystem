<template>
  <div>
    <fan-dialog title="新增车主信息" :visible.sync="isaddmessage" width="80%">
      <table id="addpeopletable">
        <tr>
          <td style="width: 100px"><el-tag>车主姓名</el-tag></td>
          <td>
            <el-input
              v-model="PersonName"
              placeholder="请输入车主姓名"
            ></el-input>
          </td>
        </tr>
        <tr>
          <td><el-tag>车牌号码</el-tag></td>
          <td>
            <el-input style="width:35%;float:left" v-model="firtsCarNumber" placeholder="地区号"></el-input>
                <span>-</span>
                 <el-input style="width:60%" v-model="secondeCarNumber" placeholder="车牌号码"></el-input>
          </td>
        </tr>
        <tr>
          <td><el-tag>家庭地址</el-tag></td>
          <td>
            <el-input v-model="Adress" placeholder="请输入家庭住址"></el-input>
          </td>
        </tr>

        <tr>
          <td><el-tag>车主年龄</el-tag></td>
          <td>
            <el-input v-model="Age" placeholder="请输入车主年龄"></el-input>
          </td>
        </tr>

        <tr>
          <td><el-tag>手机号码</el-tag></td>
          <td>
            <el-input v-model="Phone" placeholder="请输入手机号码"></el-input>
          </td>
        </tr>

        <tr>
          <td><el-tag>车位选择</el-tag></td>
          <td>
            <!-- 车位选择 -->
            <el-select v-model="selectcarnumber" placeholder="请选择固定车位">
              <el-option
                v-for="item in nofixcarport"
                :key="item.CarportNumber"
                :label="item.CarportNumber"
                :value="{ value: item.CarportNumber, label: item.monthfare }"
              >
                <div class="carportshow">
                  <span>{{ item.CarportNumber }}</span>
                  <span style="color: #8492a6; font-size: 13px">{{
                    item.position
                  }}</span>
                  <span style="color: #8492a6; font-size: 13px"
                    >￥{{ item.monthfare }}</span
                  >
                </div>
              </el-option>
            </el-select>
          </td>
        </tr>

        <tr>
          <td><el-tag>时长选择</el-tag></td>
          <td>
            <el-select v-model="selecttime" placeholder="请选择">
              <el-option
                v-for="item in cartime"
                :key="item.id"
                :label="item.value"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </td>
        </tr>

        <tr>
          <td><el-tag>最终金额</el-tag></td>
          <td>
            <span>￥{{ totalfare }}</span>
          </td>
        </tr>
      </table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="isaddmessage = false">取 消</el-button>
        <el-button type="primary" @click="addpeoplemessage">确 定</el-button>
      </span>
    </fan-dialog>
  </div>
</template>

<script>
export default {
  props: {
    addchange: Boolean,
  },
  mounted: function () {
    this.getnotfixport();
  },
  watch: {
    addchange(newval) {
      this.isaddmessage = newval;
      //每次弹窗开关都会重新去获取数据
      this.getnotfixport()
    },
    isaddmessage:function()
    {
         this.$emit("childchange", this.isaddmessage)
    },

    //计算金额
    selectcarnumber: function (newv) {
      this.totalfare = Number(newv.label) * this.selecttime;
    },
    selecttime: function (newv) {
      this.totalfare = Number(this.selectcarnumber.label) * newv;
    },
  },
  data() {
    return {
      isaddmessage: false,
    //选择车位
      selectcarnumber: "",
    //选择时长
      selecttime: "",

      //获取未固定的车位数组
      nofixcarport:[],

       //车主信息
       //防止车牌号码自己打出-
      CarNumber: "",
      firtsCarNumber:"",
      secondeCarNumber:"",

      CarportNumber: "",
      PersonName: "",
      Adress: "",
      Age: "",
      Phone: "",

      //总金额
      totalfare: 0,
      //车位时长选择
      cartime: [
        {
          id: 1,
          value: "一个月",
        },
        {
          id: 3,
          value: "三个月",
        },
        {
          id: 6,
          value: "半年",
        },
        {
          id: 12,
          value: "一年",
        },
      ],
    };
  },

  methods: {
    //获取不是固定车位的信息
    getnotfixport() {
      this.$axios.get("/getnotfixport").then((res) => {
        console.log(res);
        this.nofixcarport = res.data.result;
      });
    },

     //新增车主信息
    addpeoplemessage() {
          this.CarNumber=this.firtsCarNumber+this.secondeCarNumber
         //先进价格表
        this.$axios.post('/getfare',{
          type:1,
          fare:this.totalfare
        }).then(res=>{
          console.log(res);

          if(res.data.flag==1)
          {
            //再去存入这个人进车位表
           this.$axios.post('/addpersonmes',{
        CarNumber:this.CarNumber,
        CarportNumber:this.selectcarnumber.value,
        PersonName:this.PersonName,
        Adress:this.Adress,
        Age:this.Age,
        Phone:this.Phone,
        //传的就是几个月的数字
        duetime:this.selecttime
      }).then(res=>{
        console.log(res);
        this.messageBox(res.data.message,'success')
        
        //重新获取车主信息和固定车位信息
      this.getnotfixport()
      this.isaddmessage=false
      })
          }
        })
     
    },
  },
};
</script>

<style>
</style>