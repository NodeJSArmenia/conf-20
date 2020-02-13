<template>
	<section class="Speakers" id="Speakers">
		<div class="Container">
			<h2 class="Title">Call for Incredible <span>Speakers</span></h2>
			<Banner
				text="Share your knowledge and skills in Node.js with the Armenian Node community. Become a Node Conf 2020 speaker!"
				image-source="/banners/illustration-speaker@3x.png"
				button-link="http://bit.ly/joinJSConf2018"
				button-text="Become a Speaker"
				:image-right="true"
				:is-bold-text="true"
			></Banner>
		</div>
	</section>
</template>

<script>
	import speakers from '@/_services/speakers';
	import Banner from "../_common/Banner/Banner";

	export default {
		components: {
			Banner,
		},
		data: () => ({
			speakers,
			speakersList: [
			],
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
		padding: 100px 0 50px 0;
		position: relative;
	}

	@media (max-width: 600px) {
		.Title {
			font-size: 3em;
		}

		.Speakers {
			padding: 50px 0 50px;
		}
	}
</style>
