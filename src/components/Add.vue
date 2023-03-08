<template>
<Header />    
<h1>Hello User,Welcome on Add Restaurant Page.</h1>
<form class="add">
<input type="text" v-model="restaurant.name"  placeholder="Enter Name" name="name"/>
<input type="text" v-model="restaurant.address" placeholder="Enter Address" name="address"/>
<input type="text" v-model="restaurant.contact" placeholder="Enter Contact" name="contact"/>
<button type="button" v-on:click="addRestaurant">Submit</button>
</form>
</template>

<script>
import axios from 'axios';
import Header from './Header.vue';

export default{
    name:"Add",
    components: {
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

    mounted(){
        
    },

    methods:{
        async addRestaurant(){
            let data = await axios.post('http://localhost:3000/restaurant',this.restaurant)
                        .catch(function (error) {
                            // handle error
                            console.log(error);
                        })
            if(data.status==201){
                console.log('created successfully');
            }
            console.log(this.restaurant, 'colsole');
        }
    }
}
</script>