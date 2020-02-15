<template>
	<div class="Header" :class="{ '-open': isOpen, '-sticked': isSticked }">
		<div class="Container HeaderContainer">
			<div class="LogoContainer">
				<a href="#Intro" id="IntroLogo" v-smooth-scroll="navConfig" v-on:click="close">
					<Logo/>
				</a>
			</div>

			<a class="NavBtn" v-on:click="toggle">
				<i class="fa" v-bind:class="{ 'fa-bars': !isOpen , 'fa-times': isOpen}" aria-hidden="true"></i>
			</a>
			<nav class="Navigation" v-smooth-scroll="navConfig">
				<a class="Item" href="#Intro" v-smooth-scroll="navConfig" v-on:click="close">Intro</a>
				<a class="Item" href="#Speakers" v-smooth-scroll="navConfig" v-on:click="close">Speakers</a>
				<a class="Item" href="#Sponsors" v-smooth-scroll="navConfig" v-on:click="close">Sponsors</a>
				<a class="Item" href="#Team" v-smooth-scroll="navConfig" v-on:click="close">Team</a>
				<a class="Item" href="#Location" v-smooth-scroll="navConfig" v-on:click="close">Location</a>
				<a class="Item" href="#Faq" v-smooth-scroll="navConfig" v-on:click="close">Faq</a>
				<div class="RequestInvite">
					<Button title="Request an Invite" link="http://bit.ly/joinNodeConfAM20"></Button>
				</div>
			</nav>
		</div>
	</div>
</template>

<script>
import _throttle from 'lodash/throttle';
import Logo from '../_common/Logo/Logo.vue';
import Button from '../_common/Button/Button.vue';

export default {
	components: {
		Logo,
		Button,
	},
	data() {
		return {
			scrollPos: window.scrollY,
			isOpen: false,
			navConfig: {
				duration: 2000,
				offset: -66,
			},
		};
	},
	methods: {
		handleScroll() {
			this.scrollPos = window.scrollY;
		},
		toggle(event) {
			event.preventDefault();

			this.isOpen = !this.isOpen;
		},
		close() {
			this.isOpen = false;
		},
	},
	computed: {
		isSticked() {
			return this.scrollPos > window.innerHeight * 0.8;
		},
	},
	created() {
		window.addEventListener('scroll', _throttle(this.handleScroll, 100));
	},
	destroyed() {
		window.removeEventListener('scroll', this.handleScroll);
	},
};
</script>

<style scoped lang="scss">
	@import '../_styles/colors';

	.Header {
		display: flex;
		min-height: 100px;
		align-items: center;
		padding: .5em 0;
		position: fixed;
		width: 100%;
		top: -100px;
		left: 0;
		z-index: 100;
		background: $bg-primary;
		transition: top 0.3s cubic-bezier(0.02, 0.01, 1, 0.6);
		border-bottom: 1px solid $green-primary;;

		&.-sticked {
			display: flex;
			position: fixed;
			top: 0;
			min-height: 80px;
			background: $bg-primary;
			transition: top 0.3s cubic-bezier(0.02, 0.01, 1, 0.6);
		}

	}

	.LogoContainer, .NavBtn {
		z-index: 999;
	}

	.HeaderContainer {
		max-width: 1400px;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		position: relative;
		width: 100%;
		padding-left: 130px;
	}

	.LogoContainer {
		position: absolute;
		left: 15px;
		z-index: 2;
	}

	.Navigation {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: flex-end;
		font-family: Barlow;
		font-size: 16px;
		font-weight: bold;
		font-stretch: normal;
		font-style: normal;
		line-height: 1.25;
		letter-spacing: 0.5px;

		.Item {
			display: flex;
			align-items: center;
			padding: .5em .8em;
			color: $text-primary;
			margin: 0 .1em;
			text-decoration: none;
			font-weight: 600;
			transition: all .2s ease;
			position: relative;
			overflow: hidden;

			&:after {
				content: " ";
				display: block;
				background-color: $gray-secondary;
				position: absolute;
				transition: all .25s ease;
				top: 100%;
				left: 0;
				width: 100%;
				height: 100%;
				z-index: -1;
			}

			&.active,
			&:hover {
				color: $green-primary;
				border-bottom: 2px solid $green-primary;
			}
		}

		.RequestInvite {
			display: inherit;
			margin: 10px 30px 10px 50px;
			z-index: 0;
		}
	}

	.NavBtn {
		display: none;
	}

	@media (max-width: 650px) {
		.Navigation {
			position: absolute;
			left: 0;
			top: -500px;
			background: $bg-primary;
			display: flex;
			flex-direction: column;
			width: 100%;
			padding: 10px;
			align-items: center;
			margin-top: 50px;
			transition: top .6s ease;
		}

		.Header.-open .Navigation {
			top: 0;
			transition: top .6s ease;
		}

		.Navigation .Item {
			justify-content: center;
		}

		.NavigationButton {
			display: inline;
		}

		.HeaderContainer {
			position: initial;
		}

		.NavBtn {
			display: inline;
			top: 0;
			position: absolute;
			right: 0;
			margin: 15px 25px;
			font-size: 30px;
		}

		.Header.-open {
			background: $bg-primary;
		}
	}
</style>
