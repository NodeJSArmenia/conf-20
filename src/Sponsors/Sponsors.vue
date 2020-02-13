<template>
	<section class="Sponsors" id="Sponsors">
		<div class="Container">
			<section class="Section">
				<h2 class="Title">Call for <span>Sponsors</span></h2>
				<Banner
					text="Join the board of Node Conf 2020 supporting IT companies, be at one of the biggest IT events in Armenia and get your company seen.
Become a Node Conf 2020 sponsor!"
					image-source="/banners/illustration-sponsor-v-1@3x.png"
					button-link="http://bit.ly/joinJSConf2018"
					button-text="Become a Sponsor"
					:image-right="false"
					:is-bold-text="true"
				></Banner>
			</section>
		</div>
	</section>
</template>

<script>
	import Banner from "../_common/Banner/Banner";

	export default {
		components: {
			Banner,
		},
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
</style>
