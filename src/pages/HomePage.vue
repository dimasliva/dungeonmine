<template>
    <div>
        <my-navbar/>
        <my-post :posts="posts"/>
    </div>

</template>

<script>
    import MyPost from "../components/post";
    import MyNavbar from "../components/navbar";
    export default {
        name: "home-page",
        components: {MyNavbar, MyPost},
        props: {
          posts: {
              type: Array,
              required: true
          }
        },
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style scoped>
    .twoPost:before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: rgba(0,0,0,0.5);
        z-index: 0;
    }
</style>