// Dependencies
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { changeNewsInput } from '../../../../actions/newsActions';

// React-icons
import { LuImagePlus } from 'react-icons/lu';

// Images
import placeholder from '../../../../assets/images/news-placeholder.svg';

// Styles
import './BoNewsFormImg.scss';

const BoNewsFormImg = () => {
  // Hooks
  const dispatch = useDispatch();

  // Redux state
  const formInputs = useSelector((state) => state.news.form);

  // Handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch(changeNewsInput(reader.result, 'img64'));
      };
      reader.readAsDataURL(file);
    }
  };

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
        required
        onChange={handleImageChange}
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
