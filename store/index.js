import axios from 'axios'

export const state = () => ({
  vTuber: {},
  channel: {},
  movie: {},
  videoId: '',
})

export const getters = {

}

export const mutations = {
  setVTuberData(state, value) {
    state.vTuber = value
  },
  setChannel(state, value) {
    state.channel = value
  },
  setMovie(state, value) {
    state.movie = value.data.items
  },
  setVideoId(state, value) {
    state.videoId = value
  }
}

export const actions = {
  async getVTuberData({commit, state}) {
    const res = await axios.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${ state.vTuber.channelId }&key=${ process.env.YOUTUBE_API_KEY }`)
    commit('setChannel', res.data.items[0].snippet)
  },
  async getVTuberMovie({commit, state}) {
    const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${ state.vTuber.channelId }&maxResults=50&order=date&key=${ process.env.YOUTUBE_API_KEY }`)
    commit('setMovie', res)
    commit('setVideoId',res.data.items[0].id.videoId)
  }
}
