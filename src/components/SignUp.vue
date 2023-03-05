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
export default {
    name:'SignUp',
    data(){
        return{
            'name':'',
            'gmail':'',
            'password':''
        }
    },

    methods: {
        signUp(){
            console.log('hiiiiii');
        }
    },
}
</script>

<style>
.logo{
    width: 100px;
}
.register input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;

}
.register button{
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    color: #fff;
    background-color: skyblue;
    cursor: pointer;
}
</style>