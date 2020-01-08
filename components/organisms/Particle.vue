<template>
    <div id="snowfall">
      <h2>
        テキスト
      </h2>
    </div>
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
  background-color: #333333;
  width: 100%;
  height: 100vh;
  z-index: 0;
}
</style>