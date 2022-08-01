import earthVideo from "../media/Earth1.mp4";

const Video = () => {
  return (
    <video className="myVideo" muted autoPlay playsInline loop>
      <source src={earthVideo} type="video/mp4" />
    </video>
  );
};

export default Video;
