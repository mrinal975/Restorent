<template>
    <div class="nav">
        <a href="home">Home</a>
        <a href="home">Add Restaurant</a>
        <a href="home">Update Restaurant</a>
        <a href="home">Logout</a>
    </div>
</template>

<script>
export default{
    name: "Header"
}
</script>

<style>
#app{
    font-family: Avenir, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing :grayscale;
    text-align: center;
    color: #2c3e50;
}
.nav{
    background-color: #333;
    overflow: hidden;
    margin-right: 20px;
}

.nav a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 16px 14px;
    text-decoration: none;
    font-size: 14px;
    margin-right: 4px;
}

.nav a:hover{
    background-color: #ddd;
    color: #222;
}

</style>