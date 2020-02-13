<template>
    <div class="Logo">
        <div
            class="LogoImg"
            :class="[{}, variation]"
            :style="{
        width: size + 'px'
      }"/>
    </div>
</template>

<script>
    export default {
        props: {
            size: {
                type: Number,
                default: 120,
            },
            variation: {
                type: String,
                default: 'full',
            },
        },
    };
</script>

<style scoped lang="scss">
    .LogoImg {
        padding-bottom: 50%;
        background-repeat: no-repeat;
        background-image: url('./Logo.svg');
        background-size: contain;
        transition: all .3s ease;

        &.open {
            height: 26px;
            padding-bottom: 0;
            background-size: 100px;
            background-position-y: -55px;
            overflow: hidden;
        }

        &.open {
            margin-top: -33px;
        }
    }
</style>
