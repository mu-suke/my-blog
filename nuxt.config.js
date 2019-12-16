import colors from 'vuetify/es5/util/colors'

// export default {
//   mode: 'universal',
//   /*
//   ** Headers of the page
//   */
//   head: {
//     titleTemplate: '%s - ' + process.env.npm_package_name,
//     title: process.env.npm_package_name || '',
//     meta: [
//       { charset: 'utf-8' },
//       { name: 'viewport', content: 'width=device-width, initial-scale=1' },
//       { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
//     ],
//     link: [
//       { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
//     ]
//   },
//   /*
//   ** Customize the progress-bar color
//   */
//   loading: { color: '#fff' },
//   /*
//   ** Global CSS
//   */
//   css: [
//   ],
//   /*
//   ** Plugins to load before mounting the App
//   */
//   plugins: [
//     '~/plugins/contentful.js'
//   ],
//   /*
//   ** Nuxt.js dev-modules
//   */
//   buildModules: [
//     { src: '@nuxtjs/vuetify' },
//   ],
//   /*
//   ** Nuxt.js modules
//   */
//   modules: [
//   ],
//   /*
//   ** vuetify module configuration
//   ** https://github.com/nuxt-community/vuetify-module
//   */
//   vuetify: {
//     customVariables: ['~/assets/variables.scss'],
//     theme: {
//       dark: true,
//       themes: {
//         dark: {
//           primary: colors.blue.darken2,
//           accent: colors.grey.darken3,
//           secondary: colors.amber.darken3,
//           info: colors.teal.lighten1,
//           warning: colors.amber.base,
//           error: colors.deepOrange.accent4,
//           success: colors.green.accent3
//         }
//       }
//     }
//   },
//   /*
//   ** Build configuration
//   */
//   build: {
//     /*
//     ** You can extend webpack config here
//     */
//     extend (config, ctx) {
//     }
//   }
// }

const {getConfigForKeys} = require('./lib/config.js')
const ctfConfig = getConfigForKeys([
  'CTF_BLOG_POST_TYPE_ID',
  'CTF_SPACE_ID',
  'CTF_CDA_ACCESS_TOKEN'
])
const {createClient} = require('./plugins/contentful')
const cdaClient = createClient(ctfConfig)

const config = {
  mode: 'universal',
  head: {
    title: 'nuxt_blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [ { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' } ]
  },

  loading: { color: '#fff' },

  buildModules: [
    { src: '@nuxtjs/vuetify' },
  ],

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      light: true,
      themes: {
        dark: {
          primary: colors.blue.lighten2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: "193368",
          secondary: colors.pink.base,
          accent: colors.cyan.base,
          error: colors.red.base,
          warning: colors.amber.base,
          info: colors.blue.base,
          success: colors.green.base
        }
      }
    }
  },

  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
  },

  plugins: [
    { src: './plugins/contentful' },
    { src: '~plugins/particles.js', ssr: false }
  ],

  generate: {
    routes () {
      return cdaClient.getEntries({
        'content_type': ctfConfig.CTF_BLOG_POST_TYPE_ID
      }).then(entries => {
        return [
          ...entries.items.map(entry => `/blog/${entry.fields.slug}`)
        ]
      })
    }
  },

  env: {
    CTF_SPACE_ID: ctfConfig.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: ctfConfig.CTF_CDA_ACCESS_TOKEN,
    CTF_BLOG_POST_TYPE_ID: ctfConfig.CTF_BLOG_POST_TYPE_ID
  }
}

module.exports = config