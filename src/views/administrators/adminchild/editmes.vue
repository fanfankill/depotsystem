<template>
  <div>
      <fan-dialog
  title="基本信息修改"
  :visible.sync="istoedit"
  width="80%"
  >
    <table id="admineidttable">
        <tr>
            <td style="width:80px"><el-tag>姓名</el-tag></td>
            <td style="width:80%"><el-input v-model="basemessgae.nickname"></el-input></td>
        </tr>

         <tr>
            <td><el-tag>性别</el-tag></td>
            <td >  <el-select style="width:100%" v-model="basemessgae.sex" placeholder="请选择">
    <el-option
      v-for="item in sexoption"
      :key="item.id"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select></td>
        </tr>

         <tr>
            <td><el-tag>住址</el-tag></td>
            <td><el-input v-model="basemessgae.address"></el-input></td>
        </tr>

         <tr>
            <td><el-tag>个性签名</el-tag></td>
            <td><el-input type="textarea" :rows="3" v-model="basemessgae.privatemes"></el-input></td>
        </tr>
    </table>
  <span slot="footer" class="dialog-footer">
    <el-button @click="istoedit = false">取 消</el-button>
    <el-button type="primary" @click="submitmes">提 交</el-button>
  </span>
</fan-dialog>
  </div>
</template>

<script>
export default {
    data() {
        return {
            istoedit:false,
            //基本资料
            basemessgae:{},
            //性别选择
            sexoption:[
              {
                id:0,
                label:'男',
                value:'男'
              },  {
                id:1,
                label:'女',
                value:'女'
              },
            ]
        }
    },
    watch:{
      istoedit:function(){
        this.$emit('toldfather',this.istoedit)
      }
  },
    methods:{
      editmes(isedit,mymesage)
      {
        this.istoedit=isedit,
        this.basemessgae=mymesage

      },
      submitmes()
      {
        this.$axios.post('/editadminmessage',{
          nickname:this.basemessgae.nickname,
           sex:this.basemessgae.sex,
            address:this.basemessgae.address,
             privatemes:this.basemessgae.privatemes,
             AdminId:this.basemessgae.AdminId
        }).then(res=>{
          //更新vuex里面的name
          this.$store.commit('changename',this.basemessgae.nickname)
          
          this.messageBox(res.data.message,'success')
          this.istoedit=false
          console.log(res);
        })
      }
    }

    
}
</script>

<style>
#admineidttabl{
  margin: auto;
}
#admineidttable tr{
  height: 70px;
}
</style>