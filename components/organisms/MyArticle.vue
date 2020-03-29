<template>
  <section>
    <my-post-card
      v-for="post in posts"
      v-bind:key="post.fields.slug"
      :title="post.fields.title"
      :slug="post.fields.slug"
      :headerImage="post.fields.headerImage"
      :publishedAt="post.fields.publishedAt"
    ></my-post-card>
  </section>
</template>

<script>
import MyPostCard from '~/components/molecules/MyPostCard.vue'
import { createClient } from '~/plugins/contentful.js'
const client = createClient()

export default {
  // name: 'MyArticle',
  transition: 'slide-left',
  components: {
    MyPostCard
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