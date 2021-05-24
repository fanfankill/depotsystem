<template>
  <div>
       <el-table :data="tableData">
            <el-table-column prop="AdminId" label="ID" width="140">
            </el-table-column>
            <el-table-column prop="AdminName" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="AdminRange" label="管辖范围"> </el-table-column>
               <el-table-column prop="CreateTime" label="创建时间">
                   <template slot-scope="scope">
            <!-- 对传过来的时间进行处理 -->
            <span>{{ scope.row.CreateTime.substring(0, 10) }}</span>
          </template>
           </el-table-column>
             <el-table-column label="操作">
      <template >
        <el-button
          size="mini"
          >编辑</el-button>
        <el-button
          size="mini"
          type="danger"
            >删除</el-button>
      </template>
    </el-table-column>

        </el-table>
  </div>
</template>

<script>
export default {
      data()  {
   return {
       tableData:[],
    };
    
  },
created:function(){
  this.getallperson()
},
  methods: {
    //获取所有管理员信息
    getallperson() {
        this.$axios.get("/getallperson")
        .then((res) => {
            this.tableData=res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
}
</script>

<style>

</style>