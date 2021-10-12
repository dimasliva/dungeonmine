<template>
    <div class="page-wrap">
        <my-nav-craft/>

        <div class="wrap">
            <div class="sideLeft">
                <div class="left">
                    <h3 class="title">Basic</h3>
                    <ul class="items" @mouseover="active=true" @mouseleave="active=false">
                        <li-basic :basics="basics"/>
                    </ul>
                </div>
                <div class="left">
                    <h3 class="title">Tools</h3>
                    <ul class="items">
                        <li-tools :tools="tools"/>
                    </ul>
                </div>
                <div class="left">
                    <h3 class="title">Tools</h3>
                    <ul class="items">
                        <li-weapons :weapons="weapons"/>
                    </ul>
                </div>

            </div>
            <div class="sideRight">
                <div class="right">
                    <h1>More crafts soon...</h1>
                </div>
            </div>
            </div>
    </div>

</template>

<script>

    import MyNavCraft from "@/components/navCraft/navCraft";
    import LiBasic from "@/components/navCraft/liCrafts/liBasic";
    import LiTools from "@/components/navCraft/liCrafts/liTools";
    import LiWeapons from "@/components/navCraft/liCrafts/liWeapon";
    export default {
        components: {LiWeapons, LiTools, LiBasic, MyNavCraft},
        data() {
            return {
                basics: [
                    {id: 1, posX: 0, posY: 0, active: false, craft: 'https://www.minecraftcraftingguide.net/img/crafting/wood-planks-crafting.gif'},
                    {id: 2, posX: 0, posY: -38, active: false, craft: 'https://www.minecraftcraftingguide.net/img/crafting/stick-crafting.png'},
                    {id: 3, posX: 0, posY: -76, active: false, craft: 'https://www.minecraftcraftingguide.net/img/crafting/torches-crafting.png'},
                    {id: 4, posX: 0, posY: -114, active: false, craft: 'https://www.minecraftcraftingguide.net/img/crafting/crafting-table-crafting.png'},
                    {id: 5, posX: 0, posY: -152, active: false, craft: ' https://www.minecraftcraftingguide.net/img/crafting/chest-crafting.png'},
                    {id: 6, posX: 0, posY: -190, active: false, craft: 'https://www.minecraftcraftingguide.net/img/crafting/furnace-crafting.png'},
                ],
                tools: [
                    {id: 1, posX: 0, posY: -608, craft: 'https://www.minecraftcraftingguide.net/img/crafting/pickaxes-crafting.gif'},
                    {id: 2, posX: 0, posY: -646, craft: 'https://www.minecraftcraftingguide.net/img/crafting/shovels-crafting.gif'},
                    {id: 3, posX: 0, posY: -684, craft: ' https://www.minecraftcraftingguide.net/img/crafting/axes-crafting.gif'},
                    {id: 4, posX: 0, posY: -722, craft: 'https://www.minecraftcraftingguide.net/img/crafting/hoes-crafting.gif'},
                    {id: 5, posX: 0, posY: -760, craft: 'https://www.minecraftcraftingguide.net/img/crafting/fishing-rod-crafting.png'},
                ],
                weapons: [
                    {id: 1, posX: 0, posY: -5928, craft: 'https://www.minecraftcraftingguide.net/img/crafting/helmets-crafting.gif'},
                    {id: 2, posX: 0, posY: -5966, craft: 'https://www.minecraftcraftingguide.net/img/crafting/chestplates-crafting.gif'},
                    {id: 3, posX: 0, posY: -6004, craft: 'https://www.minecraftcraftingguide.net/img/crafting/leggins-crafting.gif'},
                    {id: 4, posX: 0, posY: -6042, craft: 'https://www.minecraftcraftingguide.net/img/crafting/boots-crafting.gif'},
                    {id: 5, posX: 0, posY: -6080, craft: 'https://www.minecraftcraftingguide.net/img/crafting/swords-crafting.gif'},
                    {id: 6, posX: 0, posY: -6118, craft: 'https://www.minecraftcraftingguide.net/img/crafting/bow-crafting.png'},
                    {id: 7, posX: 0, posY: -6156, craft: 'https://www.minecraftcraftingguide.net/img/crafting/arrow-crafting.png'},
                ],
                active: true
            }
        },
    }
</script>

<style scoped>
    .page-wrap{
        width: 100%;
        display: flex;
        flex-direction: column;
        max-width: 1200px;
        justify-content: center;
        margin: 0px auto;
    }
    .wrap {
        width: 35%;
        background-color: #c6c6c6;
        border-radius: 20px;
        padding: 26px 23px 8px;
        box-shadow: 0px 0px 10px 0px;
        margin: 0 auto;
    }
    .sideLeft {
        float: left;
    }
    .sideRight{
        float: top;
    }
    .left {
        float: left;
        width: 340px;
        clear: both;
        margin-bottom: 5px;
    }
    .items{
        display: inline;
        float: left;
        list-style: none;
    }
    .right {
        position: relative;
        float: right;
        width: 100%;
        height: 10%;
    }
    .right h1 {
        color: #acacac;
        font-weight: bold;
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none;
    }
</style>
