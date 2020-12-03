<template>
  <tab-bar>
          <tab-bar-item path="/home">
            <span slot="item-icon" class=" iconfont">&#xe604;</span>
             <div slot="item-text">首页</div>
          </tab-bar-item>
          <tab-bar-item path="/catergory" activecolor='orange'>
            <span slot="item-icon" class="iconfont">&#xe652;</span>
             <div slot="item-text">分类</div>
          </tab-bar-item>
          <tab-bar-item path="/cart" activecolor='orange'>
            <span slot="item-icon" class="iconfont">&#xf0179;</span>
             <div slot="item-text">购物车</div>
          </tab-bar-item>
          <tab-bar-item path="/profile" activecolor='orange'>
             <span slot="item-icon" class="iconfont">&#xe602;</span>
             <div slot="item-text">我的</div>
            </tab-bar-item> 
     </tab-bar>
</template>

<script>
import  TabBar from './tabbar/TabBar'
import TabBarItem from './tabbar/TabBarItem'
export default {
    name:'MainTabBar',
    components:{
        TabBar,
    TabBarItem
    }
    
}
</script>

<style>

</style>