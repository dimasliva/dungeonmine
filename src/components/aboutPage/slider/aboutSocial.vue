<template>
    <div class="container">
        <img class="header" src="../../../assets/social.png"/>
        <div class="content">
            <h1>Links to my social networks</h1>
            <v-social :data_social="socials"/>
        </div>
    </div>
</template>

<script>
    import VSocial from "../v-social";

    export default {
        name: "my-aboutSocial",
        components: {VSocial},
        data() {
            return {
                socials: [
                    {id: 1, img: "telegram.png", title: 'My Telegram', description: 'Write your suggestions ', link: 'here', ref:'https://t.me/DmitryErmilov0'},
                    {id: 2, img: "vk.jpg", title: 'My Vk', description: 'Ask "How are you?" ', link: 'here', ref:'https://vk.com/id554796471'}
                ]
            }
        }
    }
</script>

<style scoped>
    .container {
        width: 100%;
        height: 120px;
    }

    .container .header {
        position: absolute;
        width: 600px;
        top: -0px;
        left: 300px;
    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 480px;
        color: white;
        font-family: Arial;
        font-size: 25px;
    }
</style>