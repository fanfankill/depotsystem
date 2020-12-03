<template>
  <div>
      <div class="banner">
          <img v-for="(v,i) in img"  :key="i" :src="v" v-show="i==n">
          <div class="banner-circle">
              <ul>
                  <li v-for="(v,i) in img" :key="i" :class="i==n?'selected':''"></li>
              </ul>
              </div>  
      </div>
  </div>
</template>

<script>
export default {
    name:'banner',
    data() {
        return {
            n:0,
            img:[
                require('../../assets/img/img2/1.jpg'),
                require('../../assets/img/img2/2.jpg'),
                require('../../assets/img/img2/3.jpg'),
                require('../../assets/img/img2/4.jpg'),
            ],
        }
        },
            methods: {
                fun:function(){
                    setInterval(this.play,2000)
                },
                play:function(){
                    this.n++;
                    if(this.n==this.img.length){
                        this.n=0;
                    }
                }
            },
            mounted(){
                this.fun()
            }
        
    
}
</script>

<style>
ul{
    list-style: none;
}
body{
    font-size:14px;
    background-color: #fff;
    overflow-y: scroll;
    overflow-x: hidden;
}
html,body{
    max-width: 720px;
    height: 100%;
    margin: 0 auto;
}

.banner{
    position: relative;
}
.banner .banner-circle{
    position: absolute;
}
.banner .banner-circle li{
    display: inline-block;
    background: rgba(0, 0, 0, .3);
    border-radius:50%;
    padding: 5px;
    margin: 3px;
}
/*让点点居中 */
.banner-circle{
    left: 40%;
}
.banner .banner-circle .selected{
     background: rgba(0, 0, 0, .8);
}
.banner img{
    width: 100%;
    margin: 0;
    padding: 0;
    height: 500px;


}
</style>