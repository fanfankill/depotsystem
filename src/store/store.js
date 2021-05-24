
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        isShow:true,
        count:0,
        id:'0',
        username:'fanfan',
        priface:'党员',
        age:'19',
        department:'人事部',
        household:'岳阳',
        nowpalce:'长沙',
        nickname:'昵称',
        phoneNumber:'请输入手机号码',
        emil:'1623920276@qq.com',
        role:'科长',
        height:'1.82',
        createTime:'测试时间',
        img:'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',

        /*路由名字储存 */
        breadListState: [], // 面包屑列表数据
        /*token储存 */
        token: localStorage.getItem('token') ? localStorage.getItem('token') : ''
     
        


    },
    getters:{/*实时监听state值的变化 */

        /*要传state  */
        getCount(state){
            return state.username;
        }
    },
    mutations:{
        /**对侧边栏收缩改变 */
        changecoll(state,iscoll)
        {
            state.iscollape=iscoll
        },
        /*token方法 */
        changeLogin (state, user) {

            state.token = user.token;
      
            localStorage.setItem('token', user.token);
        },
        breadListMutations(getters, list) {
            getters.breadListState = list;
          }


    },
    actions:{
            /*Action 提交的是 mutation，而不是直接变更状态。
Action 可以包含任意异步操作。*/

    }
    
})


