<template>
        <div class="cover">
            <div class="buttons">
                <!--    Btn-prev    -->
                <button class="btn click-prev"
                        @click="prevSlide"
                >
                <span class="btnPrev">
                    <svg class="svg-icon" title="Previous Arrow">
                        <use xlink:href="#pixel-arrow-left-game">
                            <svg viewBox="0 0 512 512" id="pixel-arrow-left-game">
                                <path d="M96 288v64h64v64h64v64h64V288h192v-64H288V32h-64v64h-64v64H96v64H32v64h64z"/>
                            </svg></use></svg>
                </span>
                </button>
                <!--    Btn-next    -->
                <button class="btn click-next"
                        @click="nextSlide"
                >
                <span class="btnPrev">
                    <svg class="svg-icon" title="Previous Arrow">
                        <use xlink:href="#pixel-arrow-right-game">
                            <svg viewBox="0 0 512 512" id="pixel-arrow-right-game">
                                <path d="M416 224v-64h-64V96h-64V32h-64v192H32v64h192v192h64v-64h64v-64h64v-64h64v-64h-64z">

                                </path></svg></use></svg>
                </span>
                </button>
            </div>

            <div class="wrapper">

                <!--    Slides    -->
                <div class="v-carousel"
                    :style="{'margin-left': '-' + (100 * currentSlideIndex) + '%'}"
                >
                    <v-carousel-item
                            v-for="item in carousel_data"
                            :key="item.id"
                            :item_data="item"
                    />
                </div>
            </div>
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
            },
            interval : {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                currentSlideIndex: 0
            }
        },
        methods: {
            prevSlide() {
                if(this.currentSlideIndex > 0) {
                    this.currentSlideIndex--;
                }

            },
            nextSlide() {
                if(this.currentSlideIndex >= this.carousel_data.length -1) {
                    this.currentSlideIndex = 0;
                } else {
                    this.currentSlideIndex++;
                }
            },
        },
        mounted() {
            if(this.interval > 0) {
                let vm = this;
                setInterval(function () {
                    vm.nextSlide();
                }, vm.interval)

            }
        }
    }
</script>

<style scoped >

    .wrapper {
        margin: auto;
        max-width: 400px;
        width: 100%;
        overflow: hidden;
    }
    .cover {
        position: relative;
        height: 406px;
    }
    .buttons {
        position: absolute;
        width: 104%;
        top:190px;
        left: -2%;
    }
    .v-carousel {
        display: flex;
        transition: .3s ease-in-out;
    }
    .btn {
        position: relative;
        width: 50px;
        height: 50px;
        background-color: #008542;
    }
    .click-prev {
        float: left;
    }
    .click-next {
        float: right;
    }
    .svg-icon {
        width: 50%;
        height: 100%;
    }
    path {
        fill: white;
    }
</style>