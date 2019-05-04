<template>
  <div class="youtube">
    <iframe type="text/html" width="600" height="600"
    src="http://www.youtube.com/embed/HZleluBJrjA?autoplay=1&origin=http://example.com"
    frameborder="0"/>
  </div>
</template>

<style lang="scss" scoped>
.youtube {
  position: relative;
  width: 80%;
  padding-top: 56.25%;
}
.youtube iframe {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 80%;
}
</style>
