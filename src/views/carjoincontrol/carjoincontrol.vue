<template>
  <div>

          <el-skeleton  :loading="boxloading" animated >
      <template slot="template">
         
         
        <div>
            <el-skeleton-item
          variant="div"
          class="topshowdiv"
          style="width:220px;height:40px"
        />
          
        </div>
        <div>
            <el-skeleton-item
          variant="div"
          class="topshowdiv"
          style="width:100%;height:400px;margin-top:20px"
        />
        </div>
         
      </template>

   <template>
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
    <el-button type="primary" v-if="!DoneValue" @click="removecarjoin">驶出</el-button>
    <el-button type="primary" v-else @click="carjoinend=false">确 定</el-button>
  </span>
</el-dialog>

  <el-select v-model="DoneValue" placeholder="请选择" style="margin-bottom:10px">
    <el-option
      v-for="item in donelist"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>

        <el-table :data="tableData">
            <el-table-column prop="Id" label="ID" width="140">
            </el-table-column>
            <el-table-column prop="CarNumber" label="车牌号码" width="180">
                <template slot-scope="scope">
                    {{scope.row.CarNumber.substr(0,2)}}-{{scope.row.CarNumber.substr(2,8)}}
                </template>
            </el-table-column>
            <el-table-column prop="ComeTime" label="进入时间"> 
                <template slot-scope="scope">
                    <span >{{scope.row.ComeTime.slice(0, 10)+" "+scope.row.ComeTime.slice(11, 16)}}</span>
                </template>
            </el-table-column>
             <el-table-column prop="LeaveTime" label="离开时间">
                   <template slot-scope="scope">
                    <span  v-show="scope.row.IsDone==1" >{{scope.row.LeaveTime.slice(0, 10)+" "+scope.row.LeaveTime.slice(11, 16)}}</span>
                     <span style="color:gray" v-show="scope.row.IsDone==0">未离开</span>
                </template>
             </el-table-column>
               <el-table-column prop="position" label="停车区域">
           </el-table-column>
           <el-table-column prop="CarportNumber" label="车位编号">
           </el-table-column>
             <el-table-column label="操作" >
      <template slot-scope="scope" >
      
        <el-button v-if="DoneValue==0"
          size="mini"
          type="primary"
          @click="searchcarjoin(scope.row)"
            >出库</el-button>

             <el-button v-else
          size="mini"
          type="success"
          @click="searchcarjoin(scope.row)"
            >详细</el-button>
      </template>

      
    </el-table-column>
        </el-table>
   </template>
          </el-skeleton>
  </div>
</template>

<script>
export default {
    watch:
    {
        DoneValue:function(newvalue)
        {
            console.log(newvalue);
            this.getallcarjoin()
        }
    },
    created:function()
    {
       setTimeout(()=>{
           this.boxloading=false
            this.getallcarjoin()
       },1000)
    },
    data() {
        return {
            //骨架
            boxloading:true,
            tableData:[],

            carjoinend:false,

            //结账账单
            costlist:{},

            joinId:'',
            CarportNumber:'',

            //选择类型
            DoneValue:0,
            donelist:[
                {label:'已出库',
                value:1},
                {label:'未出库',
                value:0}
            ]
        }
    },
    methods:{
        //获取车辆列表
        getallcarjoin()
        {

            this.$axios.get('/getallcarjoin?isdone='+this.DoneValue).then(res=>{
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
                CarPortNumber:this.CarPortNumber,
                //用于总表统计
                type:0,
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