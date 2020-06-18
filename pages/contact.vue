<template>
  <v-content>
    <v-container
      max-width="960"
    >
      <div class="mx-auto py-4">
        <v-card flat>
          <v-card-text>
            <v-form ref="form">
              <p class="question text-start">
                お名前
              </p>
              <v-text-field
                placeholder="山田 太郎"
                v-model="question1"
              ></v-text-field>
              <p class="question text-start">
                メールアドレス
              </p>
              <v-text-field
                placeholder="メールアドレス"
                v-model="question2"
              ></v-text-field>
              <p class="question text-start">
                お問い合わせ内容
              </p>
              <v-text-field
                placeholder="お問い合わせ内容"
                v-model="question3"
              ></v-text-field>
            </v-form>
          </v-card-text>
        </v-card>
        <div class="text-center pa-4 my-4">
          <v-btn
            class="my-0 title"
            @click="submit"
            large
          >
            送信する
          </v-btn>
        </div>
      </div>
    </v-container>
  </v-content>
</template>


<script>

const axios = require('axios');

export default {
  data: () => ({
    question1: '',
    question2: '',
    question3: '',
  }),
  methods: {
    submit: function() {
      const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
      const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/u/0/d/e/1FAIpQLScWz9MjbFxV7Hoi9ZJ7F8HOl7fvxyCIrZ43v22Hz1KRQxjkIQ/formResponse";
      const submitParams = new FormData();
      submitParams.append("entry.919917897", this.question1);
      submitParams.append("entry.367093029", this.question2);
      submitParams.append("entry.1932827663", this.question3);
      axios.post(CORS_PROXY + GOOGLE_FORM_ACTION, submitParams)
        .then(res => {
          console.log(`submit${res}`);
          this.$router.push('/complete')
        })
        .catch(err => {
          console.log(`err::${err}`);
        })
    }
  }
}
</script>

<style scoped>
.question {
  font-size: 20px;
  line-height: 32px;
  font-weight: 400;
  padding-bottom: 4px;
  color: #444;
}
</style>