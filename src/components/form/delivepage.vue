<template>
   <div class="block">
    
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="5"  
      background
      layout="prev, pager, next, jumper"
      :total="pagetotal">
    </el-pagination>
  </div>    
</template>

<script>
import axios from 'axios'
export default {
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
     
          this.$emit('page',val)

        console.log(`当前页: ${val}`);
        console.log(this.pepple_total);      
      },
      /*因为父子组件传值:total对传过来不同类型的报错，所以只能子组件再申请请求 */
     getlist()
      {
          axios.get('/travel/user/findAll').then(res=>{
                console.log('我是表格获取函数')
                console.log(res.data);
                /**这个数组获取了所有后端传过来的信息，只是没全部展示 */
                
                /*总条数 */
                this.pagetotal=res.data.data.total,
                console.log(this.tableData)
            
          }).catch(err=>{
            console.log(err);
          })
      },


    },
   
      
    data() {
      return {
    
        currentPage3: 1,
        pagetotal:'',
              }
        },
        created() {
          this.getlist()
        },
}
</script>

<style>
.block{
    margin-top:50px ;   
}
</style>