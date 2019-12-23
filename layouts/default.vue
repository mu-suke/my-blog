<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      hide-on-scroll
    >
      <v-toolbar-title>
        <span class="headline white--text title">&lt;むーすけの雑多ブログ/&gt;</span>
      </v-toolbar-title>
    </v-app-bar>
    <v-content class="container">
      <nuxt/>
    </v-content>
    <v-footer
      app
      absolute
      color="primary"
    >
      <span class="white--text">&copy; 2019</span>
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
.container {
  width: 100%;
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