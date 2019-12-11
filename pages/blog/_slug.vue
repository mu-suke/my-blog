<template>
  <section class="slug">
    <img class="slug_image" v-bind:src="post.fields.headerImage.fields.file.url"/>
    <section>
      <h2 class="slug_title">{{ post.fields.title }}</h2>
    </section>
    <p class="slug_date">
      {{ (new Date(post.fields.publishedAt)).toLocaleDateString() }}
    </p>
    <vue-markdown class="slug_body">{{post.fields.body}}</vue-markdown>
  </section>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import { createClient } from '~/plugins/contentful.js'

const client = createClient()
export default {
  transition: 'slide-left',
  components: {
    VueMarkdown
  },
  async asyncData ({ env, params }) {
    return await client.getEntries({
      'content_type': env.CTF_BLOG_POST_TYPE_ID,
      'fields.slug': params.slug,
      order: '-sys.createdAt'
    }).then(entries => {
      return {
        post: entries.items[0],
      }
    })
    .catch(console.error)
  }
}
</script>

<style>
.slug {
  max-width: 800px;
  margin: 0 auto;
}
.slug_image {
  height: 200px;
  width: 100%;
  object-fit: cover;
}
.slug_title {
  font-size: 2.0rem;
  font-weight: bolder;
}
.slug_date {
  font-size: 1.0rem;
  color: rgb(57, 72, 85);
}
.slug_body {
  margin-top: 10px;
}
.slug_body p {
  line-height: 1.5;
  margin-top: 10px;
}
</style>