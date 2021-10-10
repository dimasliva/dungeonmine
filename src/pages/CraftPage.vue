<template>
    <div class="page-wrap">
        <div class="wrap">
            <my-nav-craft :navLink="navLink"/>
            <h1>diojsaoidj</h1>
        </div>
    </div>

</template>

<script>

    import MyNavCraft from "@/components/navCraft/navCraft";
    export default {
        components: {MyNavCraft},
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
    .page-wrap{
        width: 100%;
        display: flex;
        max-width: 1200px;
        justify-content: center;
        margin: 0px auto;
    }
    .wrap {
        width: 100%;
        background-color: white;
    }
</style>
