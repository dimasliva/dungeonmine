<template>
    <div >
        <li class="items__item" v-for="weapon in weapons" :key="weapon.id"
            :style="{backgroundPosition: weapon.posX + 'px' + ' ' + weapon.posY + 'px' }"
            @mouseover="weapon.active = true" @mouseleave="weapon.active = false"
        >
        </li>
        <div v-show="weapon.active" v-for="weapon in weapons" :key="weapon.id"
        >
            <span
            >
                <img :src="weapon.craft"/>
            </span>
        </div>
    </div>

</template>

<script>
    export default {
        name: "li-weapons",
        props: {
            weapons: {
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