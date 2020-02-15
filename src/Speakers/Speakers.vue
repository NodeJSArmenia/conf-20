<template>
	<section class="Speakers" id="Speakers">
		<div class="Container">
			<h2 class="Title">Call for Incredible <span>Speakers</span></h2>
			<Banner
				:text="bannerData.BannerText"
				:image-source="bannerData.imageSource"
				:button-link="bannerData.buttonLink"
				:button-text="bannerData.buttonText"
				:image-right="true"
				:is-bold-text="true"
			></Banner>
		</div>
	</section>
</template>

<script>
import speakers from '../_services/speakers';
import Banner from '../_common/Banner/Banner.vue';
import { serverUri } from "../variables";

export default {
	components: {
		Banner,
	},
	data: () => ({
		speakers,
		speakersList: [],
		bannerData: {
			BannerText: 'Share your knowledge and skills in Node.js with the Armenian Node community. Become a Node Conf 2020 speaker!',
			imageSource: `${serverUri}/banners/illustration-speaker@3x.png`,
			buttonLink: 'http://bit.ly/NodeConfAM20',
			buttonText: 'Become a Speaker',
		},
	}),
	methods: {
		getSpeaker: function getSpeaker(speakerId) {
			return this.speakers[speakerId];
		},
	},
};
</script>

<style scoped lang="scss">
	.Speakers {
		padding: 50px 0 0 0;
		position: relative;
	}

	@media (max-width: 600px) {
		.Speakers {
			padding: 50px 0 50px;
		}
	}
</style>
