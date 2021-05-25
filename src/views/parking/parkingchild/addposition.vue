<template>
  <div>
     

<el-dialog
  title="提示"
  :visible.sync="addpositonbox"
  width="40%"
  >
  <table id="addpositontable">
      <tr>
        <td style="width:100px"><el-tag>区域名称</el-tag></td>
      <td ><el-input v-model="positionname" placeholder="请输入内容"></el-input>
</td>
      </tr>
        <tr>
        <td><el-tag>区域价格</el-tag></td>
      <td><el-input v-model="positionfare" placeholder="请输入小时价格"></el-input>
</td>
      </tr>
        <tr>
        <td><el-tag>区域描述</el-tag></td>
      <td><el-input v-model="positiondecscraption" placeholder="请输入描述内容"></el-input>
</td>
      </tr>
  </table>
  <span slot="footer" class="dialog-footer">
    <el-button @click="addpositonbox = false">取 消</el-button>
    <el-button type="primary" @click="addposition">确 定</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script>
export default {
    props:{
        changebox:Boolean
    },
    watch:{
        changebox(newval)
        {
            this.addpositonbox=newval;
        },
        addpositonbox:function(){
            this.$emit('changebox',this.addpositonbox)
            
        }
    },
     data() {
      return {
          addpositonbox:false,
        //新增区域信息
        positionname:'',
        positionfare:'',
        positiondecscraption:'',

      };
    },
    methods:{
        //新增区域交互
        addposition()
        {
            if(this.positionname&&this.positionfare)
            {
                 this.$axios.post('/addposition',{
                position:this.positionname,
                fare:this.positionfare,
                decration:this.positiondecscraption
            }).then(res=>{
                console.log(res);
                if(res.data.code==1)
                {
                      this.$message({
          message: res.data.message,
          type: 'success'
        });
         this.addpositonbox=false
                }
                else{
                      this.$message({
          message: res.data.message,
          type: 'warning'
        });
                }
            }).catch(err=>{
                console.log(err);
                 this.addpositonbox=false
            })
            }
            else{
                 this.$message({
          message: "信息填写完整",
          type: 'warning'
        });
            }
           
           
        }
    }
   
    }

</script>

<style>
#addpositontable tr{
    height: 60px;
}

</style>