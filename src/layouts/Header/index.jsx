import Topbar from "../../components/Topbar";
import MailchimpFormContainer from "../../components/MailchimpFormContainer";

import "./index.scss";

const Header = () => {
  return (
    <div className="header">
      <Topbar />
      <MailchimpFormContainer />
    </div>
  );
};

export default Header;
