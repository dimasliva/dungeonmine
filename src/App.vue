<template>
  <div>
    <home-page :posts="posts"/>
  </div>

</template>

<script>
import HomePage from "@/pages/HomePage";
export default {
  components: {HomePage},
  data() {
    return {
      posts: [
        {id: 1, title: "Welcome to minecraft", desc: "Get any crafts", btn: "Get craft", url: 'https://clck.ru/Y3gps'},
        {id: 2, title: "Explore minecraft games", desc: "Get any penis", btn: "Get chlen", url: 'https://clck.ru/Y3gzR'},
      ]
    }
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("https://clck.ru/Y2PSh");
    position: relative;
  }
  body:before {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0,0,0,0.7);
    z-index: -1;
  }
</style>
