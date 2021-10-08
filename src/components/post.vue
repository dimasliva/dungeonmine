<template>
        <div
                :style="{backgroundImage: `url(${post.url})`,}"
                v-for="post in posts"
                :key="post.id"
                class="heroimg"
        >
            <div class="slider-left">
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
    .container {

    }
    .heroimg {
        width: 100%;
        height: 500px;
        position: relative;
        display: flex;
        flex-direction: column;
        background-position-x: center;
        background-size: cover;
        background-repeat: no-repeat;
        margin-bottom: 50px;
    }
    .slider-left {
        margin-top: 100px;
        margin-left: 100px;
        width: 540px;
        color: white;
        text-transform: uppercase;
        font-family: "Futura Md BT";
    }
    .slider-left>h3 {
        font-size: 40px;
    }
    .slider-left>p {
        font-size: 18px;
        line-height: 40px;
    }
</style>