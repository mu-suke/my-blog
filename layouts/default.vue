<template>
  <v-app>
    <v-app-bar
      app
      class="mx-auto"
      color="primary"
      hide-on-scroll
      max-width="960"
    >
      <v-toolbar-title class="text-center">
        <span class="font-weight-bold title">むーすけのなんでもブログ</span>
      </v-toolbar-title>
    </v-app-bar>
    <v-content>
      <nuxt />
    </v-content>
    <v-footer
      app
      absolute
      color="primary"
    >
      <v-card
        flat
        tile
        width="100%"
        class="text-center primary"
      >
        <v-card-text class="font-weight-bold">&copy; 2019-2020 mu-suke</v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<style>
html {
  font-family: "Source Sans Pro", 游ゴシック体, 'Yu Gothic', YuGothic, 'ヒラギノ角ゴシック Pro', 'Hiragino Kaku Gothic Pro', メイリオ, Meiryo, sans-serif;
  font-size: 16px;
}
h1, h2, h3 {
  font-weight: normal;
}
.title {
  color: #35495e;
  margin: 100px 0 30px;
  text-align: center;
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
.main {
  background-color: lightskyblue;
}
</style>
