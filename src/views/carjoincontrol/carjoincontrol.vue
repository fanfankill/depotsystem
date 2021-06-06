<template>
  <div>
      <!-- 结账弹窗 -->
      <el-dialog
  title="车辆驶出"
  :visible.sync="carjoinend"
  width="30%"   
>
  <table id="carjointab">
      <tr><td><el-tag>价格</el-tag></td>
      <td><span style="color:grey">￥{{costlist.fare*costlist.hours}}</span></td >
      </tr>
      <tr><td><el-tag>小时单价</el-tag></td>
      <td><span style="color:grey">￥{{costlist.fare}}</span></td >
      </tr>
       <tr><td><el-tag>停车区域</el-tag></td>
      <td>{{costlist.position}}</td>
      </tr>
       <tr><td><el-tag>车位编号</el-tag></td>
      <td>{{costlist.carport}}</td >
      </tr>
         <tr><td><el-tag>驶入时间</el-tag></td>
      <td>{{costlist.startime}}</td >
      </tr>
      <tr><td><el-tag>驶出时间</el-tag></td>
      <td>{{costlist.leavetime}}</td >
      </tr>
      
       
  </table>
  <span slot="footer" class="dialog-footer">
    <el-button @click="carjoinend = false">取 消</el-button>
    <el-button type="primary" @click="removecarjoin">确 定</el-button>
  </span>
</el-dialog>

        <el-table :data="tableData">
            <el-table-column prop="Id" label="ID" width="140">
            </el-table-column>
            <el-table-column prop="CarNumber" label="车牌号码" width="180">
            </el-table-column>
            <el-table-column prop="ComeTime" label="进入时间"> 
                <template slot-scope="scope">
                    <span >{{scope.row.ComeTime.slice(0, 10)+" "+scope.row.ComeTime.slice(11, 16)}}</span>
                </template>
            </el-table-column>
             <el-table-column prop="LeaveTime" label="离开时间">
                   
             </el-table-column>
               <el-table-column prop="position" label="停车区域">
           </el-table-column>
           <el-table-column prop="CarportNumber" label="车位编号">
           </el-table-column>
             <el-table-column label="操作">
      <template slot-scope="scope">
      
        <el-button
          size="mini"
          type="primary"
          @click="searchcarjoin(scope.row)"
            >出库</el-button>
      </template>
    </el-table-column>

        </el-table>
  </div>
</template>

<script>
export default {
    created:function()
    {
        this.getallcarjoin()
    },
    data() {
        return {
            tableData:[],

            carjoinend:false,

            //结账账单
            costlist:{},

            joinId:'',
            CarportNumber:''
        }
    },
    methods:{
        //获取车辆列表
        getallcarjoin()
        {

            this.$axios.get('/getallcarjoin').then(res=>{
                console.log(res);
                this.tableData=res.data
            }).catch(err=>{
                console.log(err);
            })
        },
        //汽车出库
        searchcarjoin(row){
            this.joinId=row.Id
            console.log(this.costlist.id);
            this.CarPortNumber=row.CarportNumber
            this.carjoinend=true
            this.$axios.get('/searchcarjoin?Id='+row.Id).then(res=>{
                console.log(res);
               this.costlist=res.data.list
               console.log(this.costlist);
            }).catch(err=>{
                console.log(err);
            })
        },
        //提交离开请求
        removecarjoin()
        {   console.log(this.joinId);
            this.carjoinend=false
            this.$axios.post('/removecarjoin',{
                Id:this.joinId,
                totalfare:this.costlist.fare*this.costlist.hours,
                CarPortNumber:this.CarPortNumber
            }).then(res=>{
                console.log(res);
                 this.$message({
                message: res.data.message,
                type: "success",
              });
                this.getallcarjoin()
            }).catch(err=>{
                console.log(err);
            })

        }
    }
}
</script>

<style>
#carjointab tr{
    height: 60px;
}
#carjointab td{
    padding-right:20px;
}
</style>