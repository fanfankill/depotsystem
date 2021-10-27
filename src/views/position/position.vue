<template>
  <div>

       <el-skeleton  :loading="boxloading" animated >
      <template slot="template">
         
         
        <div>
            <el-skeleton-item
          variant="div"
          class="topshowdiv"
          style="width:100px;height:40px"
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
      <!--新增车位弹窗子组件 -->
    <addposition
      :changebox="addpositonbox"
      @changebox="positionchange"
    ></addposition>

    <!-- 修改基本停车区域信息弹窗 -->
    <editposition ref="mychild" @toclose="fatherclose"></editposition>

    <el-button
      style="margin-bottom: 20px"
      type="primary"
      @click="addpositonbox = true"
      >新增区域</el-button
    >

    <!-- 停车区域展示表格 -->
    <el-table :data="tableData">
      <el-table-column prop="position" label="停车区域" width="140">
      </el-table-column>
      <el-table-column prop="fare" label="区域价格">
        <template slot-scope="scope"> ￥{{ scope.row.fare }} </template>
      </el-table-column>
      <el-table-column prop="monthfare" label="月租价格">
        <template slot-scope="scope"> ￥{{ scope.row.monthfare }} </template>
      </el-table-column>
      <el-table-column prop="fixedfare" label="永久价格">
        <template slot-scope="scope"> ￥{{ scope.row.fixedfare }} </template>
      </el-table-column>
      <el-table-column prop="decration" label=" 区域描述" width="350">
      </el-table-column>

      <el-table-column label="操作" width="250">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="toeditparking(scope.row)"
            type="primary"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="deleteposition(scope.row)"
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
import addposition from "./positionchild/addposition";
import editposition from './positionchild/editposition'
export default {
  mounted: function () {
  
        this.getallposition();

  },
  components: {
    addposition,
    editposition
  },
  data() {
    return {
      //骨架加载
      boxloading:true,
      //停车区域数组
      tableData: [],
      //新增区域弹窗
      addpositonbox: false,
      //修改区域弹窗
      isedit:false,
      //修改信息存储对象
      editobj:{}
    };
  },
  methods: {
    //获取车位
    getallposition() {
      this.$axios.get("/getallposition").then((res) => {
        this.tableData = res.data.lists;
        this.boxloading=false
      });
    },
    //删除车位
    deleteposition(row) {
      this.$confirm("是否要删除该区域？", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        console.log(row.position);
        this.$axios
          .post("/deleteposition", {
            position: row.position,
          })
          .then((res) => {
            console.log(res);

            this.$message({
              type: res.data.flag == 1 ? "success" : "error",
              message: res.data.message,
            });

            //重新获取数据
            this.getallposition();
          });
      });
    },
    //修改停车区域基本信息
    toeditparking(row)
    {
      this.isedit=true
        this.editobj=row
      this.$refs.mychild.showmymessage( this.isedit,this.editobj)
       

       
    },
    //修改停车区域子传父
    fatherclose:function(data)
    {
        this.isedit=data
        this.getallposition()
    },

    //新增停车区域子传父
    positionchange(data) {
      this.addpositonbox = data;
      this.getallposition();
    },
  },
};
</script>

<style>
</style>