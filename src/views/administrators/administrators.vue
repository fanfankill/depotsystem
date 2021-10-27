<template>
  <div>
   

        <!-- 修改个人基本信息弹窗 ref的功能就是用来获取DOM节点 -->
        <editmessage ref="editmessage" @toldfather="getadminmessage"></editmessage>

        <el-skeleton  :loading="boxloading" animated >
      <template slot="template">
         

         <div class="usershow" style="op" >
      <div class="imgshow">
             <el-skeleton-item
          variant="image"
         id="myimgshow">

            </el-skeleton-item>
          </div>
             <el-divider></el-divider>
             <el-skeleton :rows="8"
             style="width:70%;margin-left:20px" />
           </div>
           
          
          <el-skeleton-item
          variant="div"
         class="otherperson">

            </el-skeleton-item>
 

           

         
         
      </template>

 <template>
      <div class="usershow">
      <div class="imgshow">
        <img v-if="userimg" id="myimgshow" :src="userimg" />
        <img v-else id="myimgshow" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201704%2F27%2F20170427155254_Kctx8.thumb.700_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1627744554&t=21df8146018e4b97dc638b5ebe7a4494">
      </div>
      <el-divider></el-divider>
      <div class="basemesshow">
          <div>
            <span class="basemes">姓名：</span> <span class="privateshow">{{myprivate.nickname}}</span>
          </div>
        <div>
            <span class="basemes">性别：</span> <span class="privateshow">{{myprivate.sex}}</span>
        </div>
         <div>
            <span class="basemes">住址：</span><span class="privateshow">{{myprivate.address}}</span> 
         </div>
        <div>
             <span class="basemes">加入时间：</span> <span class="privateshow">{{myprivate.jointime}}</span>
        </div>
           <div>
             <span class="basemes">个性签名：</span> <span class="privateshow">{{myprivate.privatemes}}</span>
           </div> 
      </div>
      <div class="changebtn">
        <el-button type="primary" @click="chagenmes">修改资料</el-button>
        
          <el-upload
        action="http://139.196.87.221:3000/upload"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
        :show-file-list="isshow"
        :data="imgdata"
      >
       
       <el-button type="success">上传头像</el-button>
      </el-upload>
       
      </div>
    </div>

    <div class="otherperson">
     <div class="adminmesdiv" v-for="item in othermes" :key="item.AdminId">
        <div class="otherimg">
          <img :src="item.userimg" alt="">
          <p>{{item.nickname}}</p>
        </div>
           <el-divider></el-divider>
      <table id="ohetrmestable">
        <tr>
          <td class="firsttd">性别：</td>
          <td class="secondtd">{{item.sex}}</td>
        </tr>
         <tr>
          <td class="firsttd">住址：</td>
          <td class="secondtd">{{item.address}}</td>
        </tr>
         <tr>
          <td class="firsttd" >加入时间：</td>
          <td class="secondtd">{{item.jointime}}</td>
        </tr>
         <tr>
          <td class="firsttd">个性签名：</td>
          <td class="secondtd">{{item.privatemes}}</td>
        </tr>
      </table>
      
     </div>
    
    </div>
 </template>
        </el-skeleton>
  </div>
</template>

<script>
import editmessage from './adminchild/editmes'
export default {
    watch:{
      userimg:function(newval)
      {
        console.log(newval);
        this.userimg=newval
      }
    },
    
  data() {
    return {
      //骨架
      boxloading:true,
      isshow:false,
      userimg: "",
      //个人基本资料数据
      myprivate:{},
      //其他管理员资料数据
      othermes:[],
      //img携带的数据
      imgdata:{
        AdminId:sessionStorage.getItem('adminid')
      },
      //控制弹窗
      isedit:false
    };
  },

  components:{
    editmessage,
  },

  mounted: function () {
     
      this.getadminmessage()
      this.getalladmin()
    
  },

  methods: {
    handleAvatarSuccess(res, file) {
      console.log(res,file);
      this.getadminmessage()
      this.messageBox('上传成功！','success')
      
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }

      return isJPG && isLt2M;
    },
    //获取人员信息
    getadminmessage:function()
    {
      this.$axios.get('/getadminmessage?AdminId='+sessionStorage.getItem('adminid')).then(res=>{
        console.log(res);
        this.myprivate=res.data.Adminmessage[0]
        this.myprivate.jointime= this.myprivate.jointime.substring(0,10)
        
        let commitimg='http://139.196.87.221:3000'+res.data.Adminmessage[0].userimg.substring(6)
        //上传到vuex
        this.$store.commit('changeimg',commitimg)

        //更新存储
         //从vuex里面取值
        this.userimg=this.$store.state.myuserimg

        this.boxloading=false
        
      })
    },
    //获取所有管理员信息
    getalladmin()
    {
      this.$axios.get('/getallperson?AdminId='+sessionStorage.getItem('adminid')).then(res=>{
        console.log(res);
        this.othermes=res.data
        //对头像和加入时间进行处理
        this.othermes.forEach(v=>{
          v.userimg='http://139.196.87.221:3000'+v.userimg.substring(6)
          v.jointime=v.jointime.substring(0,10)
        })
      })
    },

    //修改个人基本资料
    chagenmes()
    {
      
      this.isedit=true

      let editobj=JSON.stringify(this.myprivate)
      this.$refs.editmessage.editmes(this.isedit,JSON.parse(editobj))
    }
  },

};
</script>

<style>
.usershow {
  height: 600px;
  width: 400px;
  float: left;
  background-color: rgba(255, 255, 253, 0.438);
  box-shadow: 10px 10px 10px rgb(223, 223, 223);
}
.imgshow {
  width: 100%;
  height: 200px;
  position: relative;
}
#myimgshow{
 
  z-index: 222;
  width: 150px;
  height: 150px;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

}
.basemesshow{
  
  display: flex;
  flex-direction: column;

}
.basemesshow >div{
  margin:5px 10px;
  position: relative;
}
.basemes{
  position: absolute;
  top: 0;
  text-align: right;
  display: inline-block;
  width: 80px;
  color: rgb(121, 118, 118);
}
.privateshow{
    float: right;
    width: 300px;
    height: 40px;
     display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
    
}
.changebtn{
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-around;
}

/**其他管理员展示 */
.otherperson{
  height: 600px;
  width: 850px;
  background-color: rgb(219, 219, 219);
   box-shadow: 10px 10px 10px rgb(223, 223, 223);
  float: right;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  overflow: hidden;
  overflow-y:scroll;
}

.adminmesdiv{
  width:300px;
  height: 460px;
  background-color: rgb(255, 255, 255);
  box-shadow: 10px 10px 10px rgb(172, 171, 171);
  margin-top: 20px;
    overflow: hidden;
  
}

.otherimg{
  width: 100px;
  margin: auto;
  margin-top: 20px;

}
.otherimg img{
  width: 100%;
  height: 100px;
  border-radius:100% ;
}
.otherimg p{
  text-align: center;
  color: rgb(133, 121, 121);
}

#ohetrmestable{
  margin-left:20px
}
#ohetrmestable tr{
  height: 40px;
}
#ohetrmestable td{
  line-height: 40px;
}
.firsttd{
  text-align: right;
  color: gray;
  display: inline-block;
  width: 90px;
  line-height: 40px;
  
}
.secondtd{
  width:180px;
  display:inline-block;
    overflow: hidden;/*超出部分隐藏*/
   white-space: nowrap;/*不换行*/
   text-overflow:ellipsis;/*超出部分文字以...显示*/
}
</style>