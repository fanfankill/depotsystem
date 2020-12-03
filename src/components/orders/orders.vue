<template>
  <div id="orders">




         <div class="all_orders">
              <tab-card></tab-card>
         </div>
     
  </div>
</template>

<script>

import TabCard from './orderchild/tabcard'

export default {
    data() {
        return {
            
        }
    },
        components:{
           
            TabCard
             
        }
}
</script>

<style>
#orders{
    width: 100%;
    height: 100%;
    margin-top:-60px ;
    background-color:aqua ;
    position: relative;
    
}


.all_orders{
    margin: auto;
   padding-top: 80px;
    width: 1000px;
}
</style>