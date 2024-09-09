import './ConfirmBox.scss';

const ConfirmBox = () => {
  return (
    <div className="ConfirmBox">
      <p className="ConfirmBox-text">
        Are you sure you want to delete this concert?
      </p>
      <div className="ConfirmBox-buttons">
        <button className="ConfirmBox-buttons-yes">Yes</button>
        <button className="ConfirmBox-buttons-no">No</button>
      </div>
    </div>
  );
};

export default ConfirmBox;
