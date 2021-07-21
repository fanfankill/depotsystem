import Button from "./button"


const components = [
    Button
]


//vue。use使用时，必须要有install方法。参数就是vue。

const install  = (Vue)=>{
    for(var key in components){ 
        Vue.component(components[key].name,components[key])
    }
}

export default {
    install,
    Button
}