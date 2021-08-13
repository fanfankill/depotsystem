<template>
  <div>
        <button @click="show">
    Toggle
  </button>
  

  <fan-message></fan-message>

  </div>
</template>

<script>
export default {
    data() {
        return {
             
        }
    },
    methods:{
        show()
        {
            this
        }
    }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>