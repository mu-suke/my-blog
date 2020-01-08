<template>
  <div class="index">
    <card v-for="post in posts"
      v-bind:key="post.fields.slug"
      :title="post.fields.title"
      :slug="post.fields.slug"
      :headerImage="post.fields.headerImage"
      :publishedAt="post.fields.publishedAt"/>
    <!-- <Article></Article> -->
  </div>
</template>

<script>
// import Particle from '~/components/organisms/Particle.vue'
import Card from '~/components/molecules/Card.vue'
// import Article from '~/components/organisms/Article.vue'
import { createClient } from '~/plugins/contentful.js'

const client = createClient()
export default {
  transition: 'slide-left',
  components: {
    // Particle,
    Card,
    // Article
  },
  async asyncData ({ env }) {
    return await client.getEntries({
      'content_type': env.CTF_BLOG_POST_TYPE_ID,
      order: '-fields.publishedAt',
    }).then(entries => {
      return {
        posts: entries.items
      }
    })
    .catch(console.error)
  }
}
</script>

<style scoped>
.index {
  color: white;
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
}
</style>