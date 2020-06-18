<template>
  <v-app>
    <v-app-bar
      app
      absolute
      color="secondary"
      dense
      flat
    >
      <v-toolbar-title class="mx-auto">
        <span class="title font-weight-bold">
          むーすけのなんでもブログ
        </span>
      </v-toolbar-title>
    </v-app-bar>
    <transition mode="out-in">
      <nuxt />
    </transition>
    <v-footer
      app
      absolute
      class="pa-0"
      color="secondary"
    >
      <v-card
        flat
        tile
        width="100%"
        class="text-center"
      >
        <v-card-text class="font-weight-bold">&copy; 2019-2020 mu-suke</v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  transitions: {
    name: 'bounce'
  }
}
</script>


<style>
#app {
  font-family: Lato,Noto Sans JP, 游ゴシック Medium, 游ゴシック体, Yu Gothic Medium, YuGothic, ヒラギノ角ゴ ProN, Hiragino Kaku Gothic ProN, メイリオ, Meiryo, ＭＳ Ｐゴシック, MS PGothic, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html {
  font-family: "Source Sans Pro", 游ゴシック体, 'Yu Gothic', YuGothic, 'ヒラギノ角ゴシック Pro', 'Hiragino Kaku Gothic Pro', メイリオ, Meiryo, sans-serif;
  font-size: 16px;
}
h1, h2, h3 {
  font-weight: normal;
}
.slide-left-enter {
  transform: translateX(2000px);
  opacity: 0;
}
.slide-left-enter-active {
  transition: all .3s linear;
}
.slide-left-leave-to {
  transform: translateX(-2000px);
  opacity: 0;
}
.slide-left-leave-active {
  transition: all .3s linear;
}

.v-enter-active, .v-leave-active {
  transition: opacity .5s;
}
.v-enter, .v-leave-to {
  opacity: 0;
}

</style>
