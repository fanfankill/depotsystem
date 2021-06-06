<template>
  <div>
    <el-container style="height: 750px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu   :default-active="this.$route.path"
        router>

         <el-menu-item index="/login">
        <i class="el-icon-menu"></i>
        <span slot="title">主界面</span>
      </el-menu-item>

           <el-menu-item index="/parking">
        <i class="el-icon-menu"></i>
        <span slot="title">车位管理</span>
      </el-menu-item>

        <el-menu-item index="/carjoin">
        <i class="el-icon-menu"></i>
        <span slot="title">进出车辆登记</span>
      </el-menu-item>

       <el-menu-item index="/carjoincontrol">
        <i class="el-icon-user-solid"></i>
        <span slot="title">临时车管理</span>
      </el-menu-item>

        <el-menu-item index="/administrators">
        <i class="el-icon-user-solid"></i>
        <span slot="title">管理员界面</span>
      </el-menu-item>

        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>

        <el-main>

         <router-view></router-view>

        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

export default {

};
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-aside {
  color: #333;
}
</style>