<template>
    <div id="snowfall"></div>
</template>

<script>
import snow from '~/assets/js/particles/snow.js'
export default {
  mounted() {
    // 画面が表示された時にparticles.jsを動かす
    window.particlesJS('snowfall', snow.data)
  }
}
</script>

<style>
#snowfall {
  position: absolute;
  width: 100;
  height: 100%;
}
</style>