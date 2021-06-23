<template>
  <div>
      <div class="topmesshow">
        <div class="topshowdiv">
            <el-divider>认证总数</el-divider>
           <div class="topspanshow">
              212
                         <el-popover
    placement="top-start"
    width="50"
    trigger="hover"
    content="较昨日增长5%">
     <span slot="reference" style="color:red ;font-size:14px;margin-left:10px" class="el-icon-caret-top">5%</span>
    
  </el-popover>
              
           </div>
        </div>
       <div class="topshowdiv">
            <el-divider>今日通过</el-divider>
           <div class="topspanshow">
              15
               <el-popover
    placement="top-start"
    width="50"
    trigger="hover"
    content="较昨日下降23%">
     <span slot="reference" style="color:green ;font-size:14px;margin-left:10px" class="el-icon-caret-bottom">23%</span>
    
  </el-popover>
           
           </div>
        </div>
        <div class="topshowdiv">
            <el-divider>今日提交</el-divider>
           <div class="topspanshow">
              <span style="color:black" >21</span>
            
                            <el-popover
    placement="top-start"
    width="50"
    trigger="hover"
    content="较昨日增长10%">
       <span slot="reference" style="color:red ;font-size:14px;margin-left:10px" class="el-icon-caret-top">10%</span>

  </el-popover>
           </div>
        </div>
      </div>

      <div class="right_top">
 <div class="topshowdiv"  >
            
             <div id="circle" style="height=500px;width:400px" ></div>
           
         
        </div>
      </div>
      <div class="bottom_show_div">
      
             <div id="main2"  style="width: 740px;height:300px;">
                 <span style="margin-left:10px;">公司认证提交情况</span>
             </div>
      </div>

       <div class="bottom_show_div_right">
          <el-divider>反馈情况分析</el-divider>
          <div>
               <table>
          <tr style="height:50px">
            <td style="width:150px;text-align:center;font-size:12px">员工信息记录不够全面</td>
            <td style="width:250px"> <el-progress :percentage="50"></el-progress></td>
          </tr>
          <tr style="height:50px">
            <td style="width:150px;text-align:center;font-size:12px">功能不够全面</td>
            <td style="width:250px"> <el-progress :percentage="24"></el-progress></td>
          </tr>
          <tr style="height:50px">
            <td style="width:150px;text-align:center;font-size:12px">入驻人数过少</td>
            <td style="width:250px"> <el-progress :percentage="21"></el-progress></td>
          </tr>
          <tr style="height:50px">
            <td style="width:150px;text-align:center;font-size:12px">功能上的解答不仔细</td>
            <td style="width:250px"> <el-progress :percentage="5"></el-progress></td>
          </tr>
        </table>
          </div>

      </div>

     
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  mounted() {
    this. getxian()
    this.getcircle()
  },
  methods: {
    getxian()
    {
      var myChart = echarts.init(document.getElementById('circle'));

      var option = {
    title: {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '50%',
            data: [
                {value: 1048, name: '搜索引擎'},
                {value: 735, name: '直接访问'},
                {value: 580, name: '邮件营销'},
                {value: 484, name: '联盟广告'},
                {value: 300, name: '视频广告'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
 myChart.setOption(option);
    },
  
  },
}
</script>

<style>
.topmesshow{
  display: flex;
  width:60%;
  flex-wrap:wrap;
  float: left;
  justify-content: space-between;
}
.topmesshow .topshowdiv{
  width: 200px;
  background-color: white;
  height: 230px;
  
}
.circle_div{
  margin: auto;
}
.topspanshow{
  width: 100%;
  text-align: center;
  line-height: 100px;
  font-size: 25px;
  margin: auto;
}
.right_top{
  float: right;
  width: 35%;
  height: 230px;
  background-color: white;
}
.bottom_show_div{
  float: left;
  margin-top: 50px;
  width: 760px;
  height: 300px;
  background-color: white;
}
.bottom_show_div_right{
   float: right;
  margin-top: 50px;
  width: 450px;
  height: 300px;
  background-color: white;
}

</style>