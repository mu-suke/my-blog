<template>
  <v-container
    fluid
    class="pa-0"
  >
    <v-parallax
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-thin mb-4">Welcome to mu-suke's page!</h1>
          <h4 class="subheading">Ha Ha Ha!</h4>
        </v-col>
      </v-row>
    </v-parallax>
    <v-col cols="12">
      <card v-for="post in posts"
      v-bind:key="post.fields.slug"
      :title="post.fields.title"
      :slug="post.fields.slug"
      :headerImage="post.fields.headerImage"
      :publishedAt="post.fields.publishedAt"/>
      <MyArticle></MyArticle>
    </v-col>
  </v-container>
</template>

<script>
// import Particle from '~/components/organisms/Particle.vue'
import Card from '~/components/molecules/Card.vue'
import MyArticle from '~/components/organisms/MyArticle.vue'
import { createClient } from '~/plugins/contentful.js'

const client = createClient()
export default {
  transition: 'slide-left',
  components: {
    // Particle,
    Card,
    MyArticle
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