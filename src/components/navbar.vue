<template>
    <nav class="nav">
        <ul class="nav__list">
            <a> <img :src="img"/></a>
            <li class="nav__list__li">Home</li>
            <li class="nav__list__li">About</li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "my-navbar",
        data() {
            return {
                img: "https://i.pinimg.com/originals/2c/45/ab/2c45abc15f5b4b9fb0c68e57395e1849.png"
            }
        }
    }
</script>

<style scoped>

</style>