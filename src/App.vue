<template>
  <div>
    <home-page/>
  </div>

</template>

<script>

import HomePage from "./pages/HomePage";
export default {
  components: { HomePage}
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
    background-attachment: fixed;
    background-size: cover;
    background: url("https://clck.ru/Y2PSh"), rgba(0,0,0,0.5);
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
