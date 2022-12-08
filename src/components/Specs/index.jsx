import "./index.scss";
import People from "../../assets/images/people.png";
import Money from "../../assets/images/money.png";
import Trading from "../../assets/images/trading.png";

const Specs = () => {
  return (
    <div className="specs-container">
      <div className="spec-item">
        <div className="spec-item-header">
          <img src={People} alt="people icon" className="item-icon" />
          <div className="item-title">Invest with as little as $25</div>
        </div>
        <div className="item-description">
          Access high-yield real estate
          <br /> investments, typically only available to
          <br />
          accredited investors.
        </div>
      </div>
      <div className="spec-item">
        <div className="spec-item-header">
          <img src={Money} alt="people icon" className="item-icon" />
          <div className="item-title">Simple and secure</div>
        </div>
        <div className="item-description">
          Protect your investments with the best
          <br /> long-run asset class in modern history,
          <br /> without any of the operational headache.
        </div>
      </div>
      <div className="spec-item">
        <div className="spec-item-header">
          <img src={Trading} alt="people icon" className="item-icon" />
          <div className="item-title">Trade anytime, anywhere</div>
        </div>
        <div className="item-description">
          Achieve financial flexibility and freedom
          <br /> through our exchange, which allow you
          <br /> to trade real estate like stocks.
        </div>
      </div>
    </div>
  );
};

export default Specs;
