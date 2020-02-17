<template>
    <section class="Welcome" id="Welcome">
        <div class="Network" :class="{ '-visible': netoworkVisible }"></div>
        <div class="Logo" :class="{ '-visible': logoVisible }"></div>
    </section>
</template>

<script>
export default {
	data() {
		return {
			netoworkVisible: false,
			logoVisible: false,
		};
	},
	methods: {
		showLogo() {
			setTimeout(() => {
				this.netoworkVisible = true;
			}, 1200);
		},
		showNetwork() {
			requestAnimationFrame(() => {
				this.logoVisible = true;
			});
		},
		scrollToIntro() {
			if (!window.location.hash) {
				setTimeout(() => {
                    if (document.documentElement.scrollTop <= 100) {
                        document.getElementById('IntroLogo').click();
                    }
				}, 2500);
			}
		},
	},
	mounted() {
		window.onload = () => {
			this.showLogo();
			this.showNetwork();
			this.scrollToIntro();
		};
	},
};
</script>

<style scoped lang="scss">
    .Welcome, .Network {
        width: 100%;
        height: 100%;
    }

    .Welcome {
        height: 100vh;
        background-image: url(../../public/bg-pattern.jpg);
        background-repeat: repeat;
    }

    .Network {
        position: absolute;
        background-image: url(../../public/bg.png);
        transition: opacity 0.25s cubic-bezier(0.4, 0, 1, 1);
        opacity: 0;
    }

    .Logo {
        position: relative;
        left: 20%;
        top: 20%;
        width: 60%;
        height: 60%;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url(https://topentol.sirv.com/nodeconf20/logo-big.webp);
        transition: opacity 1s cubic-bezier(0.4, 0, 1, 1);
        opacity: 0;
    }

    .Logo, .Network {
        &.-visible {
            opacity: 1;
        }
    }
</style>
