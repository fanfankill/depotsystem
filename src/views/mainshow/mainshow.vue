<template>
  <div>
    <!-- 用于未加载出来数据时候的骨架模板 -->

  
          <el-skeleton  :loading="loading" animated >
      <template slot="template">
        <div class="topdiv">
         <div class="leftdiv">
            <el-skeleton-item
          variant="div"
          
          class="topshowdiv"
         
        />
          <el-skeleton-item
          variant="div"
          class="topshowdiv"
      
        />
          <el-skeleton-item
          variant="div"
          class="topshowdiv"
          style="width:420px"
        />
         </div>
        <el-skeleton-item
          variant="div"
          class="rightdiv"
          style="height:230px;"
          
        />
        </div>
        <div class="bottomdiv">
           <el-skeleton-item
          variant="div"
          class="btn_leftdiv"
          style="height:400px"
          
        />
         <el-skeleton-item
          variant="div"
          class="btn_rightdiv"
          style="height:410px"
          
        />
        </div>
        
         
      </template>
  
    
    <!-- 数据部分 -->
    <template>
       <div class="topdiv">
      <div class="leftdiv">
        <div class="topshowdiv">
          <el-divider>总车位数</el-divider>
          <div class="topspanshow">{{totalmes.totalcar}}</div>
        </div>

        <div class="topshowdiv">
          <el-divider>空闲车位</el-divider>
          <div class="topspanshow">{{totalmes.totalfreecar}}</div>
        </div>

        <div class="topshowdiv" style="border:none">
          <el-divider>固定车位</el-divider>
          <div class="topspanshow">{{totalmes.totalfixcar}}</div>
        </div>
      </div>
      <div class="rightdiv">
        <div id="circle" style="height: 100%; width: 100%;"></div>
      </div>
    </div>

    <div class="bottomdiv">
      <div class="btn_leftdiv">
        <div id="xian" style="height:350px; width: 100%"></div>
      </div>

      <div class="btn_rightdiv">
        <el-divider>当地温度分析</el-divider>
           <div class="weathershow">
             <span>{{month_day}}</span>
             <span class="weather_city">长沙</span>
             <img  v-if="weather.icon==100" style="height:120px;width:120px" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn09%2F200%2Fw500h500%2F20180821%2F654d-hhxaafz6950875.gif&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1627207088&t=f2b0d8934e0686572b942c29bf63763c"> 

             <!-- 阴雨天图标 -->
             <img  v-if="weather.icon==300" style="height:120px;width:120px"  src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190422%2Ff0f05abc2c82430e96b8f3dce1528404.gif&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1627228934&t=0326288db8f994620c229c5c29318992">

             <!-- 多云图标 -->
             <img  v-if="weather.icon==101" style="height:120px;width:120px"  src="https://img1.baidu.com/it/u=1837013928,907223287&fm=26&fmt=auto&gp=0.jpg">

            <!-- 阴天 -->
            <img v-if="weather.icon=104" style="height:120px;width:200px" src="http://img.tocreating.com/element/38828531ecb489c484bcaa29088c7341cover_476x450.png?x-oss-process=style/ec">
             <!-- 其余天气不判断了 -->
             <img v-else style="height:120px;width:200px" src="https://img0.baidu.com/it/u=598558392,1957890741&fm=11&fmt=auto&gp=0.jpg">
              <span class="weather_temp" style="font-size:25px;font-weight:600">{{weather.temp}} <span class="iconfont icon-celsius-fill"></span> </span>
              <span class="weather_wse">{{weather.text}}&nbsp;&nbsp;{{weather.windDir}}</span>
           </div>
      </div>
    </div>
    </template>
     </el-skeleton>
  </div>
</template>

<script>
import echarts from "echarts";

export default {
  data() {
    return {
      //上左页面展示
      totalmes:{},
      //圈圈数据
      circlemes:[],
      //折线图数据
      xianmes:[],
      //温度对象
      weather:{},
      //当前月和日期
      month_day:'',
      loading:true,
    };
  },
  mounted: function () {
  

  //如果要骨架的话 要把数据请求放到DOM树渲染出来后 所以要在这个后面
    setTimeout(()=>{
      this.loading=false
        this.gettotal()
    this.getcircle();
    this.getxian(),
    this.getweather()
    },1000)
   
  },
  methods: {

      //获取车位总数 车辆剩余量
      gettotal()
      {
        this.$axios.get("/gettotalcar").then(res=>{
          console.log(res);
          this.totalmes=res.data
        })
      },

    //获取圆圈数据
    getcircle() {

        this.$axios.get('/getciclemes').then(res=>{
          console.log(res);
          this.circlemes=res.data.circlemessage,
          this.circle(this.circlemes)
          
        })
    },
    //圈圈图
    circle(circlemes)
    {
        //画图
      
      var myChart = echarts.init(document.getElementById("circle"));

      // 指定图表的配置项和数据
      var option = {

        title: {
          text: "停车区域划分",
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "center",
          left: "right",
        },
        series: [
          {
            name: "车位数目",
            type: "pie",
            radius: "60%%",
            data: circlemes,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      myChart.setOption(option);
    },
    
    //折线图
    getxian(){

      this.$axios.get('/getxianmes').then(res=>{
        console.log(res);
        this.xianmes=res.data.result,
        this.xian(this.xianmes)
      })
    },

    xian(xianmes)
    {
     
      console.log(xianmes);
      let days=[]
      let totalprice=[]
      xianmes.map(v=>{
        if(v.day!=null)
        {
          days.push(v.day.substring(5,10))
        }
        v.totaldayfare
        totalprice.push(v.totaldayfare)
        })
        console.log(totalprice);
      
        var myChart = echarts.init(document.getElementById("xian"));
    var option = {
        color:['rgb(64, 206, 231)'],
        title: {
          text: "收费统计",
          left: "center",
        },
      tooltip: {
          trigger: "item",
        },
        
    xAxis: {
        type: 'category',
        data: days
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: totalprice,
        type: 'line'
    }]
};

  myChart.setOption(option);
    },

    //获取天气 顺便获取当前日期吧
    getweather()
    {
       let time= new Date();
       let month=time.getMonth()+1
       let day=time.getDate()
       let week=time.getDay()
       //取下标的方法来解决星期天为0的情况
       this.month_day=month+' / '+day+ ' 星期'+"日一二三四五六".charAt(week);
       //直接请求和风天气接口
      this.$axios.get('https://devapi.qweather.com/v7/weather/now?location=101250101&key=5848d5275af74738bdbceb5eb664ecee').then(res=>{
        console.log(res);
        this.weather=res.data.now
      })
    }
  },
};
</script>

<style> 
.topdiv {
  
  display: flex;
  width: 100%;
}
.leftdiv {
  flex: 5;
  display: flex;
  border-right: 30px solid rgb(244, 245, 245);
}

.rightdiv {
  flex: 3;
  background-color: white;
}

.topspanshow {
  width: 100%;
  text-align: center;
  line-height: 100px;
  font-size: 25px;
  margin: auto;
}
.topshowdiv {
  width: 160px;
  background-color: white;
  height: 230px;
  flex: 1;
  border-right: 20px solid rgb(245, 244, 244);
  
}


/**下面部分样式 */
.bottomdiv {
  margin-top: 50px;
  display: flex;
  width: 100%;
}
.btn_leftdiv {
  padding-top: 10px;
  flex: 5;
  height: 380px;
  background-color: rgb(255, 255, 255);
  display: flex;
  border-right: 30px solid rgb(245, 244, 244);
}
.btn_rightdiv {
  flex: 3;
  background-color: white;
}
/**天气样式 */
.weathershow{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.weathershow span{
  margin: 10px 0;
}
.weather_city{
  padding: 5px;
 width: 35px;
  background-color: rgba(82, 163, 238, 0.829);
}
</style>