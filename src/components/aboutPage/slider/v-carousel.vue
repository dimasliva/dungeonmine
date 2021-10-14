<template>
    <div class="wrapper">
        <!--    Btn-prev    -->
        <button class="click-next">
            <span class="btnPrev">
                <svg class="svg-icon" title="Previous Arrow">
                    <use xlink:href="#pixel-arrow-left-game">
                        <svg viewBox="0 0 512 512" id="pixel-arrow-left-game">
                            <path d="M96 288v64h64v64h64v64h64V288h192v-64H288V32h-64v64h-64v64H96v64H32v64h64z"/>
                        </svg></use></svg>
            </span>
        </button>

        <!--    Slides    -->
        <div class="v-carousel">
            <v-carousel-item
                    v-for="item in carousel_data"
                    :key="item.id"
                    :item_data="item"
            />
        </div>
        <!--    Btn-next    -->
        <button class="click-next">
            <span class="btnPrev">
                <svg class="svg-icon" title="Previous Arrow">
                    <use xlink:href="#pixel-arrow-right-game">
                        <svg viewBox="0 0 512 512" id="pixel-arrow-right-game">
                            <path d="M416 224v-64h-64V96h-64V32h-64v192H32v64h192v192h64v-64h64v-64h64v-64h64v-64h-64z">

                            </path></svg></use></svg>
            </span>
        </button>
    </div>
</template>

<script>
    import VCarouselItem from "./v-carousel-item";
    export default {
        name: "v-carousel",
        components: {VCarouselItem},
        props: {
            carousel_data: {
                type: Array,
                default: () => []
            }
        }
    }
</script>

<style scoped >
    .wrapper {
        margin: 0px auto;
        max-width: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .v-carousel {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        position: relative;
        margin: 0px 10px;
    }
    .click-next {
        position: relative;
        width: 50px;
        height: 50px;
        background-color: #008542;
    }
    .svg-icon {
        width: 50%;
        height: 100%;
    }
    path {
        fill: white;
    }
</style>