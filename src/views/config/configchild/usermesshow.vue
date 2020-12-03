<template>
  <div class="big_mes">
    <div class="img">
        <el-avatar class="userimg" :size="100"   :src="src"></el-avatar>
    </div>
        <div class="bored"></div>
    <div class="basemes">
        <h1 class="name">{{name}}</h1>
        <h5 class="emil">邮箱：{{emil}}</h5>
        <div id="role">
            <span class="role">身份：{{role}}</span>
        </div>
        <div id="createtime">
            <span class="createtime">创立时间：{{createtime}}</span>
        </div>
        <div id="btn">
                <updata></updata>
        </div>
    </div>
  </div>

</template>

<script>
import updata from './updat'
export default {
        data() {
            return {
                src:this.$store.state.img,
                name:this.$store.state.username,
                emil:this.$store.state.emil,
                role:'',
                createtime:'',
            }
        },
        components:{
            updata
        },
        created() {
            /*对role是数字进行处理 */
            if(this.$store.state.role==3)
            {
                this.role='管理员'
            }
            /*这个方法代表切割字符串 开始位置和切割长度 */
            this.createtime=this.$store.state.createTime.substr(0,10);
        },
}
</script>

<style>
.big_mes{
  
    width: 300px;
    background-color:white;
    position: relative;
    
}
.bored{
   border-bottom:1px  solid rgba(10, 10, 10, 0.932);
   margin: 0px;
  
   
}
.img {
    padding-top:20px ;
    padding-bottom:10px ;
}
.img .el-avatar{
    margin-top:10px ;
    margin: auto;
    background-color: blue;
}
.basemes{
 
    padding: 5px;
  
}
.name{
    font-weight:100px ;
    font-size:25px ;
    margin-top: 20px;
    margin-bottom: 30px;
    color: rgb(221, 196, 196)
}
.emil{
    color: rgb(13, 95, 91);
    font-size: 14px;
    margin-bottom: 30px;
}
#role{
    color: red;
    font-weight: 1000;
    margin-bottom: 30px;
}
#createtime{
    color: grey;
}
#btn{
    margin-top: 30px;   
    padding-bottom:10px ;
}
</style>