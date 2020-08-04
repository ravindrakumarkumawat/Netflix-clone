export const baseUrl = 'https://www.googleapis.com/youtube/v3'
export const key = 'AIzaSyATFWDHJZBoY2oKFZf_9zw8N0yCGQF6Z2I'

export const videoCategories = `${baseUrl}/videoCategories?key=${key}&part=snippet&h1=us&regionCode=US`
export const videos = `${baseUrl}/videos?key=${key}&part=snippet,contentDetails,statistics&h1=us&regionCode=US&chart=mostPopular&maxResults=20&videoCategoryId=10`


// const channelsById = 'https://www.googleapis.com/youtube/v3/channels?key=&part=snippet,contentDetails,statistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw'
// const channelsByUsername = 'https://www.googleapis.com/youtube/v3/channels?key=&part=snippet,contentDetails,statistics&forUsername=GoogleDevelopers'
// const channelSectionsById = 'https://www.googleapis.com/youtube/v3/channelSections?key=&part=snippet,contentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw'
// const channelSectionsMine = 'https://www.googleapis.com/youtube/v3/channelSections?key=&part=snippet,contentDetails&mine=true'
// const playlistsAll = 'https://www.googleapis.com/youtube/v3/playlists?key=&part=snippet,contentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=25'
// const playlistItems = 'https://www.googleapis.com/youtube/v3/playlistItems?key=&part=snippet&id=&playlistId='
// const search = 'https://www.googleapis.com/youtube/v3/search?key=&part=snippet&maxResults=5&q=surfing'

