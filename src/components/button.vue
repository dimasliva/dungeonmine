<template>
    <button>Get craft</button>
</template>

<script>
    export default {
        name: "my-button"
    }
</script>

<style scoped>
    button {
        color: white;
        font-size: 30px;
        border: none;
        background: #7ed41a;
        font-weight: bold;
        align-self: start;
        padding: 10px 30px;
        margin-top: 20px;
        cursor: pointer;
        transition: .3s all;
    }
    button:hover {
        background: #67af0f;
    }
</style>