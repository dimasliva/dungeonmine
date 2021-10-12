<template>
    <div class="header">
        <div class="container">
            <nav class="nav">
                <div class="logo">
                    <router-link to="/">
                        <a>
                            <img class="nav__list__logo" :src="img"/>
                        </a>
                    </router-link>

                </div>
                <ul class="nav__list">
                    <my-li :links="links"/>
                </ul>
            </nav>
        </div>
    </div>

</template>

<script>
    import MyLi from "./UI/li";

    export default {
        name: "my-navbar",
        components: {MyLi},
        data() {
            return {
                img: "https://i.pinimg.com/originals/2c/45/ab/2c45abc15f5b4b9fb0c68e57395e1849.png",
                links: [
                    {
                        id: 1, imgGif: 'https://clck.ru/Y5Nqt', imgStatic: 'https://clck.ru/NbMpq',
                        title: 'Craft', active: false, routerTo: '/crafts'
                    },
                    {
                        id: 2, imgGif: 'https://clck.ru/Y6csR', imgStatic: 'https://clck.ru/Y6cuD',
                        title: 'About', active: false, routerTo: '/about',

                    }
                ],
                homepage: '/'
            }
        }, methods: {}
    }
</script>

<style scoped>
    .header {
        position: relative;
        z-index: 2;
    }
    .container {
        display: flex;
        justify-content: center;
        min-width: 320px;
        background-image: url("http://3.bp.blogspot.com/-i4ig21EjOq8/VhJA4Ac6tEI/AAAAAAAAARA/XMbJg5iixHI/s1600/Block%2Bof%2BCobblestone%2B1.png");
        background-size: contain;
        margin: 0px auto;
        padding: 0;
        width: 100%;
    }

    .container:after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.8);
    }

    .nav {
        max-width: 1200px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        overflow: visible;
        width: 90%;
        z-index: 3;
    }

    .logo {
        width: 235px;
        float: left;
        transition: .3s ease-in-out;
        transform: scale(1, 1);
    }

    .logo img {
        width: 265px;
        max-width: 100%;
    }

    .logo:hover {
        transform: scale(1.2, 1.2);
    }

    .nav__list {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
    }

</style>