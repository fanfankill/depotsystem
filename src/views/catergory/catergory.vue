<template>
     <div>
         <banner2></banner2>
         <input type="text" v-model='username'>
          <input type="text" v-model='password' >
           <input type="text" v-model="gender">
            <input type="text" v-model="role">
            <input type="text" v-model="phoneNumber">
            <button @click="input_form">提交</button>
     </div>
</template>

<script>
import banner2 from '../../components/lunbo/lunbo2'
import axios from 'axios'

export default {
    name:'catergory',
    components:{
        banner2
    },
    data() {
        return {
            username:'fjxfan',
            password:'fjx1110fff',
            gender:'0',
            role:'1',
            phoneNumber:13155557777

        }
    },
    methods: {
        input_form()
        {
            alert(this.username)
            axios.post('/travel/user/addUser',{
               
                    username:this.username,
                    password:this.password,
                    phoneNumber:this.phoneNumber
                }
            ).then(res=>{
                alert(this.phoneNumber)
                console.log(res)
                alert('提交成功')
            }).catch(err=>{
                console.log(err)

            })
        }
    },
}
</script>

<style>

</style>