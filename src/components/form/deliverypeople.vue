<template>
  <div id="deliver_page">
      
<div id="edit">
  <el-dialog
    title="用户信息修改"
    :visible.sync="editactive"
    width="35%"
  >
    <div>

        <el-form ref="form" :model="sizeForm" label-width="100px" size="mid">
  <el-form-item label="姓名:" >
    <el-input v-model="sizeForm.username" placeholder="请输入需要修改的姓名" class="input_edit"></el-input>
  </el-form-item>

  <el-form-item label="性别:">
    <el-select v-model="sizeForm.sex" placeholder="请选择性别">
      <el-option label="男" value="man"></el-option>
      <el-option label="女" value="woman"></el-option>
    </el-select>
  </el-form-item>

    <el-form-item label="职位:" >
    <el-select v-model="sizeForm.position" placeholder="请选择职位">
      <el-option label="用户" value="commonpeople"></el-option>
      <el-option label="配送员" value="deliverypeople"></el-option>
    </el-select>

  </el-form-item>
</el-form>


    </div>


    <span slot="footer" class="dialog-footer">
    <el-button @click='canceldeliverychange()' >取 消</el-button>
    <el-button type="primary" @click='delivertchange()'>确 定</el-button>
  </span>
</el-dialog>
  </div>

      <div id="table">
      <el-table
       v-loading="loading"
      :header-cell-style="{color:'#333',fontFamily:'MicrosoftYaHeiUI',fontSize:'14px',fontWeight:900,height:'10px'}"
      :row-style="{fontSize:'12]px',color:'#666',fontFamily:'MicrosoftYaHeiUI'}"	
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%">
      
        <el-table-column
        prop="id"
        label="ID"
        width="100">
      </el-table-column>

      <el-table-column 
        prop="createTime"
        label="创建时间"
        sortable
        width="180">
      </el-table-column>

    
      
      <el-table-column
        prop="username"
        label="姓名"
        
        width="200">
      </el-table-column>

      <el-table-column
        prop="gender"
        label="性别"
        width="160">
      </el-table-column>

       <el-table-column
        prop="profession"
        label="职业"
        width="100">
       
      </el-table-column>

     
      
          <el-table-column
      align="right">
      <template slot="header" slot-scope="">
       
       <div class="search_btn">
         <input type="text" id="search_deliver" placeholder="请输入需要查询的数据">
          <el-button icon="el-icon-search" circle @click="de_search()"></el-button>  
       </div>
        
          
      </template>
       <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row,tableData)">Delete</el-button>
      </template>
    </el-table-column>

    </el-table>
  </div>

  <div class="delivery_page">
      <deliver-page :pepple_total=total @page='changepage'></deliver-page>
  </div>

  </div>
</template>

<script>

import DeliverPage from '../form/delivepage'



import axios from 'axios'
export default {
    name:'config',
    data() {
        return {
          editactive:false,
          tableData: [
          
          ],
          sizeForm: {
            curindex:'',
            id:'',
          username:'',
          position:'',
          sex:'',
          delivery: false,
          type: [],
          
        },
          total:'',
           search: '',
            loading: false
        }
        
    },
    components:{
        DeliverPage,
    
  
    },
    methods: {

      /*获取表单函数 */
      getlist()
      {
        
          axios.get('/travel/user/findAll').then(res=>{
                console.log('我是表格获取函数')
                console.log(res.data);
                
                /**这个数组获取了所有后端传过来的信息，只是没全部展示 */
                
                this.tableData=res.data.data.items;
                /*总条数 */
                this.total=res.data.data.total,
                console.log(this.tableData)
            
          }).catch(err=>{
            console.log(err);
          })
      },

      /*修改用户信息操作 */
       handleEdit(index, row) {
        console.log(index, row);
        console.log(this.editactive);
        this.editactive=true;

        /*表单填入值*/
        this.sizeForm.curindex=index
        this.sizeForm.id=row.id
    
        this.sizeForm.username=row.username;
        this.sizeForm.position=row.profession;
        this.sizeForm.sex=row.gender;
      },

      /*用户删除函数 */
      handleDelete(index, row,rows) {
        console.log(index, row,rows);
        
        this.$confirm('此操作将永久删除该人员, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          /*删除交互 */

          const id=row.id
          axios.delete('/travel/user/'+id).then(res=>
          {
            
            rows.splice(index,1);
            console.log(res)
            /*弹出框 */
             this.$message({
            type: 'success',
            message: '删除成功!'
          });

          }).catch(err=>{
            console.log(err)
          })


        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      
      },

      /*每次搜索后就清空搜索框 */
      de_search()
      {
        document.getElementById('search_deliver').value='';
        alert(this.tableData.lenght)
      },

      delivertchange()
      {
        /*确认的修改函数*/

          const id=this.sizeForm.id;
          alert(this.sizeForm.username)
           axios.put('/travel/user/'+id,{
            
               username:this.sizeForm.username
             
        }).then(res=>{

              this.$message({
            type: 'success',
            message: '修改成功!'
          });
          /*调用函数对表格进行更新*/
          
          this.changepage(this.total)
          console.log('这是修改函数返回的res')
          console.log(res)
        }).catch(err=>{
          console.log(err)

        })
        this.editactive=false
      },

      canceldeliverychange()
      {
          this.editactive=false
      },
     /*分页函数*/
    
    changepage(page)
    {
      /*当网卡时候增加个等待转圈圈特效 */
      this.loading=true
      axios.get('/travel/user/pageUser/'+page+'/'+5).then(res=>{
          console.log(res)
         this.loading=false
         this.tableData=res.data.data.rows
         
          
        }).catch(err=>{
          this.loading=false
          console.log(err)
        })
    }

    },


    /*获取表格函数 */
    created:function()
    {
      this.changepage(1)
    },
   
      
        
          
     
}



</script>

<style>
.el-table__header 
   {
    padding: 0;
    height: 4px;
}
.is-leaf{
  height: 10px;
}
.input_edit{
  display: inline-block;
  width: 220px;
}
#table{
  margin: auto;
  height: 400px;
  width: 1000px;
}

#edit_div{
  margin: auto;
  width: 400px;
  height: 800px;
  background-color: blue;
}
.search_text{
    width: 150px;
   
    height: 40px;
     float: left;
     padding-left: 80px;

}
.serche_btn{
    float: left;
}
.search_btn input{
  outline: none;
  padding: 4px;
  margin-right: 10px;
  border-radius:10px ;
}
#deliver_page{
    width: 100%;
    
}
.delivery_page{
  margin-top:-60px ;
}


</style>