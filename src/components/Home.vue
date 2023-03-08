<template>
<Header />
<h1>Hellow use, welcome on Home page</h1>
</template>
<script>
import Header from './Header.vue';
export default{
    name:'Home',
    components: {
        Header
    },
    mounted()
    {
        let user = JSON.parse(localStorage.getItem('user-info'));
        if(!user){
            this.$router.push({name:"SignUp"});
        }
        console.log(user,'user')
    }
}
</script>