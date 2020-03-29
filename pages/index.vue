<template>
  <v-container
    class="pa-0 mx-auto"
    max-width="960"
  >
    <v-col
      xs="8"
      sm="8"
      lg="8"
      class="mx-auto"
    >
      <my-profile/>
      <section-title icon="file-document-edit-outline" title="Posts"/>
      <v-col
      >
        <card v-for="post in posts"
          v-bind:key="post.fields.slug"
          :title="post.fields.title"
          :slug="post.fields.slug"
          :headerImage="post.fields.headerImage"
          :publishedAt="post.fields.publishedAt"
        />
        <MyArticle></MyArticle>
      </v-col>
    </v-col>
  </v-container>
</template>

<script>
// import Particle from '~/components/organisms/Particle.vue'
import MyProfile from '~/components/organisms/MyProfile.vue'
import SectionTitle from '~/components/atoms/SectionTitle.vue'
import Card from '~/components/molecules/Card.vue'
import MyArticle from '~/components/organisms/MyArticle.vue'
import { createClient } from '~/plugins/contentful.js'

const client = createClient()
export default {
  transition: 'slide-left',
  components: {
    // Particle,
    MyProfile,
    SectionTitle,
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