<template>
  <div>
    <div>
      
    </div>
     <form-delivery></form-delivery>
  </div>
</template>

<script>
import  FormDelivery from '../../components/form/deliverypeople'
import {getdeliverydata} from '../../network/delivery'
export default {
  components:{
    FormDelivery,
  },
 created() {
   getdeliverydata().then(res=>{
    console.log(res);
    console.log('11');
   })
 },
}
</script>

<style>

</style>