<template>
    <div class="social" v-for="social in data_social" :key="social.id">
        <img class="img" :src="require('@/assets/' + social.img)"/>
        <span class="right">
            <h3 class="right__title">{{social.title}}</h3>
            <p class="right__desc">{{social.description}}
                <a :href="social.ref" target="_blank">{{social.link}}</a></p>
        </span>
    </div>
</template>

<script>
    export default {
        name: "v-social",
        props: {
            data_social: {
                type: Array,
                default: () => []
            }
        }
    }
</script>

<style scoped>
    .social {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-top: 100px;
        width: 600px;
    }
    .img {
        width: 300px;
    }
    .right {
        display: flex;
        flex-direction: column;
        align-items: start;
    }
    .right__title {
        padding-bottom: 5px;
    }
    .right__desc{
        font-family: Arial;
        font-weight: lighter;
        font-size: 18px;
    }
    .right__desc > a {
        color: #06ad2a;
    }
</style>