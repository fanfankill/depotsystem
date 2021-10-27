export const mymixin={
    data() {
        return {
            mymixinmessage:'我是混入实例的数据'
        }
    },
    created() {
        console.log('我是混入方法的钩子函数');
    },
}