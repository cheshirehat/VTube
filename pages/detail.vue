<template>
  <v-layout row wrap style="margin: 32px;">
    <v-flex xs12>
      <p class="headline" style="padding-top: 16px;">{{ channelData.title }}</p>
    </v-flex>
    <v-flex xs4 align-self-center style="text-align: center;">
        <v-avatar size="150">
          <v-img :src="vTuber.thumbnail" alt="" />
        </v-avatar>
        <p class="title" style="padding-top: 16px;">{{ vTuber.name }}</p>
    </v-flex>
    <v-flex xs8 align-self-center style="text-align: center; margin: 0 auto;">
      <VideoFrame :videoId="videoId" />
    </v-flex>
    <v-flex xs12>
      <p class="headline" style="padding: 16px 0px;">他の動画</p>
    </v-flex>
    <v-flex xs2 v-for="(movie, index) in movieData" :key="index" style="text-align: center; margin-bottom: 16px; cursor: pointer;" @click="clickMovie(movie.id.videoId)">
      <p class="movie-title">{{ movie.snippet.title }}</p>
      <v-img :src="movie.snippet.thumbnails.medium.url" width="80%" alt="" style="margin: 0 auto;" />
    </v-flex>
  </v-layout>
</template>

<script>
import VideoFrame from '@/components/VideoFrame'

export default {
  components: {
    VideoFrame,
  },
  data () {
    return {
      data: {},
      videoUrl: ''
    }
  },
  computed: {
    vTuber() {
      return this.$store.state.vTuber
    },
    channelData() {
      return this.$store.state.channel
    },
    movieData() {
      return this.$store.state.movie
    },
    videoId() {
      return this.$store.state.videoId
    }
  },
  methods: {
    clickMovie(id) {
      if(id) {
        this.$store.commit('setVideoId', id)
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.movie-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 8px !important;
}
</style>
