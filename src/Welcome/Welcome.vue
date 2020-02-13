<template>
    <section class="Welcome" id="Welcome">
        <div class="Network"></div>
        <div class="Logo"></div>
    </section>
</template>

<script>
    export default {

    };
</script>

<style scoped lang="scss">
    .Welcome, .Network {
        width: 100%;
        height: 100%;
    }

    .Welcome {
        width: 100vw;
        height: 100vh;
        background-image: url(../../public/bg-pattern.jpg);
    }

    .Network {
        position: absolute;
        background-image: url(./bg.png);
    }

    .Logo {
        position: relative;
        left: 20%;
        top: 20%;
        width: 60%;
        height: 60%;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url(./logo-big.png);
    }
</style>
