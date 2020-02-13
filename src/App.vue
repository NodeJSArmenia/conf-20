<template>
	<div id="app">
		<Welcome/>
		<AppHeader/>
		<Intro/>
		<Speakers/>
		<Sponsors/>
		<Team/>
		<Location/>
		<Faq/>
		<AppFooter/>
	</div>
</template>

<script>
	import Welcome from './Welcome/Welcome.vue';
	import AppHeader from './Header/Header.vue';
	import Intro from './Intro/Intro.vue';
	import Speakers from './Speakers/Speakers.vue';
	import Sponsors from './Sponsors/Sponsors.vue';
	import Team from './Team/Team.vue';
	import Location from './Location/Location.vue';
	import Faq from './Faq/Faq.vue';
	import AppFooter from './Footer/Footer.vue';

	export default {
		name: 'app',
		components: {
			Welcome,
			AppHeader,
			Intro,
			Speakers,
			Sponsors,
			Team,
			Location,
			Faq,
			AppFooter,
		},
	};
</script>

<style lang="scss">

	@import '/fonts/Barlow/stylesheet.css';
	@import './_styles/colors';

	#app {
		font-family: 'Barlow', 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		color: $text-primary;
		background: url(../public/bg-pattern.jpg) $bg-primary;
	}

	.Container {
		margin: 0 auto;
		max-width: 1180px;
		width: 100%;
		padding: 0 15px;
	}

	.Title {
		font-size: 40px;
		font-weight: bold;
		margin-bottom: .2em;
		text-align: center;
		color: $text-primary;

		span {
			color: $green-primary;
		}
	}

	.Subtitle {
		font-size: 24px;
		font-weight: 600;
	}

	@media (max-width: 800px) {
		#app {
			background-repeat: no-repeat;
			background-size: cover;
		}
	}

</style>
