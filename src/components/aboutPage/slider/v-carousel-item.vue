<template>
    <div class="v-carousel-item">
        <img :src="require('../../../assets/' + item_data.img)"/>
    </div>
</template>

<script>
    export default {
        name: "v-carousel-item",
        props: {
            item_data: {
                type: Object,
                default: () => {}
            }
        }
    }
</script>

<style scoped>
    .v-carousel-item {
    }
    .v-carousel-item img{
        width: 400px;
        object-fit: cover;

        height: 406px;
    }

</style>