<template>
 <div>
  <div class="mychatdiv" >
      <!-- 对话区域 -->

        <div class="toapendmessage" ref="apendmessage">

        <transition-group tag="div" name="myemojia">
            <div v-for="item in allvalue" :key="item.id">

            <!-- 加入房间特效 -->
            <p v-if="item.type==2" class="addroom">{{item.content}}</p>

                <!-- 我方气泡 -->
             <div v-else :class="[item.type?'mychatingdiv':'otherchatingdiv']" >
             <div class="chattingimg">
                 <img :src="item.img">
             </div>

           <div class="nameandspan">
               <div :class="[item.type?'rightname':'leftname','showmyname']">{{item.name}}</div>
               <div :class="[item.type?'mychattingspandiv':'otherchattingspandiv']"><span :class="[item.type?'mychattingspan':'otherchattingspan']" v-html="item.content"></span></div>
           </div>
         </div>

        </div>
        </transition-group>


         </div>

         
    
      <!-- 展开侧边 -->
      <div class="myshowpersondiv" ref="myshowpersondiv">
          <!-- 展示在线人员 -->
          <div class="myshowperson">
              <div class="showhowmany">在线人数：{{allpersonlength}}</div>

              <div class="everyperson" v-for="item in allperson" :key="item.content">
                  <!-- 头像区域 -->
                  <div class="showpersonimg">
                      <img :src="item.img">
                  </div>
                  <div class="showbasemessage">
                      <div class="showbasemessagename">{{item.adminname}}</div>
                      <div class="showbasemessageself">{{item.privatemes}}</div>
                  </div>
              </div>

          </div>
          <!-- 按钮区域 -->
          <div class="myshowpersonbtn">
              <span :class="[isshowperson?'el-icon-s-fold':'el-icon-s-unfold']" @click="isshowperson=!isshowperson"></span>
          </div>


      </div>

      

  </div>

   <!--功能条--> 
  <div class="mybar">
      <span class="chatjob iconfont icon-biaoqing1" @click="isshowemoji=!isshowemoji">
            <transition name="myemoji">
              <div class="myemoji" v-show="isshowemoji"  >
                <div class="emojichild" v-for="i in 30" :key="i" @click.stop="appendemoji(i)"><img  :src="'https://cdn.sunofbeaches.com/emoji/'+i+'.png'"></div>
              </div>
            </transition>
      </span>
      <span class="chatjob iconfont icon-shizhongfill" @click="calltime"></span>
      <span class="chatjob el-icon-circle-plus" @click="morejob"></span>

       <!-- 发送按钮 -->
      <el-button type="primary" size="mini" class="chatbtn" @click="sendmymessahe">发送</el-button>
  </div>

  
   <!-- 输入区域 -->
  <div  enterkeyhint="send" @keydown.enter="sendmymessahe" @keyup.enter="claerupdiv" class="chatbar" ref="sendmes" contenteditable>
      
  </div>
    
    
 </div>
</template>

<script>
export default { 
    mounted:function(){
        this.$refs.sendmes.focus();
        //触发登录事件
        this.jointhisweb()
    },
    data() {
        return {
            isshowperson:false,
            // id 名字 头像 个性签名 还是vuex监听变化好一点
            myid:sessionStorage.getItem('adminid'),
            myprivatemes:sessionStorage.getItem('privatemes'),

            //机器人播报的信息
            robotname:'机器人小冰',
            robotimg:'https://img2.baidu.com/it/u=1336695291,4230230958&fm=26&fmt=auto',

            allcontent:0,
            allvalue:[],
            allperson:[],

            //表情
            isshowemoji:false
        }
    },
     computed:{
        allpersonlength:function(){
            return this.allperson.length
        },
        myname:function(){
            return this.$store.state.myname
        },
        myimg:function(){
            return this.$store.state.myuserimg
        }
    },
    watch:{
        isshowperson:function(newval){
            console.log(newval);
                if(newval){
                    this.$refs.myshowpersondiv.style.left='0px'
                }else{
                    this.$refs.myshowpersondiv.style.left='-160px';
                    
                }
        }
    },
    methods:{
        /**登录这个页面的时候传递给服务器 */
        jointhisweb:function(){
            /**传入基本信息 */
            /**id 名字 头像 个性签名 */
            console.log(this.myname);
            this.$socket.emit('login',{
                adminid: this.myid,
                img: this.myimg,
                adminname: this.myname,
                privatemes:this.myprivatemes
            })
       
        },
        //自己发送消息
        sendmymessahe:function(){
            this.isshowemoji=false
            let mymeesgae=this.$refs.sendmes.innerHTML
            if(mymeesgae.trim()){

           let myobj={
                id:Date.now(),
                type:1,
                name:this.myname,
                img:this.myimg,
                content:this.$refs.sendmes.innerHTML,
                value:this.$refs.sendmes.innerHTML,
                adminid:this.myid
            }
            this.sendmymessage(myobj)
            // //自我储存
            //   this.allvalue.push({
            //     id:Date.now(),
            //     type:1,
            //     name:sessionStorage.getItem('adminname'),
            //     img:sessionStorage.getItem('myimg'),
            //     content:this.$refs.sendmes.innerHTML,
            // })
            // //发送
            // this.$socket.emit("client",{
            //     value:this.$refs.sendmes.innerHTML,
            //     adminid:sessionStorage.getItem('adminid')
            // })

            this.$nextTick(()=>{
                this.changescroll()
                })
            }
            else{
                 this.messageBox('消息不能为空','warning') 
            }

            this.claerupdiv()
        },

        /**发完消息要清空区域且防止空格问题的产生 */
        claerupdiv:function(){
            //发送完信息清空
            console.log(this.allva);
            this.$refs.sendmes.innerHTML=''
            this.$refs.sendmes.focus();
        },
        /**根据内容改变盒子的scrolltop */
        changescroll:function(){
            /**超出高度自动滚动 scrollTop距离这个盒子顶部距离 scrollHeight滚动盒子具体高度 */
              this.$refs.apendmessage.scrollTop=this.$refs.apendmessage.scrollHeight
        },
        //发送消息出去
        sendmymessage:function(dataobj){
            //自己储存展示
            this.allvalue.push(dataobj)
            //发送给其他人
            this.$socket.emit("client",{
                adminid:dataobj.adminid,
                value:dataobj.value
            })
        },
        //发表情
        appendemoji:function(i){
            console.log(i);
            let tempurl='https://cdn.sunofbeaches.com/emoji/'+i+'.png '
            let tempimg=document.createElement('img')
            tempimg.setAttribute('class','sendemoji')
            tempimg.src=tempurl
            this.$refs.sendmes.append(tempimg)
        },
        //表情地址 https://cdn.sunofbeaches.com/emoji/1.png  1-30
        /**呼出日期 */
        calltime:function(){
         //得出时间 
        let temptime=this.getnowtime()
        this.allvalue.push({
            id:Date.now(),
                type:0,
                name:this.robotname,
                img:this.robotimg,
                content:'现在是：'+temptime,
        })
        this.$nextTick(()=>{
            this.changescroll()
        })

        },
        /**拼接日期 */
        getnowtime:function(){
        
            let myday=new Date()
            let year=myday.getFullYear()
            let mon=myday.getMonth()+1
            let day=myday.getDate();

            let hour=myday.getHours()
            let min=myday.getMinutes()
            let second=myday.getSeconds()
            return [year,mon,day].join('-')+' '+[hour,min,second].map((v)=>{
                if(v>=10) return v
                else return '0'+v
            }).join(':')+' '
        },
        /**更多功能等待开发 */
        morejob:function(){
            this.joinroom('更多功能正在开发中...')
        },

        /**加入房间特效 */
        joinroom:function(name){
            //  <p class="addroom">fanfan加入了房间</p>
            
            this.allvalue.push({
                id:Date.now(),
                type:0,
                name:this.robotname,
                img:this.robotimg,
                content:name,
            })
        },
        
    },
    /**socket方法 */
    sockets:{
        /**登录回调事件 */
        loginback(data){
            console.log(data);
            //加入
            this.allperson=data.users
             if(data.flag!=0){
                this.joinroom('欢迎'+data.adminname+'加入房间')
             }
             console.log('????');
        },

     /**消息接收 */
    sendmes(data){
      new Promise((res)=>{
            this.allvalue.push({
            id:Date.now(),
            type:0,
            name:data.users.adminname,
            img:data.users.img,
            content:data.value
        })
        res()
      }).then(()=>{
          this.changescroll()
      })
            
      
    },

    /**离开房间播报 */
    somelive(data){
        console.log(data);
        this.allperson=data.users
        this.allvalue.push({
            id:Date.now(),
            type:0,
            name:this.robotname,
            img:this.robotimg,
            content:data.adminname+'跑路了'
        })
    }
    },
}
</script>

<style >
/**手机适配 */
@media screen and (max-width:720px) {
    .mychatdiv{
        background: url(https://img1.baidu.com/it/u=3695289191,4074744882&fm=26&fmt=auto);
    }
    .otherchattingspan{
        max-width: 188px;
    }
    .mychattingspan{
        max-width: 185px;
    }

    .myemoji{
     width: 200px;
     height: 200px;
  
 }
.emojichild{
    width: 20px;
    height: 20px;
    padding: 10px;
}
}
/**电脑适配 */
@media screen and (min-width:720px) {
    .mychatdiv{
        background: url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F122020120347%2F201220120347-9-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1640666786&t=c87447f4a05c413b23912461d0532d3b)  no-repeat;
        background-size:100% 100%;
    }

    .myemoji{

     width: 400px;
     height: 200px;

 }
.emojichild{
    width: 40px;
    height: 40px;
    padding: 20px;
}
}


/**正常属性 */
 .mychatdiv,.chatbar,.mybar{
    margin: auto;
    width: 90%;
    /**上 右 下 左 */
    padding: 5px 5px 0px 5px;
    max-width: 900px;
 }
 /**展示聊天盒子 */
 .mychatdiv{ 
     height: 61vh;
     position: relative;
     overflow: hidden;
     
 }
 /**消息滚动区域 */
 .toapendmessage{
     position: relative;
     width: 100%;
     height: 100%;
     overflow: auto;
     overflow-x: hidden;
 }
/*滚动条样式*/
.toapendmessage::-webkit-scrollbar {
            width: 3px;   
            /*height: 4px;*/
        }
.toapendmessage::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 5px rgba(255, 255, 255, );
        background: rgba(0,0,0,0.2);
        }
.toapendmessage::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 5px rgba(255, 255, 255, 0);
        border-radius: 0;
        /* background: rgba(0,0,0,0.1); */

}
  /**侧边展开 */
 .myshowpersondiv{
     position: absolute;
     top: 0;
     left: -160px;
     height: 100%;
     width: 200px;
     display: flex;
     transition: all .5s;
     background-color: rgba(194, 194, 194, 0.3);
 }
 /**人员展示 */
 .myshowperson{
     flex: 8;
     height: 100%;
    
 }

 .myshowpersonbtn{
     text-align: center;
     flex: 2;
     font-size:1.5rem ;
     line-height: 40px;
     height: 100%;
 }
 .showhowmany{
     text-align: center;
     line-height: 40px;
     font-weight: 600;
     border-bottom: 1px solid black;
     
 }

 /**输入框 */
 .chatbar{
     background-color: rgba(255, 255, 255, 0.925);
     height: 13vh;
     outline: none;
     overflow: auto;
     font-size:1rem;
     /**上 右 下 左 */
     padding: 4px 4px 0px 4px;
     border:1px solid black ;
     border-top: none;
 }
 /**表情 */
 .sendemoji{
     width: 15px;
     padding:0 2px 0 2px;
     height: 15px;
 }
/**表情 */
 .myemoji{
     position: absolute;
     bottom: 24px;
     left: 0px;
    background-color: white;
     display: flex;
     flex-wrap: wrap;
     overflow-y: auto;
     overflow-x: hidden;
 }
 /**表情动画 */

.myemoji-enter-active {transition: all .2s linear;}
.myemoji-leave-active {transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);}
.myemoji-enter,.myemoji-leave-to{transform: translateX(5px);opacity: 0;}


.myemojia-enter-active {transition: all .3s linear;}

.myemojia-enter{transform: translateX(5px);opacity: .6;}

.emojichild{
    width: 20px;
    height: 20px;
    padding: 10px;
}
.emojichild:hover{
    transform: scale(1.3);
    transition: all  .3s linear;
}
.emojichild img{
    width: 100%;
    height: 100%;

}
/**侧边在线人数个人资料展示*/
.everyperson{
    display: flex;
    width: 100%;
    height: 80px;
    border-bottom:1px solid rgb(235, 231, 231) ;
    
    
}
/**头像 */
.showpersonimg{
    flex:2;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.showpersonimg img{
    width: 50px;
    height: 50px;
    border-radius:100%;
}
/**基本信息展示*/
.showbasemessage{
    flex:3;
    display: flex;
    flex-direction: column;
}
.showbasemessagename{
    flex: 4;
    font-size: 1.2rem;
    line-height: 30px;
    /**单行隐藏 */
    width: 100px;
    white-space: nowrap;
	overflow-x: hidden;
    text-overflow: ellipsis;

}
/**个性签名 */
.showbasemessageself{
    flex: 6;
    font-size: 4px;
 
    line-height: 22px;
    /**多行隐藏 */
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}

 /**功能区域 */
 .mybar{
     height: 20px;
     background: rgb(255, 255, 255);   
     /**子列表flex布局 */
     display: flex;
     justify-content: flex-start;  
      padding: 4px 4px 0px 4px;
     position: relative;
     border:1px solid black ;
     border-bottom: none;
     border-top: none;
 }
 /**子列表 */
 .chatjob{
     font-size: 1.4rem;
     padding-left: 10px;
     padding-right: 10px;
     cursor: pointer;
 }
 /**发送按钮 */
 .chatbtn{
     position: absolute;
     bottom: -12vh;
     right: 15px;
 }

/**两者气泡共同 */
.allchatingdiv{
    display: flex;
    margin-left: 40px;
    padding:10px 0 15px 0;
    align-items: center;
}
.chattingimg{
 
    align-self: start;
}
.chattingimg img{
    width: 40px;
    height: 40px;
    border-radius:100% ;
}
/**展示名字部分 */
.nameandspan{
    display: flex;
    flex-direction: column;  
}
/**名字共同属性 */
.showmyname{
    flex: 2;
    margin-bottom: 3px;
    font-size: 10px;
    color: rgb(119, 39, 39);
}

/**他人气泡 */
.otherchatingdiv{
   
    display: flex;
    margin-left: 40px;
    padding:10px 0 15px 0;
    align-items: center;
    
}

.otherchattingspandiv{
     background-color: #635f5fec;
     border-radius: 4px;
      margin-left: 8px;
      margin-right: 5px;
      align-items: center;
}
.otherchattingspan{
      display: inline-block;
      text-align: left;
      color: white;
      padding: 5px 8px;
      font-size: 1rem;
      position: relative;
       white-space:normal;
        word-wrap:break-word;
      
}
.leftname{
    margin-left: 10px;
}
.otherchattingspan::after{
      content: '';
      border: 8px solid #ffffff00;
      border-right: 8px solid #635f5fec;;
      position: absolute;
      top: 6px;
      left: -15px;
}

/**我的气泡 */

.mychatingdiv{
   
    display: flex;
    margin-left: 40px;
    flex-direction: row-reverse;
    padding:10px 0 15px 0;
    align-items: center;
}
.rightname{
    text-align: right;
    margin-right: 10px;
}
.mychattingspandiv{
    flex: 3;
     background-color: #88e99d;
      border-radius: 4px;
      margin-left: 8px;
      margin-right: 10px;
      align-items: center;
      align-self: flex-end;
}
.mychattingspan{
      display: inline-block;
      color: black;
      padding: 5px 8px;
      font-size: 1rem;
      position: relative;
      white-space:normal;
      word-wrap:break-word;
      
}
.mychattingspan::after{
      content: '';
      border: 8px solid #ffffff00;
      border-left: 8px solid #88e99d;
      position: absolute;
      top: 6px;
      right: -15px;
}

/**加入房间特效 */
.addroom{
    text-align: center;
    color: #ffffff;
}

</style>