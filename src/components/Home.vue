<template>
<h1>Hellow use, welcome on Home page</h1>
</template>
<script>
export default{
    name:'HomePage',
    mounted()
    {
        let user = localStorage.getItem('user-info');
        if(!user){
            this.$router.push({name:"SignUp"});
        }
        console.log(user,'user')
    }
}
</script>