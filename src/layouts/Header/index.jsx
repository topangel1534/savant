import Topbar from "../../components/Topbar";
import Waitlist from "../../components/Waitlist";

import "./index.scss";

const Header = () => {
  return (
    <div className="header">
      <Topbar />
      <Waitlist />
    </div>
  );
};

export default Header;
