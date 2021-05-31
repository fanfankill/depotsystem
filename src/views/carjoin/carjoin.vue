<template>
  <div>
      <div class="left">
          <p>进出车辆登记表</p>
          <div class="carjoinform">
            <table class="jointable">
              <tr>
                <td>车牌号码：</td>
                <td><el-input v-model="carnumber" placeholder="请输入车牌号码"></el-input></td>
              </tr>
               <tr>
                <td>泊车区域：</td>
                <td>
                     <el-select v-model="toaddposition" placeholder="请选择停车区域">
    <el-option
      v-for="item in positions"
      :key="item.descration"
      :label="item.position"
      :value="item.position">
      <span style="float: left">{{ item.position }}</span>
      <span style="float: right; color: #8492a6; font-size: 13px">￥{{ item.fare }}</span>
    </el-option>
                     </el-select>
                </td>
              </tr>

              <tr>
                <td>车位选择：</td>
                <td>
                     <el-select v-model="postcarnumber" placeholder="请选择车位">
    <el-option
      v-for="item in freeparks"
      :key="item.CarportNumber"
      :label="item.CarportNumber"
      :value="item.CarportNumber">
      <span style="float: left">{{ item.CarportNumber }}</span>
      <span style="float: right; color: #8492a6; font-size: 13px">￥{{ item.CarCost }}</span>
    </el-option>
                     </el-select>
                </td>
              </tr>
              
              <tr>
                <td></td>
                <td><el-button type="primary" @click="addcarjoin">添加信息</el-button><el-button>重置</el-button></td>
              </tr>
            </table>

          </div>
      </div>
  </div>
</template>

<script>
export default {
watch:{
  //监听泊车区域的变化来改变剩余车位
  toaddposition:function(val){
    console.log(val);
    this.getfreepot()
  }
},

  created:function()
  {
    this.getallpositons()
  },
  data() {
    return {
      carnumber:'',

      //进出车辆表单
      toaddposition:'',
      positions:[],
      //剩余车辆
      freeparks:[],
      postcarnumber:'',
    }
  },
  methods:{
    //获取停车区域信息
    getallpositons()
    {
      this.$axios('/getposition').then(res=>{
        console.log(res);
        this.positions=res.data.lists
      }).catch(err=>{
        console.log(err);
      })
    },
    //获取车位区域对应空闲的车位
    getfreepot()
    {
      this.postcarnumber=''
      this.$axios.post('/selectpart',{
          position:this.toaddposition,
          haveCar:1,
      }).then(res=>{
        console.log(res);
        this.freeparks=res.data
      }).catch(err=>{
        console.log(err);
      })
    },

    //添加进出车辆记录
    addcarjoin()
    {
      this.$axios.post('/addcarjoin',{
        CarNumber:this.carnumber,
        position:this.toaddposition,
        CarportNumber:this.postcarnumber
      }).then(res=>{
        console.log(res);
       if(res.data.code==1)
       {
         //重新获取空闲车位
         this.getfreepot()

          this.$message({
          message: res.data.message,
          type: 'success'
        });
       }else{
          this.$message({
          message: res.data.message,
          type: 'error'
        });
       }
      }).catch(err=>{
        console.log(err);
      })
    }
  }
}
</script>

<style>
.left{
  text-align: center;
  line-height: 40px;
  height: 600px;
  width: 30%;

  background-color: rgb(242, 243, 242);
}
.jointable tr{
  height: 80px;
}
.jointable td{
  color: gray;
}
</style>