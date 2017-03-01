import Vue from 'vue'
//import App from './App.vue'
import VueYouTubeEmbed from 'vue-youtube-embed'
Vue.use(VueYouTubeEmbed)

new Vue({
  el: '#app',
  data: {
    videoId: 'videoId',
  },
  methods: {
    method (url) {
      this.videoId = this.$youtube.getIdFromURL(url)
      this.startTime = this.$youtube.getTimeFromURL(url)
    }
  }
})
