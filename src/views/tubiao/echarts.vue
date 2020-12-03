<template>
  <div id="echarts">
<el-col :span="24">
    <div id="charts" style="width: 600px;height:250px;"></div>
  </el-col>
  </div>
</template>

<script>
export default {
    name:'echarts',
     methods: {
      init()
      {
         var myChart = this.$echarts.init(document.getElementById('charts'));

        // 指定图表的配置项和数据
      var option = {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
       
        type: 'line',
        areaStyle: {}
    }]
};


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
      }
    },
    mounted() {
      this.init()
    },
}
</script>

<style>
#echarts{
  margin: auto;
  height: 400px;
  width: 600px;

}
</style>