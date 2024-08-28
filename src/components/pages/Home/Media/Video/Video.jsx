import ReactPlayer from 'react-player';

import './Video.scss';

const Video = () => {
  return (
    <div className="Video">
      <ReactPlayer
        className="Video-player"
        url="https://www.youtube.com/embed/djUySOtNbj8"
        width="100%"
        height="100%"
        controls={true}
        light={false}
        playing={false}
      />
    </div>
  );
};

export default Video;
