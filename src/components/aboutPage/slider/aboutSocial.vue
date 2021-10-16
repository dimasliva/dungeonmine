<template>
    <div class="container">
        <ul>
            <li></li>
        </ul>
        <img src="../../../assets/social.png"/>
        <div class="content">
            <h1>My social networks</h1>
            <div class="social">
                <img src=""/>
                <span>
                    <h3></h3>
                    <p></p>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "my-aboutSocial"
    }
</script>

<style scoped>
    .container {
        position: relative;
        width: 100%;
        height: 1000px;
    }
    .container img {
        position: absolute;
        width: 600px;
        top: -0px;
        left: 300px;
    }
    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 220px;
        color: white;
        font-family: Arial;
        font-size: 30px;
    }
</style>