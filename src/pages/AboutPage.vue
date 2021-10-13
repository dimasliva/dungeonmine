<template>
    <div class="about_page">
        <div class="container">
            <div class="header">
                <span class="title">
                    <h1 class="title_welcome">WELCOME TO THE PAGE <span>ABOUT ME</span></h1>
                    <p class="desc">
                        On this page you will find information about
                        my projects, what frameworks I use and
                        what programming languages I know.
                    </p>
                </span>
            </div>
            <div class="nav-menu">
                <nav class="scroll">
                    <ul id="nav-menu">
                        <li class="list_item"><a href="Language">Programming language</a></li>
                        <li class="list_item"><a href="Frameworks">Frameworks</a></li>
                        <li class="list_item"><a href="Projects">Projects</a></li>
                        <li class="list_item"><a href="Social">Social</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "about-page"
    }
</script>

<style scoped>
    .about_page {
        max-width: 1200px;
        margin: 0 auto;
    }

    .container {
        position: relative;
        display: flex;
        flex-direction: column;
    }

    .header {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 600px;
        background-size: cover;
        background-position: center;
        background-image: url("https://sm.ign.com/t/ign_ap/review/s/super-smas/super-smash-bros-ultimate-dlc-review-minecraft-steve_twjf.1200.jpg");
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
    .nav-menu {
        background-color: white;
        width: 100%;
        height: 76px;
        text-align: center;
        box-shadow: 0px 0px 10px 0px;
    }
    .scroll {

    }
    .nav-menu {
        margin: 0px auto;
        padding: 24px 12px;
    }
    .list_item {
        display: inline-block;
        margin: 0px 10px;
    }
    .list_item > a {
        text-decoration: none;
        color: black;
        font-weight: bold;
        text-transform: uppercase;
        font-family: "Noto Sans";
        font-size: 14px;
    }
</style>