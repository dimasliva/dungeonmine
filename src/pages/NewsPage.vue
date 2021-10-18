<template>
    <div class="wrapper">
        <!--    Banner    -->
        <div class="home-banner-section">
            <v-header-blog/>
        </div>

        <!--    Blogs    -->
        <div class="blogs-container" :style="{backgroundImage: 'url(' + require('@/assets/dirt.jpg') + ')'}">
            <v-blog :blogs_data="blogs"/>
        </div>
    </div>
</template>

<script>
    import VBlog from "../components/newsBlog/v-blog";
    import VHeaderBlog from "../components/newsBlog/v-header-blog";
    export default {
        name: "NewsPage",
        components: {VHeaderBlog, VBlog},
        data() {
            return {
                blogs: [
                    {id: 1, img: 'zombieHead.jpg', title: 'Even the Australopithecus catches a mammoth in this way. You just need...', desc: 'In this article, you will learn how to properly catch a mammoth. This method was used every 100,000 years ago. This method does not require registration and does not even need to send SMS anywhere. To do this, you just need to every day... ', data: '3/1/2022'},
                    {id: 2, img: 'skelet.jpg', title: 'The stick will be sharp all the time you just need...', desc: 'Do you have a sharp stick? British scientists have found a way out of this difficult situation! You just need to take your stick every day and...', data: '2/1/2022'},
                    {id: 3, img: 'creeperHead.jpg', title: 'Mammoths will die out this year! Ubashabiba predicted this last year...', desc: 'Ubashabiba predicted last year that all mammoths on earth would die out. This information was hidden for 100,000 years by the highest authorities in order to avoid an all-over panic. When people find out they will...', data: '1/1/2022'}
                ]
            }
        }
    }
</script>

<style scoped>
    @import url('http://fonts.cdnfonts.com/css/minecraft-4');

    .wrapper {
        max-width: 1000px;
        width: 100%;
        margin: 50px auto;
    }

    .home-banner-section {
        position: relative;
        width: 950px;
        height: 600px;
        background: url("../assets/corner.png") no-repeat;
        background-size: contain;
        margin: auto;
        padding: 62px;
    }

    .blogs-container {
        position: relative;
        margin-top: 30px;
        border: 3px solid gray;
        height: auto;
        object-fit: contain;
    }
</style>