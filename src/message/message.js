
//
export default{
    methods:{
      // 消息提示
      messageBox(message,type,userHTML,showClose,duration){
        const msgInfo = message
        const msgType = type || 'warning'
        const msgUserHTML = userHTML || false
        const msgShowClose = showClose || false
        const msgDuration = duration || 2000
        this.$message({
          message: msgInfo,
          type:msgType,
          dangerouslyUseHTMLString:msgUserHTML,
          showClose:msgShowClose,
          duration:msgDuration
        })
      },
      // 确认提示框
      confirmMessageBox(message,title, confirType, msgUserHTML){
        return new Promise((resolve,reject)=>{
          this.$confirm(message, title || '提示',{
            confirmButtonText:'确认',
            cancelButtonText:'取消',
            dangerouslyUseHTMLString:msgUserHTML || false,
            type:confirType || 'warning'
          }).then(()=>{
            resolve()
          }).catch(()=>{
              reject()
          })
        })
      }
    }
  }
