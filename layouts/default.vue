<template>
  <div>
    <header>
      <h1 class="title">いい感じのSPAブログ</h1>
    </header>
    <main class="container">
      <nuxt/>
    </main>
  </div>
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
  width: 80%;
  margin: 0 auto;
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

</style>