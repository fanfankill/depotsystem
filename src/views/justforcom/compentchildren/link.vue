<template>
  <div>
     
      <div class="showlink">
          <fan-link>默认链接</fan-link>
       <fan-link type="primary">主要链接</fan-link>
        <fan-link type="warning">警告链接</fan-link>
         <fan-link type="success">成功链接</fan-link>
         <fan-link type="danger">危险链接</fan-link>
         <fan-link type="info">信息链接</fan-link>
      </div>

      <div class="showlink">
          <fan-link disabled>默认链接</fan-link>
       <fan-link type="primary" disabled>主要链接</fan-link>
        <fan-link type="warning" disabled>警告链接</fan-link>
         <fan-link type="success" disabled>成功链接</fan-link>
         <fan-link type="danger" disabled>危险链接</fan-link>
         <fan-link type="info" disabled>信息链接</fan-link>
      </div>

        <div class="showlink">
             <fan-link type="primary" >有下划线</fan-link>
          <fan-link :underline="false">没有下划线</fan-link>
      </div>

         <div class="showlink">
             <fan-link icon="el-icon-edit">编辑</fan-link>
          <fan-link>查看<i class="el-icon-view el-icon--right"></i></fan-link>
      </div>

  </div>
</template>

<script>
export default {

}
</script>

<style>
.showlink{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-content: center;
    height: 80px;
    flex-wrap: wrap;
}
.showlink a{
    margin: 10px 10px;
}
</style>