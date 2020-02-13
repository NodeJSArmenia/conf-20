<template>
  <div class="Banner" :style="{
    flexDirection: `row${imageRight ? '-reverse' : ''}`,
  }">
    <div class="Banner BannerImage">
      <div
        class="Img"
        :style="{
        backgroundImage: `url(${imageSource})`,
      }">
      </div>
    </div>
    <div class="BannerText" v-bind:class="{ 'left': !imageRight, 'right': imageRight }" :style="{
        fontWeight: `${isBoldText ? 'bold' : ''}`}">
      <div class="BannerTitle">
        {{ title }}</div>
      {{text}}
      <div class="BannerButton" v-if="buttonText">
        <Button v-bind:title="buttonText" v-bind:link="buttonLink"></Button>
      </div>
    </div>
  </div>
</template>

<script>
    import Button from "../../_common/Button/Button";

    export default {
        name: "Banner",
        components: {
          Button,
        },
        props: {
          imageRight: Boolean,
          imageSource: String,
          title: String,
          text: String,
          buttonText: String,
          buttonLink: String,
          isBoldText: Boolean,
        },
    }
</script>

<style lang="scss">
  @import '../../_styles/colors';

  .Banner {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    margin: 50px 0;
    .left {
      text-align: left;
      .BannerButton {
        flex-direction: row;
      }
    }
    .right {
      text-align: right;
      .BannerButton {
        flex-direction: row-reverse;
      }
    }
  }
  .BannerImage {
    width: 400px;
    margin: 0 50px;
    .Img {
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      height: 380px;
      width: 100%;
    }
  }
  .BannerText {
    width: 300px;
    font-weight: normal;
    margin: 0 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .BannerTitle {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 20px;
  }
  .BannerButton {
    z-index: 2;
    margin-top: 20px;
    display: inline-flex;
  }

  @media (max-width: 700px) {
    .BannerText {
      width: 100%;
      text-align: center;
    }
    .BannerImage {
      width: 100%;
      .Img {
        height: 200px;
      }
    }
  }
</style>
