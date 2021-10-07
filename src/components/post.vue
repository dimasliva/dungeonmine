<template>
    <div class="header">
        <div
                v-for="post in posts"
                :key="post.id"
                :style="{backgroundImage: `url(${post.url})`,}"
                class="header__content" >
            <h3>{{post.title}}</h3>
            <p>{{post.desc}}</p>
            <my-button :posts="posts">
                {{post.btn}}
            </my-button>
        </div>
    </div>
</template>

<script>
    import MyButton from "./UI/button";
    export default {
        name: "my-post",
        components: {MyButton},
        props: {
            posts: {
                type: Array,
                required: true
            },
        },
        data() {
            return {
                urlImage: {
                }
            }
        },
        methods: {
        }
    }
</script>

<style scoped>
    .header {
        width: 1200px;
        height: 1500px;
        margin: auto;
        display: block;
        position: relative;

    }
    .header__content {
        display: flex;
        flex-direction: column;
        height: 700px;
        margin-bottom: 50px;
        background-size: cover;
        color: white;
        font-family: Aharoni;
        padding-top: 20%;
        padding-left: 10%;
        z-index: 1;
    }
    .header__content>h3 {

        font-size: 40px;
    }
    .header__content>p {
        font-size: 18px;
        line-height: 40px;
    }
</style>