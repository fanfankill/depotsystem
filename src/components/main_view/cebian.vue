<template>

  <div>
      <el-menu
      default-active="/home"
      class="el-menu-vertical-demo"
        router>

      <el-menu-item index="/home">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>

       <el-menu-item index="/orders">
        <i class="el-icon-tickets"></i>
        <span slot="title">订单详细</span>
      </el-menu-item>

            <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-user-solid"></i>
          <span>人员管理</span>
        </template>
       
          <el-menu-item index="/application">用户信息</el-menu-item>
          <el-menu-item index="/catergory">配送员信息</el-menu-item>
      </el-submenu>

      <el-menu-item index="/config">
        <i class="el-icon-setting"></i>
        <span slot="title">配置管理</span>
      </el-menu-item>

  
      
    </el-menu>
  </div>
</template>

<script>

export default {
    name:'cebain',
    components:{
     
    }
}
</script>

<style>

</style>