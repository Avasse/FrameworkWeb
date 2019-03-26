<template>
  <v-content>
    <section class="mt-4">
      <v-parallax :src="getParalax1" height="600">
        <v-layout
          align-center
          class="white--text"
          column
          justify-center>
          <img alt="Vuetify.js" height="200" src="@/assets/vuetify.png">
          <h1 class="white--text mb-2 display-1 text-xs-center">Liste de courses</h1>
          <v-btn
            @click="goToLastUpdated"
            class="blue lighten-2 mt-5"
            dark
            large>
            Dernière liste modifiée
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-layout
        align-center
        class="my-5"
        column
        wrap>
        <v-flex class="my-3" sm4 xs12>
          <div class="text-xs-center">
            <h2 class="headline">The best way to start developing</h2>
            <span class="subheading">
              Cras facilisis mi vitae nunc
            </span>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout align-center row wrap>
              <v-flex md4 xs12>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon class="blue--text text--lighten-2" x-large>color_lens</v-icon>
                  </v-card-text>
                  <v-card-title class="layout justify-center" primary-title>
                    <div class="headline text-xs-center">Material Design</div>
                  </v-card-title>
                  <v-card-text>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex md4 xs12>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon class="blue--text text--lighten-2" x-large>flash_on</v-icon>
                  </v-card-text>
                  <v-card-title class="layout justify-center" primary-title>
                    <div class="headline">Fast development</div>
                  </v-card-title>
                  <v-card-text>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex md4 xs12>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon class="blue--text text--lighten-2" x-large>build</v-icon>
                  </v-card-text>
                  <v-card-title class="layout justify-center" primary-title>
                    <div class="headline text-xs-center">Completely Open Sourced</div>
                  </v-card-title>
                  <v-card-text>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>

    <section>
      <v-parallax :src="getParalax2" height="380">
        <v-layout align-center column justify-center>
          <div class="headline white--text mb-3 text-xs-center">Web development has never been easier</div>
          <em>Kick-start your application today</em>
          <v-btn
            class="blue lighten-2 mt-5"
            dark
            href="/pre-made-themes"
            large
          >
            Get Started
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-container grid-list-xl>
        <v-layout
          class="my-5"
          justify-center
          row
          wrap>
          <v-flex sm4 xs12>
            <v-card class="elevation-0 transparent">
              <v-card-title class="layout justify-center" primary-title>
                <div class="headline">Company info</div>
              </v-card-title>
              <v-card-text>
                Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex offset-sm1 sm4 xs12>
            <v-card class="elevation-0 transparent">
              <v-card-title class="layout justify-center" primary-title>
                <div class="headline">Contact us</div>
              </v-card-title>
              <v-card-text>
                Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
              </v-card-text>
              <v-list class="transparent">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">phone</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>777-867-5309</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">place</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Chicago, US</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">email</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>john@vuetifyjs.com</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </v-content>
</template>

<script>

  import { defaultLists, setLS } from '@/utils/utils'

  export default {
    name: 'Home',
    data () {
      return {
        lists: null
      }
    },

    computed: {
      getParalax1 () {
        return require('@/assets/hero.jpeg')
      },

      getParalax2 () {
        return require('@/assets/section.jpg')
      }
    },

    created () {
      try {
        const LSLists = JSON.parse(localStorage.getItem('lists'))
        this.lists    = LSLists && LSLists.length > 0 ? LSLists : defaultLists
        setLS('lists', this.lists)
      } catch (e) {
        console.error(e)
        this.lists = defaultLists
      }
    },

    methods: {
      goToLastUpdated () {
        const lastUpdatedList = this.lists.reduce((last, list) => list.updated_at > last.updated_at ? list : last)
        const lastUpdatedId   = this.lists.findIndex(list => list.name === lastUpdatedList.name)

        this.$router.push({ name: 'listDetails', params: { listId: lastUpdatedId } })
      }
    }
  }
</script>
