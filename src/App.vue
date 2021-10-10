<template>
    <my-navbar/>
    <div class="app">
        <router-view>
        </router-view>
    </div>

</template>

<script>

    import MyNavbar from "./components/navbar";
    export default {
        components: {MyNavbar},
        data() {
            return {

            }
        }
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        -moz-background-size: 100%; /* Firefox 3.6+ */
        -webkit-background-size: 100%; /* Safari 3.1+ и Chrome 4.0+ */
        -o-background-size: 100%; /* Opera 9.6+ */
        background-size: 100%; /* Современные браузеры */
        background-image: url("./assets/background.jpg");
        position: relative;
        height: 100vh;
    }
</style>
