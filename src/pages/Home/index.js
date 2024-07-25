import WrapperVideos from './components/WrapperVideos';
import VideoItem from './components/VideoItem';
function Home({ videos }) {
    return (
        <WrapperVideos>
            {videos.map((video) => (
                <VideoItem key={video.id} video={video} />
            ))}
        </WrapperVideos>
    );
}

export default Home;
