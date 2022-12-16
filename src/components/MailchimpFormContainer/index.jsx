import "./index.scss";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Waitlist from "../Waitlist";
const MailchimpFormContainer = (props) => {
  const postUrl =
    "https://business.us17.list-manage.com/subscribe/post?u=992dc8763ae102f8e7bc0d4a3&id=7b0be9e2c5";
  return (
    <div className="mc-form-container">
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <Waitlist
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};

export default MailchimpFormContainer;
