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
import Faq from './Faq/Faq.vue';
import Dummy from './Dummy/Dummy.vue';
import lazyLoadComponent from './utils/lazy-load-component';

export default {
	name: 'app',
	components: {
		Welcome,
		AppHeader,
		Intro,
		Faq,
		Dummy,
		AppFooter: lazyLoadComponent({
			componentFactory: () => import('./Footer/Footer.vue'),
			loading: Dummy,
		}),
		Location: lazyLoadComponent({
			componentFactory: () => import('./Location/Location.vue'),
			loading: Dummy,
		}),
		Team: lazyLoadComponent({
			componentFactory: () => import('./Team/Team.vue'),
			loading: Dummy,
		}),
		Sponsors: lazyLoadComponent({
			componentFactory: () => import('./Sponsors/Sponsors.vue'),
			loading: Dummy,
		}),
		Speakers: lazyLoadComponent({
			componentFactory: () => import('./Speakers/Speakers.vue'),
			loading: Dummy,
		}),
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
		background: url(../public/bg-pattern.jpg) $bg-primary repeat;
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
