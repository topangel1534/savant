import "./index.scss";
import Featured from "../../assets/images/featured.png";
import BlueCircle from "../../assets/images/blue-circle.png";

const FeaturedOffering = () => {
  return (
    <div className="featured-offering">
      <div className="featured-offering-description">
        <div className="featured-offering-title">
          Invest Your Money,
          <br /> Not Your <span>Time</span>.
        </div>
        <div className="featured-offering-content">
          <p>Savant’s team of experts does all the work for you!</p>
          <p>
            All you have to do is invest and we'll take care of everything from
            finding properties to managing tenants and collecting rent checks.
          </p>
        </div>
      </div>
      <div className="featured-offering-avatar">
        <div className="image-group">
          <img
            src={Featured}
            alt="Featured avatar"
            className="offering-avatar"
          />

          <img src={BlueCircle} alt="Blue circle" className="blue-circle" />
        </div>
        <div className="received-badge">You Received a Dividend!</div>
        <div className="received-money">+$112.36</div>
        <div className="progress-bar">
          <div className="filled-content"></div>
          <p className="filled-detail">73% Funded</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedOffering;
