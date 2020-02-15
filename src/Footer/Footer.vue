<template>
    <div class="Footer">
        <div class="LogoContainer">
            <a href="#Intro" class="LogoLink" v-smooth-scroll="navConfig">
                <Logo :size="250"/>
            </a>
        </div>
        <div class="SocialLinks">
            <span class="SocialIcon">
                <a class="Icon Icon-Github" href="https://github.com/NodeJSArmenia" target="_blank"></a>
            </span>
            <span class="SocialIcon">
                <a class="Icon Icon-Facebook" href="https://www.facebook.com/nodejsarmenia" target="_blank"></a>
            </span>
            <span class="SocialIcon">
                <a class="Icon Icon-Twitter" href="#" target="_blank"></a>
            </span>
            <span class="SocialIcon">
                <a class="Icon Icon-Instagram" href="https://www.instagram.com/nodejsarmenia/" target="_blank"></a>
            </span>
            <span class="SocialIcon">
                <a class="Icon Icon-Youtube" href="https://www.youtube.com/channel/UCL-LarRFFQcYdyqFhJ2Pw4w"
                   target="_blank"></a>
            </span>
            <span class="SocialIcon">
                <a class="Icon Icon-Telegram" href="http://t.me/nodejsarmenia" target="_blank"></a>
            </span>
        </div>
        <div class="PressRelease">
            Press Release
            <a href="/Press-Release-EN.pdf" class="Links" target="_blank">En</a> |
            <a href="/Press-Release-AM.pdf" class="Links" target="_blank">Am</a>
        </div>
        <p class="Credits">
            Design and branding by
            <a class="Links" href="https://www.behance.net/Davidtiger" target="_blank">thedesigner</a>,
            coded in Vue.js by <a class="Links" href="https://github.com/nairihar" target="_blank">@nairihar</a>,
            <a class="Links" href="https://github.com/tovmassian" target="_blank">@tovmassian</a> and
            <a class="Links" href="https://github.com/NodeJSArmenia/conf-20/graphs/contributors"
               target="_blank">others</a>.
        </p>
    </div>
</template>

<script>
import Logo from '../_common/Logo/Logo.vue';

export default {
	components: {
		Logo,
	},
	data() {
		return {
			navConfig: {
				duration: 1000,
				offset: -66,
			},
		};
	},
};
</script>

<style scoped lang="scss">
    @import '../_styles/colors';

    .Footer {
        min-height: 450px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-direction: column;
        position: relative;
        padding-bottom: 50px;
        background-image: url(https://topentol.sirv.com/nodeconf20/bg.webp);

        a {
            text-decoration: none;
        }
    }

    .LogoContainer {
        margin: 20px 0;
    }

    .SocialLinks {
        display: flex;
        margin-bottom: 15px;
    }

    .PressRelease {
        font-family: Barlow;
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.25;
        letter-spacing: 0.5px;
    }

    .SocialIcon {
        width: 40px;
        height: 40px;
        margin: 3px;
        padding: 4px;
        background-repeat: no-repeat;
        background-size: 20px;
        background-position: center;
        display: block;
        position: relative;
        overflow: hidden;
        background-color: #fff;
        -webkit-transition: background-color 200ms linear;
        -ms-transition: background-color 200ms linear;
        transition: background-color 200ms linear;

        -webkit-mask: url(https://topentol.sirv.com/nodeconf20/footer/polygon-green.svg) no-repeat 50% 50%;
        -ms-mask: url(https://topentol.sirv.com/nodeconf20/footer/polygon-green.svg) no-repeat 50% 50%;
        mask: url(https://topentol.sirv.com/nodeconf20/footer/polygon-green.svg) no-repeat 50% 50%;

        &:hover {
            background-color: $green-primary;
            cursor: pointer;
            -webkit-transition: background-color 200ms linear;
            -ms-transition: background-color 200ms linear;
            transition: background-color 200ms linear;

            .Icon {
                background-color: #fff;
                -webkit-transition: background-color 200ms linear;
                -ms-transition: background-color 200ms linear;
                transition: background-color 200ms linear;
            }
        }
    }

    .Icon {
        width: 32px;
        height: 32px;
        position: absolute;
        background-color: $gray-primary;
        -webkit-transition: background-color 200ms linear;
        -ms-transition: background-color 200ms linear;
        transition: background-color 200ms linear;

        &-Github {
            -webkit-mask: url(https://topentol.sirv.com/nodeconf20/footer/github.svg) no-repeat 50% 50%;
            -ms-mask: url(https://topentol.sirv.com/nodeconf20/footer/github.svg) no-repeat 50% 50%;
            mask: url(https://topentol.sirv.com/nodeconf20/footer/github.svg) no-repeat 50% 50%;
        }

        &-Twitter {
            -webkit-mask: url(https://topentol.sirv.com/nodeconf20/footer/twitter.svg) no-repeat 50% 50%;
            -ms-mask: url(https://topentol.sirv.com/nodeconf20/footer/twitter.svg) no-repeat 50% 50%;
            mask: url(https://topentol.sirv.com/nodeconf20/footer/twitter.svg) no-repeat 50% 50%;
        }

        &-Facebook {
            -webkit-mask: url(https://topentol.sirv.com/nodeconf20/footer/facebook.svg) no-repeat 50% 50%;
            -ms-mask: url(https://topentol.sirv.com/nodeconf20/footer/facebook.svg) no-repeat 50% 50%;
            mask: url(https://topentol.sirv.com/nodeconf20/footer/facebook.svg) no-repeat 50% 50%;
        }

        &-Instagram {
            -webkit-mask: url(https://topentol.sirv.com/nodeconf20/footer/instagram.svg) no-repeat 50% 50%;
            -ms-mask: url(https://topentol.sirv.com/nodeconf20/footer/instagram.svg) no-repeat 50% 50%;
            mask: url(https://topentol.sirv.com/nodeconf20/footer/instagram.svg) no-repeat 50% 50%;
        }

        &-Youtube {
            -webkit-mask: url(https://topentol.sirv.com/nodeconf20/footer/youtube.svg) no-repeat 50% 50%;
            -ms-mask: url(https://topentol.sirv.com/nodeconf20/footer/youtube.svg) no-repeat 50% 50%;
            mask: url(https://topentol.sirv.com/nodeconf20/footer/youtube.svg) no-repeat 50% 50%;
        }

        &-Telegram {
            -webkit-mask: url(https://topentol.sirv.com/nodeconf20/footer/telegram.svg) no-repeat 50% 50%;
            -ms-mask: url(https://topentol.sirv.com/nodeconf20/footer/telegram.svg) no-repeat 50% 50%;
            mask: url(https://topentol.sirv.com/nodeconf20/footer/telegram.svg) no-repeat 50% 50%;
        }
    }

    .Credits {
        margin: 20px;
        font-family: Barlow;
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.25;
        letter-spacing: 0.5px;
        text-align: center;
    }

    a:not(.LogoLink):not(.SocialIcon) {
        font-weight: bold;
    }

    .Links {
        color: $green-primary;
    }

    .Links:hover {
        text-decoration: underline;
    }
</style>
