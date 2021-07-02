<template>
  <div>
      <el-dialog
  title="停车区域基本信息修改"
  :visible.sync="iseditposition"
  width="30%"
  >
   <table id="addpositontable">
         <tr>
        <td style="width:100px"><el-tag>区域名称</el-tag></td>
      <td ><el-input v-model="myedtobj.position" disabled placeholder="请输入区域名称"></el-input>
</td>
      </tr>
       
      <tr>
        <td style="width:100px"><el-tag>小时价格</el-tag></td>
      <td ><el-input v-model="myedtobj.fare" placeholder="请输入区域名称"></el-input>
</td>
      </tr>
        <tr>
        <td><el-tag>月租价格</el-tag></td>
      <td><el-input v-model="myedtobj.monthfare" placeholder="请输入小时价格"></el-input>
</td>
      </tr>
        <tr>
        <td><el-tag>永久价格</el-tag></td>
      <td><el-input v-model="myedtobj.fixedfare" placeholder="请输入描述内容"></el-input>
</td>
      </tr>

       <tr>
        <td><el-tag>区域描述</el-tag></td>
      <td><el-input v-model="myedtobj.decration" placeholder="请输入每月价格"></el-input>
</td>
      </tr>

  </table>
  <span slot="footer" class="dialog-footer">
    <el-button @click="iseditposition = false">取 消</el-button>
    <el-button type="primary" @click="tosubmin">修 改</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script>
export default {
        prop:{
            edtobj:Object
        },
        watch:{
            iseditposition:function()
            {
                this.$emit('toclose',this.iseditposition)
            },
            edtobj(newval)
            {
                this.myedtobj=newval
               this.iseditposition=newval.isedit
            }
        },
        data() {
            return {
                iseditposition:false,
                //存放position的那一行值
                myedtobj:{}

            }
        },
        methods:{
            //父方法传参过来
            showmymessage(isboolean,obj)
            {
                this.iseditposition=isboolean
                this.myedtobj=obj
               
            },
            //提交修改请求
            tosubmin()
            {
                this.$axios.post('editpositionbase',{
                    ...this.myedtobj
                }).then(res=>{
                    this.messageBox(res.data.message,'success')
                    this.iseditposition=false
                    
                    console.log(res);
                })
            }
        }
}
</script>

<style>

</style>