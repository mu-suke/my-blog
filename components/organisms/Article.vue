<template>
  <section>
    <card
      v-for="post in posts"
      v-bind:key="post.fields.slug"
      :title="post.fields.title"
      :slug="post.fields.slug"
      :headerImage="post.fields.headerImage"
      :publishedAt="post.fields.publishedAt"/>
  </section>
</template>

<script>
import Card from '~/components/molecules/Card.vue'
import { createClient } from '~/plugins/contentful.js'
const client = createClient()

export default {
  name: 'Article',
  transition: 'slide-left',
  components: {
    Card
  },
  async asyncData ({ env }) {
    return await client.getEntries({
      'content_type': env.CTF_BLOG_POST_TYPE_ID,
      order: '-fields.publishedAt',
    }).then(entries => {
      console.log(entries.items)
      return {
        posts: entries.items
      }
    })
    .catch(console.error)
  }
}
</script>