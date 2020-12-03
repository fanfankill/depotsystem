<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card" >
    <el-tab-pane label="所有订单" name="first"><order-all></order-all>
    <page-change></page-change>
    </el-tab-pane>
    <el-tab-pane label="等待配送" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="派送中" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="已完成" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
  </div>
</template>
<script>
import OrderAll from '../orderchild/order_all'
import PageChange from '../../form/delivepage'
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    components:{
        OrderAll,
        PageChange
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
<style >
.el-tabs{
  line-height: 50px;
}
</style>