import react from "react";
import VideoPlayer from "react-video-js-player";
import example from "./videos/example.mp4";

const VideoJS = () => {
    const videoSrc = example;
    const poster = "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

    return (
        <div className="App">
            <h1></h1>
            <VideoPlayer 
                src={videoSrc}
                poster={poster}
                width="720"
                height="420"
            />
        </div>
    );
};

export default VideoJS;