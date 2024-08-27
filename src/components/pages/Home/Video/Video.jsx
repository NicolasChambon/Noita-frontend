import './Video.scss';

const Video = () => {
  const baseUrl = 'https://www.youtube.com/embed/';
  const videoId = 'djUySOtNbj8';
  const autoplay = '0';
  const color = 'white';
  const controls = '2';
  const modestbranding = '1';
  const rel = '0';
  const iv_load_policy = '3';

  return (
    <div className="Video">
      <iframe
        className="Video-iframe"
        width="560"
        height="315"
        src={`${baseUrl}${videoId}?autoplay=${autoplay}&color=${color}&controls=${controls}&modestbranding=${modestbranding}&rel=${rel}&iv_load_policy=${iv_load_policy}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
