<template>
    <div v-for="link in links" :key="link.title">
        <div class="menu" @mouseover="active = true" @mouseleave="active = false">
            <i class="fa" v-if="active">
                <img :src="homeGif"/>
            </i>
            <i class="fa" v-else>
                <img :src="homeStatic"/>
            </i>
            <span>{{link.title}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "my-li",
        props: {
            links: {
            type: Array,
            required: true
            }
        },
        data() {
            return {
                homeGif: 'https://clck.ru/Y5Nqt',
                homeStatic: 'https://clck.ru/NbMpq',
                active: false
            }
        }
    }
</script>

<style scoped>
    .menu {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: left;
        cursor: pointer;
    }

    .fa > img {
        width: 50px;
    }
</style>