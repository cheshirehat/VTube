<template>
  <div class="youtube">
    <youtube
      ref="youtube"
      :video-id="videoId"
      :fitParent='true'
      :resize='true'
      :player-vars= "playerVars"
    />
  </div>
</template>

<script>
export default {
  props: {
    videoId: String
  },
  data () {
    return {
      playerVars: {
        autoplay: 1,
        origin: window.location.origin
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.youtube {
  position: relative;
  width: 80%;
}
.youtube iframe {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 80%;
}
</style>
