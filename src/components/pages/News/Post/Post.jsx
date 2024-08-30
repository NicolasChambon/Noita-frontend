import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import './Post.scss';

const Post = ({ title, date, content, urlImage }) => {
  const language = useSelector((state) => state.global.language);

  return (
    <div className="Post">
      <div className="Post-titleDatePicture">
        <h3 className="Post-titleDatePicture-title">{title}</h3>
        <p className="Post-titleDatePicture-date">
          {language === 'fr' ? 'Posté le' : 'Geschrieben am'} {date}
        </p>
        <div className="Post-titleDatePicture-imgContainer">
          <img
            className="Post-titleDatePicture-imgContainer-img"
            src={urlImage}
            alt={`${title} picture`}
          />
        </div>
      </div>
      <p className="Post-content">{content}</p>
    </div>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  urlImage: PropTypes.string.isRequired,
};

export default Post;
