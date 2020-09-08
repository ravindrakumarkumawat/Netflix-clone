require('dotenv').config()

const baseUrl = process.env.YOUTUBE_BASE_URL
const key = process.env.YOUTUBE_KEY

const videoCategories = `${baseUrl}/videoCategories?key=${key}&part=snippet&h1=us&regionCode=US`
const videos = `${baseUrl}/videos?key=${key}&part=snippet,contentDetails,statistics&h1=us&regionCode=US&chart=mostPopular`
const video = `${baseUrl}/videos?key=${key}&part=snippet,contentDetails,statistics&id=`
const playlists = `${baseUrl}/playlists?key=${key}&part=snippet,contentDetails&maxResults=1&channelId=`
const playlistItems = `${baseUrl}/playlistItems?key=${key}&part=snippet,contentDetails&maxResults=10&playlistId=`
const relatedVideo = `${baseUrl}/search?key=${key}&part=snippet&maxResults=10&type=video&relatedToVideoId=`
const search = `${baseUrl}/search?key=${key}&part=snippet&maxResults=10&q=`

module.exports = {
  videoCategories,
  videos,
  video,
  playlists,
  playlistItems,
  relatedVideo,
  search
}

