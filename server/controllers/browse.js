const axios = require('axios')
const { videos } = require('../YoutubeApi')

const get_videos = async (req, res) => {
  try {
    // const response = await axios.get(`${videos}&maxResults=50`)
    res.send('response')
  } catch (err) {
    console.log(err.message)
  }
}

module.exports = { 
  get_videos
}