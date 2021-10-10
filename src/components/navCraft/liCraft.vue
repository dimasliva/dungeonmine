<template>
    <li class="nav__list__li" v-for="link in links" :key="link.id">
        <router-link :to="link.routerTo" style="text-decoration: none; color: black">
            <div :id="link.id"
                 @mouseover="link.active = true"
                 @mouseleave="link.active = false"
                 :style="{
                 display: 'flex',
                 flexDirection: 'row',
                 alignItems: 'center',
                 justifyContent: 'center',
                 cursor: 'pointer'
             }"
            >
                <span>
                    {{link.title}}
            </span>
            </div>
        </router-link>

    </li>
</template>

<script>
    export default {
        name: "my-liCrafts",
        props: {
            links: {
                type: Array,
                required: true
            }
        },
        data() {
            return {}
        },

    }
</script>

<style scoped>
    .nav__list__li {
        position: relative;
        list-style: none;
        font-size: 16px;
        font-family: "Arial Black";
        padding: 10px 0px;
    }
    .nav__list__li:hover {
        background-color: white;
    }
</style>