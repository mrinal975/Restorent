<template>
    <img class="logo" alt="Logo" src="../assets/resto.jpg" />
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name"/>
        <input type="text" v-model="gmail" placeholder="Enter Email"/>
        <input type="password" v-model="password" placeholder=""/>
        <button v-on:click="signUp">SignUp</button> 
    </div>
</template>
<script>

import axios from 'axios';

export default {
    name:'SignUp',
    data(){
        return{
            name:'',
            gmail:'',
            password:''
        }
    },

    methods: {
        async signUp(){
            let response = await axios.post("http://localhost:3000/users",{
                name:this.name,
                gmail:this.gmail,
                password :this.password
            })
            .catch(function (error) {
                console.log(error);
            });
            
            if(response.status==201){
                localStorage.setItem("user-info", JSON.stringify(response.data));
                this.$router.push({name:'Home'});
            }

                        
        }
    },
    
    mounted()
    {
        let user = JSON.parse(localStorage.getItem('user-info'));
        if(user){
            this.$router.push({name:"Home"})
        }
    }
}
</script>