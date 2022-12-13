import LaunchingSoon from "../LaunchingSoon";
import FaqItem from "../FaqItem";
import "./index.scss";

import Arrow from "../../assets/images/arrow.png";
<img src={Arrow} alt="Arrow" />;
const faqs = [
  "Minimum Investment Amount",
  "Who pays for maintenance expenses?",
  "Do I need to be accredited to invest?",
  "How often are dividends sent to holders?",
  "What are my tax obligations?",
];

const Faq = () => {
  return (
    <div className="faq">
      <div className="faq-header">
        <div className="faq-title">Frequently Asked Questions</div>
        <div className="faq-description">
          Commonly asked questions about Savant, and how our
          <br /> platform works!
        </div>
      </div>
      <div className="faq-container">
        {faqs.map((item) => (
          <FaqItem faq={item} />
        ))}
        {/* <div className="faq-item">
          <div>Minimum Investment Amount</div>
          <img src={Arrow} alt="Arrow" />
        </div>
        <div className="faq-item">
          <div>Who pays for maintenance expenses?</div>
          <img src={Arrow} alt="Arrow" />
        </div>
        <div className="faq-item">
          <div>Do I need to be accredited to invest?</div>
          <img src={Arrow} alt="Arrow" />
        </div>
        <div className="faq-item">
          <div>How often are dividends sent to holders?</div>
          <img src={Arrow} alt="Arrow" />
        </div>
        <div className="faq-item">
          <div>What are my tax obligations?</div>
          <img src={Arrow} alt="Arrow" />
        </div> */}
      </div>
      <LaunchingSoon />
    </div>
  );
};

export default Faq;
