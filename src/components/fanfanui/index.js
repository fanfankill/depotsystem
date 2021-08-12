import fanbtn from './button/index.vue'
import faninput from './input/index.vue'


// 组件列表
const allcomponents=[
    fanbtn,
    faninput
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