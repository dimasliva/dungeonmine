<template>
    <div class="container">
        <div :style="{
            backgroundImage: `url(${post.url})`,
            marginBlock: `${post.marginBottom}`,
            width: `${post.width}`,
            height: `${post.height}`,
            borderRadius: `${post.radiusBorder}`,
            }"
             v-for="post in posts"
             :key="post.id"
             class="heroimg"
        >
            <div class="slider-left">
                <h3>{{post.title}}</h3>
                <p>{{post.desc}}</p>
                <router-link :to="post.routerTo">
                    <my-button
                            :posts="posts"
                            @mouseover="post.btnColor = post.btnColorHover"
                            @mouseout="post.btnColor = post.btnColorNoHover"
                            :style="{backgroundColor: `${post.btnColor}`}
">
                        {{post.btn}}
                    </my-button>
                </router-link>
            </div>
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
            return {}
        },
        methods: {}
    }
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
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
        border-radius: 10px;
    }

    .slider-left {
        margin-top: 100px;
        margin-left: 100px;
        width: 540px;
        color: white;
        text-transform: uppercase;
        font-family: "Futura Md BT";
    }

    .slider-left > h3 {
        font-size: 40px;
    }

    .slider-left > p {
        font-size: 18px;
        line-height: 40px;
    }
</style>