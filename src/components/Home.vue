<template>
<Header />
<h1>Hello {{name}}, welcome on Home page</h1>

<table border="1">
    <tr>
        <td>Id</td>
        <td>Name</td>
        <td>Address</td>
        <td>Contact</td>
        <td>Action</td>
    </tr>
    <tr v-for="item in restaurant" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.address }}</td>
        <td>{{ item.contact }}</td>
        <td>
            <router-link :to="'/update/'+item.id">Update</router-link>

        </td>
    </tr>
</table>
</template>
<script>
import Header from './Header.vue';
import axios from 'axios';
export default{
    name:'Home',
    data(){
        return {
            name:"",
            restaurant:[]
        }
    },

    components: {
        Header
    },

    async mounted()
    {
        let user = JSON.parse(localStorage.getItem('user-info'));
        this.name = user.name;
        if(!user){
            this.$router.push({name:"SignUp"});
        } 
        let result = await axios.get("http://localhost:3000/restaurant");
        this.restaurant = result.data;
    }
}
</script>

<style>
td{
    width: 160px;
    height: 40px;
}

</style>