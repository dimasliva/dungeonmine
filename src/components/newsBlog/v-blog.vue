<template>
    <div id="blog-articles" class="blog-articles">

        <div class="article-wrapper">
            <router-link to="/about">

                <!--        Image        -->
                <div class="article-image">
                    <img src="@/assets/zombieHead.jpg"/>
                </div>
                <!--            Content of article            -->
                <div class="article-content">
                    <h2 class="header-2">
                        <span class="article-title">
                            Even the Australopithecus catches a mammoth in this way. You just need...
                        </span>
                    </h2>

                    <span class="clear"><!-- --></span>

                    <div class="article-summary">
                        In this article, you will learn how to properly catch a mammoth on ...
                    </div>
                    <span class="clear"><!-- --></span>
                </div>
            </router-link>

            <!--        Date            -->
            <div class="article-meta">
                <span class="publish-date">8/10/2021</span>
            </div>
            <span class="clear"><!-- --></span>

        </div>
    </div>
</template>

<script>
    export default {
        name: "v-blog"
    }
</script>

<style scoped>

    .article-image > img {
        width: 100px;
    }
</style>