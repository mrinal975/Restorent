<template>
    <Header />    
    <h1>Hello User,Welcome on Update Restaurant Page.</h1>
    <form class="update">
    <input type="text" v-model="restaurant.name"  placeholder="Enter Name" name="name"/>
    <input type="text" v-model="restaurant.address" placeholder="Enter Address" name="address"/>
    <input type="text" v-model="restaurant.contact" placeholder="Enter Contact" name="contact"/>
    <button type="button" v-on:click="updateRestaurant">Submit</button>
    </form>
    </template>

<script>
import Header from './Header.vue';
import axios from 'axios';

export default{
    name:"Update",
    components:{
        Header
    },

    data(){
        return {
            restaurant:{
                name:'',
                address:'',
                contact:''
            }
        }
    },

    async mounted(){
        let user = localStorage.getItem('user-info');
        if(!user){
            this.$router.push({name:'Login'})
        }
        let result = await axios.get('http://localhost:3000/restaurant/'+this.$route.params.id)
        this.restaurant = result.data;
        console.log('success');
    },

    methods:{
        async updateRestaurant(){
            let data = await axios.put('http://localhost:3000/restaurant/'+this.$route.params.id, this.restaurant);
            if(data.status==200){
                console.log('success');
            }

        }
    }
}

</script>