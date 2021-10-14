<template>
    <div class="header">
                <span class="title">
                    <h1 class="title_welcome">WELCOME TO THE PAGE <span>ABOUT ME</span></h1>
                    <p class="desc">
                        On this page you will find information about
                        my projects, what frameworks I use and
                        what programming languages I know
                    </p>
                </span>
    </div>
</template>

<script>
    export default {
        name: "about-header"
    }
</script>

<style scoped>
    .header {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 600px;
        background-size: cover;
        background-position: center;
        background-image: url("../../assets/super-smash-bros-ultimate-dlc-review-minecraft-steve_twjf.1200.webp");
        background-repeat: no-repeat;
    }

    .title {
        color: white;
        font-family: Arial;
        position: relative;
        width: 450px;
        height: 300px;
        margin: 0 auto;
        margin-top: 300px;
    }

    .title_welcome {
        width: 100%;
        margin: 0 auto;
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 65px;
        text-align: center;
        color: white;

    }

    .title_welcome > span {
        color: #fcdd3a;
        width: 100%;
        font-size: 82px;
    }

    .desc {
        width: 100%;
        font-weight: 500;
        font-size: 22px;
        line-height: 33px;
        text-align: center;
        font-weight: bold;
    }
</style>