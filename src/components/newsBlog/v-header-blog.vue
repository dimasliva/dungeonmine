<template>
    <div class="home-banner" :style="{'background-image': 'url('+ require('@/assets/giphy.gif') +')'}">
        <div class="home-banner-content exocet-silver-container no-font-boost">
            <h2 class="home-banner-title exocet-silver" data-text="Buy Now">Read news</h2>
            <div class="home-banner-buttons">
                <div class="btn btn-home">
                    <router-link to="/">
                        <p>Home</p>
                    </router-link>
                </div>
                <div class="btn btn-about">
                    <router-link to="/about">
                        <p>About me</p>
                    </router-link>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-header-blog"
    }
</script>

<style scoped>

    .home-banner {
        margin: auto;
        width: 825px;
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: -20px;

    }

    .home-banner-content {
        position: absolute;
        top: 74%;
        left: 35%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        font-family: 'Minecraft', sans-serif;
        width: 290px;
        height: 95px;
    }

    .home-banner-title {
        color: green;
        letter-spacing: 3px;
        margin-bottom: 5px;
        font-size: 50px;
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none;
    }

    .home-banner-buttons {
        width: 95%;
        height: 100%;
    }

    .btn {
        background: #2e849e;
        padding: 3px 5px 9px;
        border-radius: 5px;
    }

    .btn > a {
        font-size: 24px;
        color: white;
        text-decoration: none;
    }

    .btn-home {
        float: left;
        background: #2e849e;
        transition: .3s ease-in-out;
    }

    .btn-home:hover {
        background: #246a80;
    }

    .btn-about {
        float: right;
        background: #afc43a;
        transition: .3s ease-in-out;
    }

    .btn-about:hover {
        background: #85952a;
    }
</style>