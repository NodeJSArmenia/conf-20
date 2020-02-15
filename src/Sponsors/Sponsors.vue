<template>
	<section class="Sponsors" id="Sponsors">
		<div class="Container">
			<section class="Section">
				<h2 class="Title">Call for <span>Sponsors</span></h2>
				<Banner
					:text="bannerData.BannerText"
					:image-source="bannerData.imageSource"
					:button-link="bannerData.buttonLink"
					:button-text="bannerData.buttonText"
					:image-right="false"
					:is-bold-text="true"
				></Banner>
			</section>
		</div>
	</section>
</template>

<script>
import Banner from '../_common/Banner/Banner.vue';
import { serverUri } from '../variables';

export default {
	components: {
		Banner,
	},
	data: () => ({
		bannerData: {
			BannerText: 'Join the board of Node Conf 2020 supporting IT companies, be at one of the biggest IT events in Armenia and get your company seen.Become a Node Conf 2020 sponsor!',
			imageSource: `${serverUri}/banners/illustration-sponsor-v-1@3x.png`,
			buttonLink: 'http://bit.ly/supportNodeConfAM20',
			buttonText: 'Become a Sponsor',
		},
	}),
};
</script>

<style scoped lang="scss">
	.Container {
		position: relative;
		z-index: 3;
	}

	.Section {
		margin-bottom: 50px;
	}

	.Sponsors {
		padding: 50px 0 0 0;
	}
</style>
