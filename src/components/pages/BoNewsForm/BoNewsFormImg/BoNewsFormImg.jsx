// Dependencies
import { useSelector } from 'react-redux';

// Actions
import { changeNewsInput } from '../../../../actions/newsActions';

// Utils
import { handleImageChange } from '../../../../utils/imgUtils';

// React-icons
import { LuImagePlus } from 'react-icons/lu';

// Images
import placeholder from '../../../../assets/images/news-placeholder.svg';

// Styles
import './BoNewsFormImg.scss';

const BoNewsFormImg = () => {
  // Redux state
  const formInputs = useSelector((state) => state.news.form);

  // Image to display
  const imgToDisplay = formInputs.img64 ? formInputs.img64 : placeholder;

  return (
    <div className="BoNewsFormImg">
      <label htmlFor="image64" className="BoNewsFormImg-label">
        <p className="BoNewsFormImg-label-p">Upload a picture</p>
        <LuImagePlus className="BoNewsFormImg-label-icon" />
      </label>
      <input
        type="file"
        id="image64"
        className="BoNewsFormImg-input"
        onChange={(e) => handleImageChange(e, changeNewsInput)}
      />
      <div className="BoNewsFormImg-imgContainer">
        <img
          src={imgToDisplay}
          alt="news"
          className="BoNewsFormImg-imgContainer-img"
        />
      </div>
    </div>
  );
};

export default BoNewsFormImg;
