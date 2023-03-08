<template>
<Header />
<h1>Hello {{name}}, welcome on Home page</h1>
</template>
<script>
import Header from './Header.vue';
export default{
    name:'Home',
    data(){
        return {
            name:""
        }
    },

    components: {
        Header
    },

    mounted()
    {
        let user = JSON.parse(localStorage.getItem('user-info'));
        this.name = user.name;
        if(!user){
            this.$router.push({name:"SignUp"});
        }
    }
}
</script>