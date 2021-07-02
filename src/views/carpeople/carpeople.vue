<template>
  <div>

      <el-skeleton  :loading="boxloading" animated >
      <template slot="template">
         
         
        <div>
            <el-skeleton-item
          variant="div"
          class="topshowdiv"
          style="width:130px;height:40px"
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
           <!-- 新增车主信息弹窗 -->
    <addpeople
      :addchange="isaddmessage"
      @childchange="addpeoplechange"
    ></addpeople>

    <el-button
      type="primary"
      @click="isaddmessage = true"
      style="margin-bottom: 20px"
      >新增车主信息</el-button
    >

    <!-- 给固定车位续费弹窗 -->

    <el-dialog title="固定车位续费" :visible.sync="isaddcartime" width="30%">
      <table id="addtimebox">
        <tr>
          <td style="width: 100px"><el-tag>车主姓名</el-tag></td>
          <td>{{ addcarobj.CarpersonName }}</td>
        </tr>
        <tr>
          <td><el-tag>车牌编号</el-tag></td>
          <td>{{ addcarobj.CarNumber }}</td>
        </tr>
        <tr>
          <td><el-tag>车位编号</el-tag></td>
          <td>{{ addcarobj.CarportNumber }}</td>
        </tr>

        <tr>
          <td><el-tag>每月价格</el-tag></td>
          <td>￥{{ addcarobj.monthfare }}</td>
        </tr>

        <tr>
          <td><el-tag>到期时间</el-tag></td>
          <td v-if="addcarobj.DueDate">
            {{ addcarobj.DueDate.slice(0, 10) }}
          </td>

          <td v-else>暂无信息</td>
        </tr>

        <tr>
          <td><el-tag>续费时长</el-tag></td>
          <td>
            <el-select v-model="toaddtime" placeholder="请选择">
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
          <td><el-tag>总金额</el-tag></td>
          <td style="color: grey">￥{{ totaladdmoney }}</td>
        </tr>
      </table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="isaddcartime = false">取 消</el-button>
        <el-button type="primary" @click="addcartime">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 表格展示数据 -->
    <el-table :data="tableData" 
   >
      <el-table-column prop="PersonName" label="车主姓名" width="140">
      </el-table-column>
      <el-table-column prop="CarNumber" label="车牌号码" width="180">
      </el-table-column>
      <el-table-column prop="CarportNumber" label="车位编号" width="180">
      </el-table-column>
      <el-table-column prop="DueDate" label="到期时间" width="180">
        <template slot-scope="scope">
          <span v-if="scope.row.DueDate">{{
            scope.row.DueDate.substr(0, 10)
          }}</span>
          <span v-else><el-tag type="danger">已到期</el-tag></span>
        </template>
      </el-table-column>
      <el-table-column prop="Adress" label="地址"> </el-table-column>
      <el-table-column prop="Age" label="年龄"> </el-table-column>
      <el-table-column prop="Phone" label="手机号码"> </el-table-column>
      <el-table-column label="操作" width="250">
        <template slot-scope="scope">
          <el-button size="mini" type="warning" @click="toaddcartime(scope.row)"
            >续费</el-button
          >
          <el-button size="mini" type="primary">修改</el-button>

          <el-button
            size="mini"
            type="danger"
            @click="deletepeoplemes(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
      </template>
      </el-skeleton>


  </div>
</template>

<script>
import addpeople from "./carpeoplechild/addpeople";
export default {
  mounted: function () {
    setTimeout(()=>{
      this.boxloading=false
       this.getpersonmes();
    },1000)
   
  },
  watch: {
    toaddtime: function (newval) {
      console.log(newval);
      this.totaladdmoney = newval * Number(this.addcarobj.monthfare);
    },
  },
  components: {
    addpeople: addpeople,
  },

  data() {
    return {
      //骨架
      boxloading:true,

      tableData: [],
      //新增车主信息弹窗
      isaddmessage: false,
      //续费弹窗
      isaddcartime: false,
      //续费对象
      addcarobj: {},
      //续费时长总金额
      totaladdmoney: 0,
      //修改的对象
      editpersonmessage: {},

      //时间数组
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
      //最后选择的续费时长
      toaddtime: "",
    };
  },
  methods: {
    //获取所有车主信息
    getpersonmes() {
      this.$axios.get("/getpersonmes").then((res) => {
        console.log(res);
        this.tableData = res.data.result;
      });
    },

    //修改车主信息
    editpersoncarmes(row) {
      this.carpersonshow = true;
      this.editpersonmessage = row;
    },
    //固定车位续费
    toaddcartime(row) {
      //每次点开要先清空数据
      (this.totaladdmoney = 0), (this.toaddtime = "");

      this.isaddcartime = true;
      //将该行数据存放到对象中
      this.addcarobj = row;
    },
    //发送续费请求
    addcartime() {
      //先保证选择了续费时间才能提交请求
      if (this.toaddtime) {
        this.$axios
          .post("/addcartime", {
            CarportNumber: this.addcarobj.CarportNumber,
            currentdate: this.addcarobj.DueDate,
            addtime: this.toaddtime,
            totalfare:this.totaladdmoney
          })
          .then((res) => {
            //续费成功提示
             this.messageBox(res.data.message,'success')
             this.isaddcartime=false
             //重新加载数据
             this.getpersonmes()

            console.log(res);

          });
      }else{
        this.messageBox("请先选择续费时长",'warning')
      }
    },

    //对车主信息的删除 并且会连接车位信息一起变化
    deletepeoplemes(row) {
      console.log(row);
      this.$axios
        .post("/deletepersonmes", {
          CarNumber: row.CarNumber,
          CarportNumber: row.CarportNumber,
        })
        .then((res) => {
          console.log(res);
          this.$message({
            message: res.data.message,
            type: "success",
          });
          this.getpersonmes();
        });
    },

    //新增车主子组件传参
    addpeoplechange(data) {
      this.isaddmessage = data;
      //重新获取表单
      this.getpersonmes();
    },
  },
};
</script>

<style>
#persontable input {
  margin-left: 20px;
}
#addpeopletable {
  margin: auto;
}
#addpeopletable tr {
  height: 50px;
}

/**车位展示样式*/
.carportshow {
  display: flex;
  justify-content: space-around;
  width: 100%;
}
.carportshow sapn {
  display: inline-block;
}

/**续费弹窗 */
#addtimebox tr {
  height: 60px;
}
</style>