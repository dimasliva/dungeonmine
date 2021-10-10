<template>
    <div class="header">
        <div class="container">
            <nav class="nav">
                <ul class="nav__list">
                    <my-li-crafts :links="links"/>
                </ul>
            </nav>
        </div>
    </div>

</template>

<script>

    import MyLiCrafts from "./liCraft";
    export default {
        name: "my-navCraft",
        components: {MyLiCrafts},
        data() {
            return {
                img: "https://clck.ru/Y7dre",
                links: [
                    {
                        id: 1, title: 'Tools', active: false, routerTo: '/tools'
                    },
                    {
                        id: 2, title: 'Weapons', active: false, routerTo: '/weapons'
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
        z-index: 2;
    }

    .container {
        display: flex;
        justify-content: center;
        max-width: 1200px;
        min-width: 320px;
        background-color: #edffe6;
        background-size: contain;
        margin: 0px auto;
        padding: 0;
    }

    .nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        overflow: visible;
        width: 100%;
        z-index: 3;
    }

    .nav__list {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
    }

</style>