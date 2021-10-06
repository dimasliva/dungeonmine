<template>
    <div class="header" :style="{backgroundImage: urlImage.firstUrl}">
        <div class="header__content">
            <h3>Welcome to Minecraft Craft</h3>
            <p>Get any minecraft craft for any items</p>
            <my-button/>
        </div>
    </div>
</template>

<script>
    import MyButton from "./button";
    export default {
        name: "my-post",
        components: {MyButton},
        data() {
            return {
                urlImage: {
                    firstUrl: "url('https://clck.ru/Y2NWn')",
                    secondUrl: "url('https://clck.ru/Y2YHj')"
                }
            }
        },
        methods: {

        }
    }
</script>

<style scoped>
    .header {
        width: 1000px;
        height: 500px;
        background-image: url("");
        margin: auto;
        display: block;
    }
    .header__content {
        display: flex;
        flex-direction: column;
        color: white;
        font-family: Aharoni;
        padding-top: 15%;
        padding-left: 10%;
    }
    .header__content>h3 {
        font-size: 40px;
    }
    .header__content>p {
        line-height: 40px;
    }
</style>