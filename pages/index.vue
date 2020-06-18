<template>
  <v-content>
    <v-container
      class="pa-0 mx-auto"
      max-width="960"
      fluid
    >
      <v-col
        xs="8"
        sm="8"
        lg="8"
        class="mx-auto"
      >
        <my-profile/>
        <section-title icon="file-document-edit-outline" title="Posts"/>
        <v-row>
          <v-col
            v-for="post in posts"
            :key="post.fields.slug"
            xs="4"
            sm="4"
            lg="4"
          >
            <my-post-card
              :title="post.fields.title"
              :slug="post.fields.slug"
              :headerImage="post.fields.headerImage"
              :publishedAt="post.fields.publishedAt"
            />
          </v-col>
        </v-row>
        <div class="text-center pa-4 my-4">
          <v-btn
            class="my-0 title"
            large
            to="/contact"
            nuxt
          >
            お問い合わせ
          </v-btn>
        </div>
      </v-col>
    </v-container>
  </v-content>
</template>

<script>
import MyProfile from '~/components/organisms/MyProfile.vue'
import SectionTitle from '~/components/atoms/SectionTitle.vue'
import MyPostCard from '~/components/molecules/MyPostCard.vue'
import { createClient } from '~/plugins/contentful.js'

const client = createClient()
export default {
  transition: 'fade',
  components: {
    MyProfile,
    SectionTitle,
    MyPostCard
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