<template>
    <div class="about_page">
        <div class="container">
            <!--      Header      -->
            <about-header/>
            <!--      Navbar      -->
            <div class="nav-menu" id="navbar">
                <nav class="scroll">
                    <ul id="nav-menu">
                        <li class="list_item language"><a class="" href="#language">Programming language</a></li>
                        <li class="list_item frameworks"><a class="" href="#frameworks">Frameworks</a></li>
                        <li class="list_item other"><a class="" href="#other">Other</a></li>
                        <li class="list_item networks"><a class="" href="#networks">networks</a></li>
                    </ul>
                </nav>
            </div>
            <!--      News      -->
            <div class="sectionContainer">
                <!--        Languages        -->
                <section class="sectionBg" id="language">
                    <h1>Programming Language</h1>
                    <div class="slider">
                        <v-carousel :carousel_data="languages" :interval="2000"/>
                    </div>
                </section>
                <!--        Frameworks        -->
                <section class="sectionBg" id="frameworks">
                    <h1>Frameworks</h1>
                    <div class="slider">
                        <v-carousel :carousel_data="frameworks" :interval="2000" />
                    </div>
                </section>
                <!--        Other        -->
                <section class="sectionBg" id="other">
                    <h1>Other</h1>
                    <div class="slider">
                        <v-carousel :carousel_data="other" :interval="2000" />
                    </div>
                </section>

                <!--        Social        -->
                <section class="sectionBg" id="networks">
                    <my-about-social/>
                </section>
            </div>


        </div>
    </div>
</template>

<script>
    import AboutHeader from "../components/aboutPage/aboutHeader";
    import VCarousel from "../components/aboutPage/slider/v-carousel";
    import MyAboutSocial from "../components/aboutPage/slider/aboutSocial";

    export default {
        name: "about-page",
        components: {MyAboutSocial, VCarousel, AboutHeader},
        data() {
            return {
                languages: [
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
                ],
                other: [
                    {id: 1, name: 'img1', img: 'mongodb.png'},
                    {id: 2, name: 'img2', img: 'react.png'},
                    {id: 3, name: 'img3', img: 'PostgreSQL.jpg'},
                    {id: 4, name: 'img4', img: 'node.jpg'},
                    {id: 5, name: 'img5', img: 'mysql.png'},
                ]
            }
        },
        mounted() {
            window.onscroll = function() {myFunction()};


            const navbar = document.getElementById("navbar");
            const sticky = navbar.offsetTop;

            function myFunction() {
                if(window.pageYOffset >= sticky) {
                    navbar.classList.add("sticky");
                } else {
                    navbar.classList.remove("sticky");
                }
            }

            const sections = document.querySelectorAll("section")
            const navLi = document.querySelectorAll(".nav-menu nav ul li")

            window.addEventListener("scroll", () => {
                let current = '';
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    if(pageYOffset >= sectionTop) {
                        current = section.getAttribute('id')
                    }
                })

                navLi.forEach(li => {
                    li.classList.remove('active')
                    if(li.classList.contains(current)) {
                        li.classList.add('active');
                    }
                })
            })

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
        overflow: hidden;
        z-index: 1;
    }
    .sticky {
        position: fixed;
        top: 0;
        width: 100%;
    }
    .active {
        background-color: black;
    }
    li.active > a {
        color: white;
    }
    .nav-menu {
        margin: 0px auto;
    }
    .list_item {
        display: inline-block;
        margin-right: 20px;
    }
    .list_item > a {
        text-decoration: none;
        color: black;
        font-weight: bold;
        text-transform: uppercase;
        font-family: "Noto Sans";
        font-size: 14px;
        padding: 10px;
    }
    .slider {
        width: 500px;
        margin:auto;
    }
    .sectionContainer {
        width: 100%;
        background-color: #ececec;
        height: 100%;
        padding-bottom: 100px;
    }
    .sectionBg {
        width: 100%;
        margin: auto;
        padding-top: 80px;
        text-align: center;
    }
    .sectionBg > h1 {
        font-family: Arial;
        padding-bottom: 20px;
        font-size: 26px;
    }

</style>