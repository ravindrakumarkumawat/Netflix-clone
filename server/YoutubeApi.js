require('dotenv').config()

const baseUrl = process.env.YOUTUBE_BASE_URL
const key = process.env.YOUTUBE_KEY

export const videoCategories = `${baseUrl}/videoCategories?key=${key}&part=snippet&h1=us&regionCode=US`
export const videos = `${baseUrl}/videos?key=${key}&part=snippet,contentDetails,statistics&h1=us&regionCode=US&chart=mostPopular`
export const video = `${baseUrl}/videos?key=${key}&part=snippet,contentDetails,statistics&id=`
export const playlists = `${baseUrl}/playlists?key=${key}&part=snippet,contentDetails&maxResults=1&channelId=`
export const playlistItems = `${baseUrl}/playlistItems?key=${key}&part=snippet,contentDetails&maxResults=10&playlistId=`
export const relatedVideo = `${baseUrl}/search?key=${key}&part=snippet&maxResults=10&type=video&relatedToVideoId=`
export const search = `${baseUrl}/search?key=${key}&part=snippet&maxResults=10&q=`

