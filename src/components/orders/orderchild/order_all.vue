<template>
  <el-table
    :data="tableData"
    :header-cell-style="{color:'#333',fontFamily:'MicrosoftYaHeiUI',fontSize:'14px',fontWeight:900,height:'10px'}"
      :row-style="{fontSize:'12]px',color:'#666',fontFamily:'MicrosoftYaHeiUI'}"	
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
           <el-form-item label="订单编号">
            <span>{{ props.row.orderNumber }}</span>
          </el-form-item>
           <el-form-item label=" 寄件人ID">
            <span>{{ props.row.userId }}</span>
          </el-form-item>
          <el-form-item label="寄件地址">
            <span>{{ props.row.sendAddress }}</span>
          </el-form-item>
          <el-form-item label="收件地址">
            <span>{{ props.row.receiveAddress }}</span>
          </el-form-item>
         
          <el-form-item label="收件人姓名">
            <span>{{ props.row.receiveName }}</span>
          </el-form-item>
          <el-form-item label="收件人手机号">
            <span>{{ props.row.receivePhoneNumber }}</span>
          </el-form-item>
         
         
          <el-form-item label="下单时间">
            <span>{{ props.row.createTime }}</span>
          </el-form-item>
          <el-form-item label="下单金额">
            <span>￥{{ props.row.price }}</span>
          </el-form-item>
          <el-form-item label="用户备注">
            <span>{{ props.row.remark }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
    
      label="订单 ID"
      prop="orderNumber"
      width="240">
    </el-table-column>
    <el-table-column
  
      label="收件人姓名"
      prop="receiveName"
      width="180">
    </el-table-column>
    
    <el-table-column
      label="收件地址"
      prop="receiveAddress"
     width="300"
      >
    </el-table-column>

    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row,tableData)">删除</el-button>
      </template>
    </el-table-column>

  </el-table>
</template>

<style>
  .demo-table-expand {
    font-size: 0;
    
  }
  .demo-table-expand label {
    margin: 0px;
    width: 100px;
    color: #2570d8;
  }
  .demo-table-expand .el-form-item {
  
    /*没这两个这个表格布局就很奇怪 */
    display: block;
    line-height: 0px;
    margin: 3px;
    width: 100%;
  }

  .el-table__header tr,
  .el-table__header th {
    padding: 0;
    height: 80px;
}
.el-table__body tr,
  .el-table__body td {
    padding: 0;
    height: 50px;
}
.el-table-column{
  display: block;
  height: 100px;
}

</style>

<script>
import axios from 'axios'
  export default {
    data() {
      return {
        tableData: [{
          order_number: '12987122',
          user_id:'12121',
          send_address:'长沙理工大学云塘校区性行健轩2栋422',
          receive_address:'长沙理工大学金盆岭校区西苑1栋311',
          receive_name: 'fanfan',
          receive_phone_number:'13142270000',
          create_time:'2019-10-19  13:32:42',
          price:'10',
          remark:'贵重物品，请轻拿轻放，不要造成不必要的损害'
         
        }, {
          order_number: '12987123',
           receive_phone_number:'13142270000',
           user_id:'12121',
       
          receive_name: '王小虎夫妻店',
         
        }, {
          order_number: '12987125',
           receive_phone_number:'13142270000',
            user_id:'12121',
          receive_name: '王小虎夫妻店',
          shopId: '10333'
        }, {
          order_number: '12987126',
           receive_phone_number:'13142270000',
           user_id:'12121',
          receive_name: '王小虎夫妻店',
       
        }]
      }
    },
     methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row,rows) {
        console.log(index, row);
        rows.splice(index,1)
      },
      getorderlist()
      {
     
          axios.get('/travel/order/pageOrder/1/5').then(res=>{
            console.log(res)
           this.tableData=res.data.data.rows
          }).catch(err=>{
            console.log(err)
          })
      },

    },
    created() {
      this.getorderlist()
    },

  }
</script>