<template>
  <div id="app">
    <Welcome />
    <AppHeader />
    <Intro />
    <!-- <Schedule /> -->
    <!-- <Speakers /> -->
    <!-- <Sponsors /> -->
    <Team />
    <Location />
    <Faq />
    <!-- <Quiz /> -->
    <AppFooter />
  </div>
</template>

<script>
import Welcome from './Welcome/Welcome.vue';
import AppHeader from './Header/Header.vue';
import Intro from './Intro/Intro.vue';
import Schedule from './Schedule/Schedule.vue';
import Speakers from './Speakers/Speakers.vue';
import Sponsors from './Sponsors/Sponsors.vue';
import Team from './Team/Team.vue';
import Location from './Location/Location.vue';
import Faq from './Faq/Faq.vue';
import Quiz from './Quiz/Quiz.vue';
import AppFooter from './Footer/Footer.vue';

export default {
  name: 'app',
  components: {
    Welcome,
    AppHeader,
    Intro,
    Schedule,
    Speakers,
    Sponsors,
    Team,
    Location,
    Faq,
    Quiz,
    AppFooter,
  },
};
</script>

<style lang="scss">

@import '/fonts/Barlow/stylesheet.css';
@import './_styles/colors';

#app {
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;

  font-family: 'Barlow', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  color: $text-primary;
  background: url(../public/bg-pattern.jpg) #3A3A3A;
}

.Container {
  margin: 0 auto;
  max-width: 1180px;
  width: 100%;
  padding: 0 15px;
}

.ContainerBox {
  max-width: 800px;
}

.Title {
  font-size: 40px;
  font-weight: bold;
  margin-bottom: .2em;
  text-align: center;
  color: white;

  span {
    color: #6cc24a;
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
