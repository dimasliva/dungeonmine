<template>
    <div class="about_page">
        <div class="container">
            <!--      Header      -->
            <about-header/>
            <!--      Navbar      -->
            <div class="nav-menu">
                <nav class="scroll">
                    <ul id="nav-menu">
                        <li class="list_item"><a href="#language">Programming language</a></li>
                        <li class="list_item"><a href="#frameworks">Frameworks</a></li>
                        <li class="list_item"><a href="#projects">Projects</a></li>
                        <li class="list_item"><a href="#social">Social</a></li>
                    </ul>
                </nav>
            </div>
            <!--      News      -->
            <div class="language">
                <section class="bgLanguage" id="language">
                    <h1 >Programming Language</h1>
                    <div class="slider">
                        <v-carousel :carousel_data="laguages" :interval="2000"/>
                    </div>
                </section>
                <section class="bgLanguage" >
                    <h1 id="frameworks">Frameworks</h1>
                    <div class="slider" >
                        <v-carousel :carousel_data="frameworks" :interval="2000" />
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
    import AboutHeader from "../components/aboutPage/aboutHeader";
    import VCarousel from "../components/aboutPage/slider/v-carousel";

    export default {
        name: "about-page",
        components: { VCarousel, AboutHeader},
        data() {
            return {
                laguages: [
                    {id: 1, name: 'img1', img: 'js.png'},
                    {id: 2, name: 'img2', img: 'typescript.png'},
                    {id: 3, name: 'img3', img: 'Java.png'},
                ],
                frameworks: [
                    {id: 1, name: 'img1', img: 'vue.jpeg'},
                    {id: 2, name: 'img2', img: 'express.jpg'},
                    {id: 3, name: 'img3', img: 'jest.png'},
                    {id: 4, name: 'img4', img: 'electron.png'},
                    {id: 5, name: 'img5', img: 'spring.png'},
                ]
            }
        }
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
    .nav-menu {
        background-color: white;
        width: 100%;
        height: 76px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 5px 0px 0px lightgray;
        z-index: 1;
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
        margin-right: 48px;
        padding: 8px 12px;
        text-decoration: none;
        color: black;
        font-weight: bold;
        text-transform: uppercase;
        font-family: "Noto Sans";
        font-size: 14px;
    }
    .slider {
        width: 500px;
        margin:auto;
    }
    .language {
        width: 100%;
        background-color: #ececec;
        height: 100%;
        padding-bottom: 100px;
    }
    .bgLanguage {
        width: 100%;
        margin: auto;
        padding-top: 80px;
        text-align: center;
    }
    .bgLanguage > h1 {
        font-family: Arial;
        padding-bottom: 20px;
        font-size: 26px;
    }
</style>