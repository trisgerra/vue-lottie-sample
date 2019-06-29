<template>
  <div class="app">
    <lottie
      :options="defaultOptions"
      v-on:animCreated="handleAnimation">
    </lottie>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import lottie from './lottie.vue';
import * as animationJson from './assets/json/animation.json';

@Component({
  components: {
    lottie,
  },
})
export default class App extends Vue {
  defaultOptions = {
    animationData: animationJson.default,
  };

  animationSpeed = 1;

  handleAnimation(anim) {
    this.anim = anim;
    this.anim.play();
  }
}
</script>

<style lang="scss">

</style>
