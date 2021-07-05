
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        //头像位置
        myuserimg:'',
        //名字
        myname:'',
      
     
        
    },
    getters:{/*实时监听state值的变化 */

        //返回头像img
        getimg(state)
        {
            return state.myuserimg
        },
        //返回名字
        getname(state)
        {
            return state.myname  
        },
    },
    mutations:{
        //更换头像
        changeimg(state,img)
        {
            state.myuserimg=img
        },
        //更换名字
        changename(state,name)
        {
            state.myname=name
        }

    },
    actions:{
            /*Action 提交的是 mutation，而不是直接变更状态。
Action 可以包含任意异步操作。*/

    }
    
})


