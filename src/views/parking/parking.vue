<template>
  <div>
    <!-- 新增车位弹出窗 -->
    <el-dialog title="新增车位" :visible.sync="addpark">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="140px"
        class="demo-ruleForm"
      >
        <el-form-item label="小时计费：" prop="cost">
          <el-input style="width: 200px" v-model="ruleForm.cost"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >立即创建</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <!-- 修改车位信息弹窗 -->
    <el-dialog title="修改车位信息" :visible.sync="editpark">
      <table id="edittab">
        <tr>
          <td><el-tag>车位编号</el-tag></td>
          <td>
            <el-input
              placeholder="车位编号"
              v-model="editinputid"
              :disabled="true"
            >
            </el-input>
          </td>
        </tr>
        <tr>
          <td><el-tag>停车区域</el-tag></td>
          <td>
             <el-select v-model="editposiion" placeholder="请选择停车区域">
    <el-option
      v-for="item in positions"
      :key="item.descration"
      :label="item.position"
      :value="item.position">
    </el-option>
  </el-select>
          </td>
        </tr>
        <tr>
          <td><el-tag>是否空闲</el-tag></td>
          <td>
            <el-switch
              :active-value="1"
              :inactive-value="0"
              style="display: block"
              v-model="editiscar"
              active-color="#13ce66"
              inactive-color="#ff4949"
              active-text="是"
              inactive-text="否"
            >
            </el-switch>
          </td>
        </tr>
        <tr>
          <td><el-tag>固定车位</el-tag></td>
          <td>
            <el-switch
              style="display: block"
               :active-value="1"
                :inactive-value="0"
              v-model="editisfixed"
              active-color="#13ce66"
              inactive-color="#ff4949"
              active-text="是"
              inactive-text="否"
            >
            </el-switch>
          </td>
        </tr>
        <tr>
          <td><el-tag>车主姓名</el-tag></td>
          <td>
            <el-input placeholder="请输入车主姓名" v-model="editinputperson"> </el-input>
          </td>
        </tr>
        <tr>
          <td><el-tag>到期时间</el-tag></td>
          <td>
            <el-date-picker
              v-model="edittime"
              type="date"
              :disabled="true"
              placeholder="选择日期"
            >
            </el-date-picker>
          </td>
        </tr>
       
      </table>
       <span slot="footer" class="dialog-footer">
    <el-button @click="editpark = false">取 消</el-button>
    <el-button type="primary" @click="editparking">修 改</el-button>
  </span>
    </el-dialog>

    <div class="topbtn">
      <div>
        <el-input v-model="parkid" placeholder="请输入车位编号查询"></el-input>
        <el-button type="primary" size="small" @click="searchId"
          >搜索</el-button
        >
      </div>
      <el-button type="primary" @click="addpark = true">新增车位</el-button>
    </div>
    <div>
      <el-table :data="tableData">
        <el-table-column prop="CarportNumber" label="车位编号" width="140">
        </el-table-column>
          <el-table-column prop="position" label="车位区域">
        </el-table-column>
        <el-table-column prop="CarCost" label="小时计费" >
        </el-table-column>
        <el-table-column prop="HaveCar" label="是否空闲" width="80" align="center">
          <template slot-scope="scope">
            <el-tag type="danger" v-if="scope.row.HaveCar == 0">否</el-tag>
            <el-tag type="success" v-else>是</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="FixCar" label="是否固定车位"  align="center">
          <template slot-scope="scope">
            <el-tag type="danger" v-if="scope.row.FixCar == 0">否</el-tag>
            <el-tag type="success" v-else>是</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="CarpersonName" label="车主姓名">
          <template slot-scope="scope">
            {{ scope.row.CarpersonName || "暂无车主" }}
          </template>
        </el-table-column>
        <el-table-column prop="DueDate" label="到期时间">
          <template slot-scope="scope">
            <!-- 对传过来的时间进行处理 -->
            <span>{{
              scope.row.DueDate == null
                ? "无"
                : scope.row.DueDate.substring(0, 10)
            }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="toeditparking(scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="deleteparking(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  created: function () {
    this.getallparkings();
    this.getallpositons();
  },
  data() {
    return {
      tableData: [],
      addpark: false,
      editpark: false,
      
      //停车区域信息
      positions:[],
      //编辑弹窗
      editinputid:'',
      editposiion:'',
      editinputperson:'',
       edittime:'',
       editiscar:true,
      editisfixed:false,

      parkid: "",
      //是否固定
      ruleForm: {
        cost: "",
      },
      rules: {
        cost: [
          { required: true, message: "请输入小时计费价格", trigger: "change" },
        ],
      },
    };
  },

  methods: {
    //获取所有车位信息
    getallparkings() {
      this.$axios
        .get("/getallparking")
        .then((res) => {
          console.log(res);
          this.tableData = res.data.result;
        })
        .catch((err) => {
          console.log(err);
        });
    },
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
    //根据车位编号查询
    searchId() {
      console.log(this.parkid);
      if (this.parkid == "") {
        this.getallparkings();
      } else {
        this.$axios
          .post("/searchId", {
            CarportNumber: this.parkid,
          })
          .then((res) => {
            console.log(res);
            if (res.data.code == 0) {
              this.$message({
                message: res.data.message,
                type: "warning",
              });
            } else {
              this.$message({
                message: res.data.message,
                type: "success",
              });
              this.tableData = res.data.result;
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    //提交新增车位表单
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.ruleForm.cost);
          this.$axios
            .post("/addparking", {
              cost: this.ruleForm.cost,
            })
            .then((res) => {
              console.log(res);
              //重新获取更新的表单和弹窗消失
               this.$message({
            message: res.data.message,
            type: "success",
          });
              this.addpark = false;
              this.getallparkings();
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    //修改车位信息
    toeditparking(row) {
    
      this.editpark = true;
      this.editinputid=row.CarportNumber
      this.editposiion=row.position
      this.editinputperson=row.CarpersonName
       this.edittime=row.DueDate
         this.editiscar=(parseInt(row.HaveCar))
      this.editisfixed=(parseInt(row.FixCar))
    },
    //提交修改数据交互
    editparking()
    {
      this.$axios.post('/editparking',{
        HaveCar:this.editiscar,
        position:this.editposiion,
        FixCar:this.editisfixed,
        CarpersonName:this.editinputperson,
        CarportNumber:this.editinputid
      }).then(res=>{

         this.$message({
            message: res.data.message,
            type: "success",
          });
          this.getallparkings()
        console.log(res);
      }).catch(err=>{
        console.log(err);
      })
      this.editpark=false;
    },

    //删除车位信息
    deleteparking(row) {
      this.$axios
        .post("/deleteparking", {
          CarportNumber: row.CarportNumber,
        })
        .then((res) => {
          this.$message({
            message: res.data.message,
            type: "success",
          });
          this.getallparkings();
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
.topbtn {
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}
.topbtn div {
  width: 270px;
  display: flex;
  justify-content: space-between;
}
.topbtn input {
  justify-content: right;
  width: 200px;
}
#edittab tr{
  height: 60px;
}
#edittab td{
  width: 110px;
}
</style>