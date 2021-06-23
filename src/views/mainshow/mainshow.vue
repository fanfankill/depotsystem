<template>
  <div>
    <div class="topdiv">
      <div class="leftdiv">
        <div class="topshowdiv">
          <el-divider>总车位数</el-divider>
          <div class="topspanshow">12</div>
        </div>

        <div class="topshowdiv">
          <el-divider>空闲车位数</el-divider>
          <div class="topspanshow">8</div>
        </div>

        <div class="topshowdiv">
          <el-divider>固定车位数</el-divider>
          <div class="topspanshow">2</div>
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
        <el-divider>反馈情况分析</el-divider>
             <table>
          <tr style="height:80px">
            <td style="width:150px;text-align:center;font-size:12px">认为停车费贵</td>
            <td style="width:250px"> <el-progress :percentage="50"></el-progress></td>
          </tr>
          <tr style="height:80px">
            <td style="width:150px;text-align:center;font-size:12px">停车费未封顶</td>
            <td style="width:250px"> <el-progress :percentage="24"></el-progress></td>
          </tr>
          <tr style="height:80px">
            <td style="width:150px;text-align:center;font-size:12px">停车位没有好名字</td>
            <td style="width:250px"> <el-progress :percentage="21"></el-progress></td>
          </tr>
          <tr style="height:80px">
            <td style="width:150px;text-align:center;font-size:12px">区域辨识度不高</td>
            <td style="width:250px"> <el-progress :percentage="5"></el-progress></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  data() {
    return {};
  },
  mounted: function () {
    this.getcircle();
    this.getxian()
  },
  methods: {

    //圆圈图
    getcircle() {
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
            name: "访问来源",
            type: "pie",
            radius: "70%%",
            data: [
              { value: 3, name: "A区" },
              { value: 2, name: "B区" },
              { value: 4, name: "C区" },
              { value: 8, name: "D区" },
            ],
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
        data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
    }]
};

  myChart.setOption(option);

    },
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
</style>