<template>
	<section class="Intro" id="Intro">
		<div class="Container">
			<div id="Titles">
				<h1 class="Title HeadTitle"><span>NodeConf</span> 2020 Armenia</h1>
				<span class="Title Subtitle">New date is <span>coming soon!</span>  -   <span>AUA</span>, Yerevan</span>
			</div>
		</div>
		<Banner title="A full-day, two-track conference all about Node.js."
				text="Node Conf Armenia is a conference, gathering backend and full-stack Node.js developers in one place to share knowledge, skills with starter or master Node.js developers, have new connections, friends and fun."
				:image-source="imageSource"
				:image-right="false"
		></Banner>
	</section>

</template>

<script>
import Banner from '../_common/Banner/Banner.vue';
import { serverUri } from '../variables';
// import speakers from '../_services/speakers';

export default {
	components: {
		Banner,
	},
	data: () => ({
		imageSource: `${serverUri}/banners/polygons@3x.png`,
	}),
};
</script>

<style scoped lang="scss">
	.Intro {
		padding: 50px 0 0 0;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		flex-direction: column;
	}

	.Container {
		justify-content: center;
		display: flex;
	}

	.Title {
		font-family: Barlow;
		font-size: 70px;
		font-weight: bold;
		font-stretch: normal;
		font-style: normal;
		line-height: normal;
		letter-spacing: normal;
		text-align: center;
	}

	#Titles {
		display: inline-block;
	}

	.Subtitle {
		font-size: 24px;
		float: left;
	}

	@media (max-width: 800px) {
		.Title {
			font-size: 50px;
		}

		.Subtitle {
			font-size: 20px;
		}
	}

	@media (max-width: 700px) {
		.Title {
			font-size: 45px;
		}

		.Subtitle {
			font-size: 20px;
		}
	}

	@media (max-width: 600px) {
		.Button {
			padding: 0.7em 2em;
		}

		.Title {
			font-size: 40px;
		}

		.Subtitle {
			font-size: 20px;
		}
	}

	@media (max-width: 500px) {
		.Title {
			font-size: 40px;
		}

		.Subtitle {
			font-size: 20px;
		}
	}

	@media (max-width: 490px) {
		#Titles {
			display: grid;
		}
	}

	@media (max-height: 550px) {
		.Container {
			margin: -45px auto;
		}

		.HeadTitle {
			font-size: 40px;
		}
	}
</style>
