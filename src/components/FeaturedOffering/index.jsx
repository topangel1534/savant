import "./index.scss";
import Featured from "../../assets/images/featured.png";

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
        <img src={Featured} alt="Featured avatar" />
      </div>
    </div>
  );
};

export default FeaturedOffering;
