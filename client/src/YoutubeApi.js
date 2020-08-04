export const baseUrl = 'https://www.googleapis.com/youtube/v3'
export const key = 'AIzaSyATFWDHJZBoY2oKFZf_9zw8N0yCGQF6Z2I'

export const videoCategories = `${baseUrl}/videoCategories?key=${key}&part=snippet&h1=us&regionCode=US`
export const videos = `${baseUrl}/videos?key=${key}&part=snippet,contentDetails,statistics&regionCode=US&chart=mostPopular&maxResults=20`

