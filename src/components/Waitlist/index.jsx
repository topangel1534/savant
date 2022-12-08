import "./index.scss";

const Waitlist = () => {
  return (
    <div className="wait-list">
      <div className="wait-list-title">
        The Easiest Way to
        <br /> Invest in Real Estate
      </div>
      <div className="wait-list-description">
        Join the waitlist to unlock the high returns of real estate, without
        <br /> the hassle of being a landlord. Earn passive income every month,
        <br />
        and trade your investments anytime.
      </div>
      <div className="wait-list-form">
        <input
          className="wait-list-input"
          name="waitlist"
          placeholder="Your E-mail Address"
        />
        <div className="join-button">Join the Waitlist</div>
      </div>
    </div>
  );
};

export default Waitlist;
