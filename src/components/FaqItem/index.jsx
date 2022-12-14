import { useState } from "react";
import cx from "classnames";
import Arrow from "../../assets/images/arrow.png";
import "./index.scss";
const FaqItem = ({ faq }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={cx("faq-item", { open: open })} onClick={handleOpen}>
        <div>{faq}</div>
        <img src={Arrow} alt="Arrow" />
      </div>
      {open && <div className="faq-content"></div>}
    </>
  );
};

export default FaqItem;
