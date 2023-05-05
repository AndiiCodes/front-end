// VideoButton.js 
const VideoButton = () => {
  return (
    <div>
    <div className="wrapper">
  <input type="checkbox" />
  <div className="video">
    <video loop={true} muted={true} autoPlay={true}> 
      <source src="video.mp4" type="video/mp4"  />
    </video>
  </div>
  <div className="text">
    <span data-text="Watch the video" />
  </div>
</div>
    </div>
  );
};

export default VideoButton;
