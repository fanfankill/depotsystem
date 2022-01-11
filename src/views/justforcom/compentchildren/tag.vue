<template>
  <div class="zuiwai">
    <h3 class="mytitle">基本标签</h3>
    <div class="flex_btw center mydiv">
      <fan-tag v-for="(item, index) in mytags" :key="index" 
      :type="item.type">
        {{ item.name }}
      </fan-tag>
    </div>

    <h3 class="mytitle">可移除标签</h3>
    <div class="flex_btw center mydiv">
      <fan-tag v-for="(item, index) in mytags" :key="index" 
      :type="item.type"
      closable
      @close="handleclose(item)">
        {{ item.name }}
      </fan-tag>
    </div>


     <h3 class="mytitle">动态标签</h3>
    <div class="flex_start center mydiv">
      <fan-tag class="mydiv_right" v-for="(item, index) in dynamicTags" :key="index" 
      closable
      @close="handleclose2(item)"
      >
        {{ item }}
      </fan-tag>

      <el-input
      v-model="myinput"
      v-if="inputvisible"
      size="small"
      ref="myinput"
      @keyup.enter.native="addtag"
      @blur="closeinput">

      </el-input>

      <fan-btn v-else size="small" @click="showinput">+new tag</fan-btn>

    </div>

     <h3 class="mytitle">不同主题</h3>
    <div class="flex_btw center mydiv">
      <fan-tag v-for="(item, index) in mytags" :key="index" 
      :type="item.type"
      closable
      >
        {{ item.name }}
      </fan-tag>
    </div>

     <div class="flex_btw center mydiv">
      <fan-tag v-for="(item, index) in mytags" :key="index" 
      :type="item.type"
      closable
      effect='dark'
    >
        {{ item.name }}
      </fan-tag>
    </div>


  </div>
</template> 

<script>
export default {
  data() {
    return {
      myinput:'',
      inputvisible:false,

      mytags: [
        {
          name: "标签一",
          type: "",
        },
        {
          name: "标签二",
          type: "success",
        },
        {
          name: "标签三",
          type: "info",
        },
        {
          name: "标签四",
          type: "warning",
        },
        {
          name: "标签五",
          type: "danger",
        },
      ],


      dynamicTags:['标签一','标签二']
    };
  },
  methods:{
    handleclose(tag){
      console.log(tag);
         this.mytags.splice(this.mytags.indexOf(tag), 1);
    },
    handleclose2(tag){
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showinput(){
      this.inputvisible=true
      this.$nextTick(()=>{
        this.$refs.myinput.focus()
      })
    },

    closeinput(){
      this.inputvisible=false
    },

    addtag(){
      this.dynamicTags.push(this.myinput)
      this.closeinput()
      this.myinput=''
    }
  }
};
</script>

<style>
</style>