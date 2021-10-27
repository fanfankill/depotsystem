import fanbtn from './button/index.vue'
import faninput from './input/index.vue'
import fandiglog from './diglog/index.vue'
import fanalert from '../fanfanui/alert/index.vue'
import fanbadge from '../fanfanui/badge/index.vue'
import fanlink from '../fanfanui/link/index.vue'
import fanimgge from '../fanfanui/image/index.vue'



// 组件列表
const allcomponents=[
    fanbtn,
    faninput,
    fandiglog,
    fanalert,
    fanbadge,
    fanlink,
    fanimgge,
]


const install=function(Vue){
     // 遍历并注册所有组件
     allcomponents.map(component =>{
        Vue.component(component.name, component);
     })

}

// 检测是否为vue环境
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install
}