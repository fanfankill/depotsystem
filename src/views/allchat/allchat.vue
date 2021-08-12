<template>
  <div>
    <div id="chatdiv">
      <div class="chatdiv" id="showmes">
        <p style="height:0px;width:100%"></p>
     
    </div>
    <div class="showperson">
     <p id="currentpeople"></p>
     <!-- 在线人员展示 -->
   <div id="allpersonmustshow">
 
   </div>
      
     
    </div>

    
    
     <div
      ref="sendmes"
      contenteditable="contenteditable"
      class="sendmes"
      id="senddiv"
    >
    </div>
    <div class="icontofix">
      <el-popover
    placement="top-start"
    title="请输入图片链接"
    width="200"
    trigger="hover"
   >
   <el-input v-model="needimg"></el-input>
   <el-button type="primary" size="mini" @click="sendimg"  style="margin-top:5px;float:right">发送</el-button>
    <i  slot="reference" class="el-icon-picture-outline"></i>
  </el-popover>

    </div>
    </div>
   
  </div>
</template>

<script>
export default {
  mounted: function () {
    this.joinhome();

    //回车发送消息
    document.onkeydown = (e) => {
      var ev = document.all ? window.event : e;
      if (ev.keyCode == 13) {
        this.sendmessage();
      }
    };
  },
  beforeDestroy: function () {
    this.$socket.emit("disconnect");
  },
  data() {
    return {
      currentnow: 0,
      allperson:[],
      needimg:''
    };
  },
  methods: {
    joinhome() {
      this.$socket.emit("login", {
        adminid: sessionStorage.getItem("adminid"),
        img: sessionStorage.getItem("myimg"),
        adminname: sessionStorage.getItem("adminname"),
      });
    },
    sendimg()
    {
      let mysrc=this.needimg
      console.log(mysrc);

      this.$refs.sendmes.innerText="<img style='width:200px;height:200px' src='"+mysrc+"'>"
      this.sendmessage()
    },
    //自己发消息
    sendmessage() {
      console.log(this.$refs.sendmes.innerText);
      let mes = this.$refs.sendmes.innerText;
      if (mes.trim()) {

           var p = document.createElement('p');
        var span = document.createElement('span')
        var span2 = document.createElement('span')
        var img=document.createElement('img')
         img.src=sessionStorage.getItem("myimg")
        span.innerHTML = mes;
        span2.innerHTML =  sessionStorage.getItem("adminname");
        img.className='myimg'
        span2.className = 'rightspan2'
        span.className = 'rightspan'
        p.className = 'pp'
        p.appendChild(img)
        p.appendChild(span2)
        p.appendChild(span)
        document.getElementById('showmes').appendChild(p)
           document.getElementById("showmes").scrollTop += document.getElementById(
        "showmes"
      ).offsetHeight;

        this.$socket.emit("client", {
          value: mes,
          adminid: sessionStorage.getItem("adminid"),
        });
      } else {
        this.messageBox('消息不能为空','error')
      }
      this.$refs.sendmes.innerHTML = "";
    },
  },
  sockets: {
    loginback: (data) => {
      console.log(data.usertotal);
      document.getElementById("currentpeople").innerText = '当前在线人数：'+data.usertotal;
     if(data.flag==1)
     {
      var p = document.createElement("p");
      p.innerHTML = data.adminname + "加入了房间";
      p.style.color = "red";
      p.style.fontWeight = "1000";
      p.style.textAlign = "center";
      p.style.fontSize = "6px";
      document.getElementById("showmes").appendChild(p);

      let allusers=data.users
    
     document.getElementById('allpersonmustshow').innerHTML=''
      allusers.forEach((v)=>{
        
        let div1=document.createElement('div')
        div1.className='allpersonshow'
        let div2=document.createElement('div')
        div2.className='allimgshow'
        let img=document.createElement('img')
        img.src=v.img
        div2.appendChild(img)

        let div3=document.createElement('div')
        div3.className='nameshow'
        let span=document.createElement('span')
        span.innerText=v.adminname
        div3.appendChild(span)

        div1.appendChild(div2)
        div1.appendChild(div3)
        
        //新增人
       document.getElementById('allpersonmustshow').appendChild(div1)
      })

      
     }
    },
    //别人的信息
    sendmes: (data) => {
       var p = document.createElement('p');
      var span = document.createElement('span');
      var span2 = document.createElement('span');
      var img=document.createElement('img')
      span.className = 'leftspan'
      span2.innerHTML = data.users.adminname
      img.src=data.users.img
      img.className='otherimg2'
      span2.className = 'leftspan2'
      span.innerHTML = data.value;
      p.appendChild(img)
      p.appendChild(span2)
      p.appendChild(span)
      p.className = 'pp'
    
      document.getElementById("showmes").appendChild(p);
      document.getElementById("showmes").scrollTop += document.getElementById(
        "showmes"
      ).offsetHeight;
    },
    somelive: (data) => {
      var p = document.createElement("p");
      p.innerHTML = data.adminname + "离开了房间";
      p.style.color = "green";
      p.style.fontWeight = "1000";
      p.style.textAlign = "center";
      p.style.fontSize = "6px";
      document.getElementById("showmes").appendChild(p);
      document.getElementById("showmes").scrollTop += document.getElementById(
        "showmes"
      ).offsetHeight;

          let allusers=data.users

           document.getElementById('allpersonmustshow').innerHTML=''
      allusers.forEach((v)=>{
        
        let div1=document.createElement('div')
        div1.className='allpersonshow'
        let div2=document.createElement('div')
        div2.className='allimgshow'
        let img=document.createElement('img')
        img.src=v.img
        div2.appendChild(img)

        let div3=document.createElement('div')
        div3.className='nameshow'
        let span=document.createElement('span')
        span.innerText=v.adminname
        div3.appendChild(span)

        div1.appendChild(div2)
        div1.appendChild(div3)
        
        //新增人
       document.getElementById('allpersonmustshow').appendChild(div1)
      })



      console.log(data);
      document.getElementById("currentpeople").innerText ='当前在线人数：'+data.usertotal;
    },
  },
};
</script>

<style>
#chatdiv{
  position: relative;
  margin: auto;
  height: 540px;
  width: 1000px;
    background: url(https://img2.baidu.com/it/u=1519171733,3964613902&fm=26&fmt=auto&gp=0.jpg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.chatdiv {
  margin-left: 25px;
  width: 660px;
  height: 540px;

  position: absolute;
  left: 300px;
  top: 0;
 
  overflow: hidden;
  overflow-y: scroll;
}
.showperson{
  width: 300px;
  min-height: 630px;
  background-color: rgb(194, 194, 194,.5);
  position: absolute;
  left: 0px;
  top: 0;
  overflow: hidden;
  overflow-y:scroll ;
}
#currentpeople{
  text-align: center;
  width: 100%;
  height: 20px;
  line-height: 10px;
  color: aliceblue;
  border-bottom:1px solid rgb(236, 234, 234);
}
.allpersonshow{
  width: 100%;
  padding: 10px 0;
  border-bottom:1px solid rgb(194, 194, 194) ;
  min-height: 60px;
}
.allimgshow{
  float: left;
  width: 60px;
  height: 60px;
  margin-left: 10px;

}
.allimgshow img{
  height: 100%;
  width: 100%;
  border-radius:100% ;
}
.nameshow{
  float: left;
  height: 60px;
  line-height: 20px;
  margin-left: 20px;
  color: white;
}

.sendmes {
   position: relative;
  position: absolute;
  top: 540px;
  left: 300px;
  padding: 10px;
  width: 680px;
  margin: auto;
  height: 70px;
  outline: none;
  background-color: rgb(212, 212, 212,.4);
}
.icontofix{
  position: absolute;
  bottom:-20px ;
  left: 302px;
  width: 100%;
}
.chatdiv::-webkit-scrollbar {
  display: none;
}

/**自己 */
  /*自己气泡**/
    .pp {
      width: 100%;
      position: relative;
      min-height: 20px;
      float: right;
      margin-bottom: 20px;
    }

    .rightspan2 {
      text-align: right;
      float: right;
      color: rgb(255, 253, 253);
      font-weight: 1000;
      position: absolute;
      top: -20px;
      font-size: 3px;
      right: 10px;
    }

    .rightspan {
       text-align: right;
      float: right;
      position: relative;
      color: rgb(2, 2, 2);
      font-weight: 500;
      background-color: #88e99d;
      padding: 5px 8px;
      font-size: 14px;
      border-radius: 4px;
      margin-left: 5px;
      margin-right: 15px;

    }

    .rightspan::after {
      content: '';
      border: 8px solid #ffffff00;
      border-left: 8px solid #88e99d;
      ;
      position: absolute;
      top: 6px;
      right: -15px;

    }
    .myimg{
      float: right; 
      margin-right: 5px;
      width: 40px;
      height: 40px;
      border-radius:100% ;
    }

    /**别人的消息 */
    /**别人气泡*/
    .leftspan2 {
      float: left;
      text-align: left;
      color: rgb(255, 253, 253);
      font-weight: 1000;
      position: absolute;
      top: -18px;
      font-size: 3px;
      left: 5px;
    }

    .leftspan {
      text-align: left;
      color: white;
      background-color: #635f5fec;
      padding: 5px 8px;
      font-size: 14px;
      float: left;
      position: relative;
      border-radius: 4px;
      margin-left: 15px;
      margin-right: 5px;


    }

    .leftspan::after {
      content: '';
      border: 8px solid #ffffff00;
      border-right: 8px solid #635f5fec;
      ;
      position: absolute;
      top: 6px;
      left: -16px;
    }
    .otherimg2{
      float: left; 
      margin-left: 0px;
      width: 40px;
      height: 40px;
      border-radius:100% ;
    }
</style>