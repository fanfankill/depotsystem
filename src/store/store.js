
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        isShow:true,
        count:0,
        id:'0',
        username:'fanfan',
        nickname:'昵称',
        phoneNumber:'请输入手机号码',
        emil:'1623920276@qq.com',
        role:'身份',
        createTime:'测试时间',
        img:'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',

        /*token储存 */
        Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''

        


    },
    getters:{/*实时监听state值的变化 */

        /*要传state  */
        getCount(state){
            return state.username;
        }
    },
    mutations:{
        /*对值改变的计算 */
        changeLogin (state, user) {

            state.Authorization = user.Authorization;
      
            localStorage.setItem('Authorization', user.Authorization);
        }

    },
    actions:{
            /*Action 提交的是 mutation，而不是直接变更状态。
Action 可以包含任意异步操作。*/

    }
    
})


