<template>
    <div class="wrapper">
        <my-post :posts="posts"/>
    </div>

</template>

<script>
    import MyPost from "@/components/post";

    export default {
        name: "home-page",
        components: { MyPost},
        data() {
            return {
                posts: [
                    {
                        id: 1,
                        title: "Welcome to the club buddy",
                        desc: "Get craft any items",
                        btn: "Crafts",
                        btnColor: "#6bb643",
                        btnColorNoHover: "#6bb643",
                        btnColorHover: "#2b722a",
                        url: 'https://www.minecraft.net/content/dam/games/minecraft/screenshots/Explore.png',
                        routerTo: '/crafts',
                        width: '100%',
                        height: '500px',
                        radiusBorder: '10px',
                        marginBottom: '40px'
                    },
                    {
                        id: 2,
                        title: "Explore minecraft dungeon",
                        desc: "What's going on here?",
                        btn: "News",
                        btnColor: "#38a1ad",
                        btnColorNoHover: "#38a1ad",
                        btnColorHover: "#2c4e66",
                        url: 'https://cdn.shazoo.ru/535221_aoNewkcJOi_minecraft_caves_and_cliffs_update.jpg',
                        routerTo: '/news',
                        width: '80%',
                        height: '500px',
                        radiusBorder: '50%',
                        marginBottom: '40px'
                    },
                    {
                        id: 3,
                        title: " Do you like what you see?",
                        desc: "Link to github page",
                        btn: "Github",
                        btnColor: "#546b6d",
                        btnColorNoHover: "#546b6d",
                        btnColorHover: "#1e303d",
                        url: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2021/02/Minecraft-Cave-Cliff-Update-New-Caves.jpg',
                        routerTo: '/github',
                        width: '100%',
                        height: '500px',
                        radiusBorder: '10px',
                        marginBottom: '0px'
                    },
                ]
            }
        },
        methods: {}
    }
</script>

<style scoped>
    .wrapper {
        max-width: 1200px;
        margin: 0px auto;
        height: 100vh;
        position: relative;

    }
</style>