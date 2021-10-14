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
                        id: 1, imgGif: 'https://i.pinimg.com/originals/e5/3b/74/e53b7448d653e93d37bbaeda27779868.gif',
                        imgStatic: 'https://cdn.pixabay.com/photo/2016/11/11/14/49/minecraft-1816996_1280.png',
                        title: 'Craft', active: false, routerTo: '/crafts'
                    },
                    {
                        id: 2, imgGif: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/03969d5e-2dc8-44dd-8ca7-04ee376f78cc/d9wif33-c0ee1c05-a595-4544-bf64-c40d033b9682.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAzOTY5ZDVlLTJkYzgtNDRkZC04Y2E3LTA0ZWUzNzZmNzhjY1wvZDl3aWYzMy1jMGVlMWMwNS1hNTk1LTQ1NDQtYmY2NC1jNDBkMDMzYjk2ODIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.HRoySo39pk6u9iKyYGDAQJJSW2DVI4qB8eJP_5GobCQ',
                        imgStatic: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/03969d5e-2dc8-44dd-8ca7-04ee376f78cc/d9wif33-678f70fb-be1f-4b11-a1c8-bd0ecc9dd1d6.png/v1/fill/w_360,h_360,strp/endstone_by_odnetnini_d9wif33-fullview.png',
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