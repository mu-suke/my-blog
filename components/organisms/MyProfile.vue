<template>
  <section class="profile">
    <v-container>
      <section-title icon="account-outline" title="Profile"/>
      <v-layout justify-center>
        <v-col>
          <v-row>
            <v-avatar size="128" class="mx-auto">
              <img
                src="~/assets/profileIcon_.png"
                alt="むーすけのアイコン"
              >
            </v-avatar>
          </v-row >
          <v-row class="mt-4">
            <table class="mx-auto">
              <tbody>
                <tr >
                  <td>Name</td>
                  <td>村上 祐亮</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>Occupation</td>
                  <td>Web Front/Flutter エンジニア</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>GitHub</td>
                  <td><a href="https://github.com/mu-suke">mu-suke</a></td>
                </tr>
              </tbody>
              <tbody>
                <tr >
                  <td>Qiita</td>
                  <td><a href="https://qiita.com/mu-suke08">mu-suke08</a></td>
                </tr>
              </tbody>
              <tbody>
                <tr >
                  <td>Contact</td>
                  <td><a href="mailto:info@mu-suke.com">info@mu-suke.com</a></td>
                </tr>
              </tbody>
            </table>
          </v-row>
        </v-col>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import SectionTitle from '~/components/atoms/SectionTitle.vue'

export default {
  components: {
    SectionTitle,
  }
}
</script>