<template>
  <div>
      <h3 class="mytitle">基本用法</h3>
      <div class="demo-block">
        <div class="showimg">
        <div class="block">
            <span class="showtitle">fill</span>
             <fan-image 
      style="width: 80%; height: 100px"
      fit="fill"
      :src="mysrc">
      </fan-image>
        </div>

         <div class="block">
              <span class="showtitle">contain</span>
             <fan-image 
      style="width:  80%; height: 100px"
       fit="contain"
      :src="mysrc">
      </fan-image>
        </div>

         <div class="block">
                <span class="showtitle">cover</span>
             <fan-image 
      style="width:  80%; height: 100px"
      fit="cover"
      :src="mysrc">
      </fan-image>
        </div>

         <div class="block">
             <span class="showtitle">none</span>
             <fan-image 
      style="width:  80%; height: 100px"
      fit="none"
      :src="mysrc">
      </fan-image>
        </div>

         <div class="block">
             <span class="showtitle">scale-down</span>
             <fan-image 
      style="width:  80%; height: 100px"
       fit="scale-down"
      :src="mysrc">
      </fan-image>
        </div>
    </div>
      </div>



         <h3 class="mytitle">加载时内容 </h3>
      <div class="demo-block">
        <div class="showimg">
        <div class="block-error">
            <span class="showtitle">默认</span>
             <fan-image 
      style="width:100%; height: 200px"
      src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
        >
      </fan-image>
        </div>

         <div class="block-error">
              <span class="showtitle">自定义</span>
             <fan-image 
      src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
      style="width:100%; height: 200px"
      >
       <div slot="placeholder" >
           我把默认插槽替换了
      </div>
     
      </fan-image>
        </div>

    </div>

      </div>


       <h3 class="mytitle">加载失败</h3>
      <div class="demo-block">
        <div class="showimg">
        <div class="block-error">
            <span class="showtitle">默认</span>
             <fan-image 
      @error="geterror"
      style="width:100%; height: 200px"
        >
      </fan-image>
        </div>

         <div class="block-error">
              <span class="showtitle">自定义</span>
             <fan-image 
      style="width:100% ; height: 200px"
      >
         <div slot="error" class="image-slot">
        <i class="el-icon-picture-outline"></i>
      </div>
     
      </fan-image>
        </div>

    </div>

      </div>

      >

  </div>
</template>

<script>
export default {
    data() {
        return {
         mysrc:'http://139.196.87.221:3000/imgs/1625799551444_u=3572837379,4046716905&fm=26&fmt=auto&gp=0.jpg'
        }
    },
    methods: {
        geterror(e){
            console.log(e);
        }
    },
}
</script>

<style scoped>
.mytitle{
    margin: 55px 0  20px 5%;
    font-weight: 400;
    color: #1f2f3d;
}
.demo-block {
    width: 90%;
    margin: auto;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: .2s;
}
.block{
    padding: 30px 0;
    text-align: center;
    border-right: 1px solid #eff2f6;
    display: inline-block;
    width: 20%;
    box-sizing: border-box;
    vertical-align: top;
}
.block-error{
    padding: 30px 0;
    text-align: center;
    border-right: 1px solid #eff2f6;
    display: inline-block;
    width: 49%;
    box-sizing: border-box;
    vertical-align: top;
}
.showimg{
    width: 100%; 
    display: flex;
    justify-content: space-around;
    
}
.showtitle{
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
}
.image-slot{
        display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #f5f7fa;
    color: #909399;
    font-size: 14px;
}
.demo-block-lazy{
    width: 90%;
    margin: auto;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: .2s;
    height: 300px;
    overflow: auto;

}
.demo-lazy{
    width: 100%;
    height: 1000px;
}
</style>