import "./index.scss";
import Globe from "../../assets/images/usa_globe.png";
import Pin from "../../assets/images/pin.png";

const Market = () => {
  return (
    <div className="market">
      <div className="market-avatar">
        <img src={Globe} alt="Glove avatar" />
        <img src={Pin} alt="Pin" className="pin first" />
        <img src={Pin} alt="Pin" className="pin second" />
        <img src={Pin} alt="Pin" className="pin third" />
      </div>
      <div className="market-content">
        <div className="market-title">
          Invest in Markets Across
          <br /> America, from the Comfort
          <br /> of Your Home.
        </div>
        <div className="market-description">
          <p>
            Savant is full of high-yield investment opportunities from
            <br /> across America.
          </p>
          <p>
            Invest in exclusive properties across the United States for as
            <br />
            little as $25. Receive monthly dividends, and when you’re
            <br /> ready, simply trade your investments as if they were stocks.
          </p>
        </div>
        <div className="market-join-button">Join the Waitlist</div>
      </div>
    </div>
  );
};

export default Market;
