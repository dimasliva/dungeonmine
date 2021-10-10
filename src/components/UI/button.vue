<template>
    <button>
            <slot></slot>
    </button>
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
        font-weight: bold;
        align-self: start;
        padding: 10px 30px;
        margin-top: 20px;
        cursor: pointer;
        transition: .3s all;
        border-radius: 5px;
    }
</style>