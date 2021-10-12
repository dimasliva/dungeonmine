<template>
    <div >
        <li class="items__item" v-for="basic in basics" :key="basic.id"
            :style="{backgroundPosition: basic.posX + 'px' + ' ' + basic.posY + 'px' }"
            @mouseover="basic.active = true" @mouseleave="basic.active = false"
        >
        </li>
        <div v-show="basic.active" v-for="basic in basics" :key="basic.id"
        >
            <span
            >
                <img :src="basic.craft"/>
            </span>
        </div>
    </div>

</template>

<script>
    export default {
        name: "li-basic",
        props: {
            basics: {
                type: Array,
                required: true
            }
        },

    }
</script>

<style scoped>
    .items__item {
        background-image: url("../../../assets/icon_sprite.png");
        width: 36px;
        height: 36px;
        margin-bottom: 5px;
        cursor: pointer;
        float: left;
    }
</style>