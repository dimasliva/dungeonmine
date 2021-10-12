<template>
    <div class="header">
        <div class="container">
            <nav class="nav">
                <ul class="nav__list">
                    <h1 class="nav__title">Crafts</h1>
                </ul>
            </nav>
        </div>
    </div>

</template>

<script>

    export default {
        name: "my-navCraft",
        data() {
            return {
                img: "https://clck.ru/Y7dre",
                links: [
                    {
                        id: 1, title: 'Crafts', active: false, routerTo: '/craf'
                    },
                ],
                homepage: '/'
            }
        }
    }
</script>

<style scoped>
    .header {
        position: relative;
        margin-bottom: 40px;
        z-index: 2;
    }

    .container {
        max-width: 1200px;
        min-width: 320px;
        background: url("../../assets/bgNavCraft.jpg") 0px 199px;
        background-size: cover;
        margin: 0px auto;
        padding: 0;
    }

    .nav {
        overflow: visible;
        width: 100%;
        z-index: 3;
    }

    .nav__list {
        position: relative;
        display: flex;
        justify-content: center;
        color: white;
        box-shadow: 0px 5px 10px black;
        transition: .3s ease-in-out;
        margin: 0 auto;
    }
    .nav__title {
        font-size: 26px;
        font-family: "Arial Black";
        padding: 15px 0px;
        transition: .3s ease-in-out;
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none;
    }
    .nav__title:hover {
        font-size: 30px;
    }
</style>