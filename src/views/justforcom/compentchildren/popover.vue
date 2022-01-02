<template>
     <div class="zuiwai">
       <h3 class="mytitle">点击事件</h3>

            <div class="showpop">
                  <fan-popover
           content="这是一段内容。">>
             
             <fan-btn slot="reference">click</fan-btn>
         </fan-popover>

            </div>   

  <h3 class="mytitle">hover事件</h3>
         <div class="showpop">
                <fan-popover
           content="这是一段内容。"
           trigger='hover'>
             
             <fan-btn slot="reference">hover</fan-btn>
         </fan-popover>

            </div>   
         

         <h3 class="mytitle">focus事件</h3>
         <div class="showpop">
                <fan-popover
           content="这是一段内容。"
           trigger='focus'>
             
             <fan-btn slot="reference">focus</fan-btn>
         </fan-popover>

            </div>   


             <h3 class="mytitle">手动点击</h3>
         <div class="showpop">
                <fan-popover
           content="这是一段内容。"
           trigger='manual'>
             
             <fan-btn slot="reference">manual</fan-btn>
         </fan-popover>

            </div>   
     </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.zuiwai{
    margin-left: 20px;
}
.mytitle{
    margin: 55px 0 20px 5%;
    font-weight: 400;
    color: #1f2f3d;
}
.showpop{
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>