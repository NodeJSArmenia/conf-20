<template>
    <div class="Location" id="Location">
        <h2 class="Title">The <span>Location</span> of Madness</h2>
        <div class="MapContainer">
            <iframe
                class="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6095.609643725426!2d44.505263706885366!3d40.191156865947136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd173fd4d621%3A0x213beef7d45c07c5!2z1YDVodW11aHVvdW_1aHVttWrINSx1bTVpdaA1avVr9W11aHVtiDVgNWh1bTVodWs1b3VodaA1aHVtg!5e0!3m2!1sen!2s!4v1508846018400"
                width="800" height="600" frameborder="0" style="border:0" allowfullscreen>
            </iframe>
        </div>
    </div>
</template>

<script>
    export default {

    };
</script>

<style scoped lang="scss">
    .Location {
        padding: 50px 0 0 0;
        position: relative;
    }

    .Title {
        margin-bottom: 50px;
    }

    .MapContainer {
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        -ms-mask: url(./chack.svg) no-repeat 0 0;
        -webkit-mask: url(./chack.svg) no-repeat 0 0;
        mask: url(./chack.svg) no-repeat 0 0;
        -webkit-mask-position: center;
        -ms-mask-position: center;
        mask-position: center;
        -webkit-mask-size: contain;
        -ms-mask-size: contain;
        mask-size: contain;

        -webkit-filter: grayscale(100%);
        -moz-filter: grayscale(100%);
        -ms-filter: grayscale(100%);
        -o-filter: grayscale(100%);
        filter: grayscale(100%);
    }

    .Map {
        width: 100%;
        height: 30vw;
        top: 0;
        left: 0;
        box-shadow: 1px -4px 23px -6px grey;
        border-radius: 10px;
        overflow: hidden;
    }

    @media (max-width: 680px) {
        .Location {
            flex-direction: column;
            padding: 50px 0;
        }

        .Map {
            width: 100%;
            height: 70vw;
            margin: -10%;
        }
    }

</style>
