<template>
  <v-layout row wrap style="margin: 32px;">
    <v-flex xs12 style="margin-bottom: 24px;">
      <div class="title font-weight-medium font-italic">チャンネル一覧</div>
    </v-flex>
    <v-flex v-for="v in　vTubers" xs1.5 style="text-align: center; margin-bottom: 8px;">
      <v-card style="margin-right: 8px; padding: 16px;">
      <v-avatar size="100">
        <img :src="v.thumbnail" alt="">
      </v-avatar>
      <p style="margin: 0; margin-top: 8px;">{{ v.name }}</p>
      <nuxt-link to="detail" @click.native="submit(v)"><Button /></nuxt-link>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Button from '@/components/Button'
import virtualYoutuber from '@/lib/virtualYoutuber'

export default {
  components: {
    Button,
  },
  mounted() {
  },
  computed: {
    vTubers() {
      return virtualYoutuber
    },
  },
  methods: {
    submit(value) {
      this.$store.commit('setVTuberData', value)
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>
