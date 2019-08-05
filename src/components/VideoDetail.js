import React from 'react'
import { Paper, Typography } from '@material-ui/core'

const VideoDetail = ({video}) => {

    if(!video) return <div>Loading...</div>

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    const videoTitle = video.snippet.title
    const channelTitle = video.snippet.channelTitle
    //const description = video.snippet.description
    return (
        <React.Fragment>
            <Paper elevation={6} style={{height: '60%'}}>
                <iframe frameBorder="0" height="100%" width="100%" title="Video Player" src={videoSrc} />
            </Paper>
            <Paper elevation ={6} style={{padding: '10px'}}>
                <Typography varient="h4"><b>{videoTitle}</b></Typography>
                <Typography varient="subtitle1"><b>{channelTitle}</b></Typography>
            </Paper>
        </React.Fragment>
    )
}
export default VideoDetail;