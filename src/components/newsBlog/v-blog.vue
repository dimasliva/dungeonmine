<template>
    <div id="blog-articles" class="blog-articles" v-for="blog in blogs_data" :key="blog.id">
        <router-link to="/about">

        <div class="article-wrapper" >

                <!--        Image        -->
                <div class="article-image">
                    <img :src="require('@/assets/' + blog.img)"/>
                </div>
                <!--            Content of article            -->
                <div class="article-content">

                    <h2 class="header-2">
                        <span class="article-title">
                            {{blog.title}}
                        </span>
                    </h2>


                    <div class="article-summary">
                        {{blog.desc}}
                    </div>

                    <div class="article-meta">
                        <span class="publish-date">{{blog.data}}</span>
                    </div>

                </div>

        </div>

        </router-link>

    </div>
</template>

<script>
    export default {
        name: "v-blog",
        props: {
            blogs_data: {
                type: Array,
                default: () => []
            }
        }
    }
</script>

<style scoped>
    .article-wrapper {
        height: 315px;
        padding: 60px;
        position: relative;
        background: url('../../assets/bottom_corner.png') 50% 100% no-repeat;
        line-height: 1.5;
    }
    .blog-articles > a {
        text-decoration: none;
        transition: .3s ease-in-out;
    }
    .blog-articles > a:hover .article-image > img {
        box-shadow: 0px 0px 50px 5px #84511b;
    }
    .article-image {
        float: left;
        margin-right: 50px;
    }
    .article-image > img {
        width: 200px;
        transition: .3s ease-in-out;
    }
    .article-content {
        font-family: Arial;
        color: white;
    }
    .article-summary {
        padding: 20px 0px;
        font-size: 16px;
        font-family: Arial;
    }
    .article-meta {
        float: left;
    }
</style>