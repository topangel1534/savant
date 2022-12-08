import "./index.scss";
import Globe from "../../assets/images/usa_globe.png";
import Pin from "../../assets/images/pin.png";

const Market = () => {
  return (
    <div className="market">
      <div className="market-avatar">
        <img src={Globe} alt="Glove avatar" />
      </div>
      <div className="market-content">
        <div className="market-title">
          Invest in Markets Across America, from the Comfort of Your Home.
        </div>
        <div className="market-description">
          <p>
            Savant is full of high-yield investment opportunities from across
            America.
          </p>
          <p>
            Invest in exclusive properties across the United States for as
            little as $25. Receive monthly dividends, and when you’re ready,
            simply trade your investments as if they were stocks.
          </p>
        </div>
        <div className="market-join-button">Join the Waitlist</div>
      </div>
    </div>
  );
};

export default Market;
