import './FailureMessages.scss';

const FailureMessages: (props: {
  failureMessages: string[];
}) => JSX.Element = ({ failureMessages }) => {
  return (
    <ul className="FailureMessages">
      {failureMessages.map((message, index) => (
        <li key={index} className="FailureMessages-message">
          {message}
        </li>
      ))}
    </ul>
  );
};

export default FailureMessages;
