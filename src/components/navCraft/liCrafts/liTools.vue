<template>
    <div >
        <li class="items__item" v-for="tool in tools" :key="tool.id"
            :style="{backgroundPosition: tool.posX + 'px' + ' ' + tool.posY + 'px', }"
            @mouseover="tool.active = true" @mouseleave="tool.active = false"

        >
        </li>
        <div v-show="tool.active" v-for="tool in tools" :key="tool.id"
        >
            <span
            >
                <img :src="tool.craft"/>
            </span>
        </div>
    </div>

</template>

<script>
    export default {
        name: "li-tools",
        props: {
            tools: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
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