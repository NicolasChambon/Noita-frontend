// Styles
import './Post.scss';

const Post: React.FC<{
  title: string;
  date: string;
  content: string;
  urlImage: string;
}> = ({ title, date, content, urlImage }) => {
  return (
    <div className="Post">
      <div className="Post-titleDatePicture">
        <p className="Post-titleDatePicture-date">{date}</p>
        <h3 className="Post-titleDatePicture-title">{title}</h3>
        <div className="Post-titleDatePicture-imgContainer">
          <img
            className="Post-titleDatePicture-imgContainer-img"
            src={urlImage}
            alt={`${title} picture`}
          />
        </div>
      </div>
      <div className="Post-content">
        {content.split('\n').map((line, index) => (
          <p className="Post-content-p" key={index}>
            {line}
            <br />
          </p>
        ))}
      </div>
    </div>
  );
};

export default Post;
