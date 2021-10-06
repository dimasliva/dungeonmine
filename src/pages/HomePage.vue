<template>
    <div>
        <my-post />
        <my-post style="margin-top: 40px"/>
    </div>

</template>

<script>
    import MyPost from "../components/post";
    export default {
        name: "HomePage",
        components: {MyPost},
        methods: {

        }
    }
</script>

<style scoped>

</style>