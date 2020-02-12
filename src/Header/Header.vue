<template>
  <div
    class="Header"
    :class="{
      '-open': isOpen,
      '-sticked': isSticked,
    }">
    <div class="Container HeaderContainer">
      <div class="LogoContainer">
        <a
          href="#Intro"
          v-smooth-scroll="navConfig" v-on:click="close">
          <Logo
            :variation="full" />
        </a>
      </div>

      <a class="NavBtn" v-on:click="toggle">
        <i
          class="fa"
          v-bind:class="{ 'fa-bars': !isOpen , 'fa-times': isOpen}"
          aria-hidden="true"
        ></i>
      </a>
      <nav class="Navigation" v-smooth-scroll="navConfig">
        <a class="Item" href="#Speakers" v-smooth-scroll="navConfig" v-on:click="close">Speakers</a>
        <a class="Item" href="#Sponsors" v-smooth-scroll="navConfig" v-on:click="close">Sponsors</a>
        <a class="Item" href="#Team" v-smooth-scroll="navConfig" v-on:click="close">Team</a>
        <a class="Item" href="#Location" v-smooth-scroll="navConfig" v-on:click="close">Location</a>
        <a class="Item" href="#Faq" v-smooth-scroll="navConfig" v-on:click="close">Faq</a>
        <a class="Item" href="#Quiz" v-smooth-scroll="navConfig" v-on:click="close">Quiz</a>
        <div class="RequestInvite">
          <Button title="Request an Invite" link="http://bit.ly/joinJSConf2018"></Button>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import _throttle from 'lodash/throttle';
import Logo from '../_common/Logo/Logo.vue';
import Button from "../_common/Button/Button";

export default {
  components: {
    Logo,
    Button
  },
  data() {
    return {
      scrollPos: window.scrollY,
      isOpen: false,
      navConfig: {
        duration: 1000,
        offset: -66,
      },
    };
  },
  methods: {
    handleScroll() {
      // Any code to be executed when the window is scrolled
      // console.log(event);

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
.Header {
  display: none;
  min-height: 100px;
  align-items: center;
  padding: .5em 0;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  // background: #fff;
  z-index: 100;
  background-color: transparent;
  transition: all .3s ease;

  &.-sticked {
    display: flex;
    position: fixed;
    min-height: 80px;
    background: #3A3A3A;
    box-shadow: 0px -5px 15px 8.16px rgba(162, 162, 162, 0.3);
  }

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
  // width: 100%;
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
    color: #fff;
    margin: 0 .1em;
    text-decoration: none;
    font-weight: 600;
    transition: all .2s ease;
    position: relative;
    overflow: hidden;

    &:after {
      content: " ";
      display: block;
      background-color: #b9b9b945;
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
      color: #6CC24A;
      border-bottom: 2px solid #6CC24A;
    }
  }
  .RequestInvite {
    display: inherit;
    margin: 0 50px;
  }
}

.NavBtn {
  display: none;
}

@media (max-width: 600px) {
  .Navigation {
    position: absolute;
    left: 0;
    top: -500px;
    background: #3A3A3A;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px;
    align-items: center;
    margin-top: 50px;
    transition: top .3s ease;
  }

  .Header.-open .Navigation {
    top: 0;
    transition: top .3s ease;
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
    background: #3A3A3A;
  }
}
</style>
