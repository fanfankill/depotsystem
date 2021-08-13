<template>
  <div>
      <h3>light类型</h3>
        <div class="showalert">
              <fan-alert type='success' title="我的内容"></fan-alert>
       
             <fan-alert type='info' title="我的内容" ></fan-alert>
       
             <fan-alert type='warning' title="我的内容"></fan-alert>
        
            <fan-alert type='error' title="我的内容"></fan-alert>
        </div>

         <div class="showdiv">
           
        </div>


           <h3>dark类型</h3>
        <div class="showalert">
              <fan-alert type='success' effect="dark" title="我的内容"></fan-alert>
        
       
             <fan-alert type='info' effect="dark" title="我的内容"></fan-alert>
        
    
             <fan-alert type='warning' effect="dark" title="我的内容"></fan-alert>
        
            <fan-alert type='error' effect="dark" title="我的内容" ></fan-alert>
        </div>

        <div class="showdiv">
           
        </div>

             <h3>自定义移除</h3>
        <div class="showalert">
              <fan-alert type='success'  title="我的内容"  :closable="false"> </fan-alert>
        
       
             <fan-alert type='info'  title="我的内容" closeText="我懂了"></fan-alert>
        
        
            <fan-alert type='error'  title="我的内容" ></fan-alert>
        </div>
 <div class="showdiv">
           
        </div>

         <h3>内容居中</h3>
        <div class="showalert">
             <fan-alert type='success' title="我的内容要居中" center></fan-alert>
       
             <fan-alert type='info' title="我的内容" center></fan-alert>
       
             <fan-alert type='warning' title="我的内容" center></fan-alert>
        
            <fan-alert type='error' title="我的内容" center></fan-alert>
        </div>

      <div class="showdiv">
           
        </div>

        <h3>icon图标</h3>
        <div class="showalert">
             <fan-alert type='success' title="我的内容"  showIcon></fan-alert>
       
             <fan-alert type='info' title="我的内容" showIcon></fan-alert>
       
             <fan-alert type='warning' title="我的内容" showIcon></fan-alert>
        
            <fan-alert type='error' title="我的内容" showIcon></fan-alert>
        </div>

        <div class="showdiv">
           
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.showalert div{
    margin-top: 30px;
  
  
}

.showdiv{
    width: 100%;
    height: 40px;
}
</style>