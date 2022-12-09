import "./index.scss";

const Teams = () => {
  return (
    <div className="team">
      <div className="team-member">
        <div className="summary">
          “Although 89% of US investors are interested in incorporating real
          estate into their investment strategy, only 3% currently own any real
          estate investment assets.”
        </div>
        <div className="member-info">
          <div className="name">Sherry Chris</div>
          <div className="role">CEO of BH&G Real Estate</div>
        </div>
      </div>
      <div className="team-member">
        <div className="summary">
          “Fractional ownership is a promising investment avenue for new-age
          investors willing to grow their wealth. Offering high returns and low
          risk, it is gaining traction globally and is all set to pave the way
          for creating a highly liquid real estate market in the coming years.”
        </div>
        <div className="member-info">
          <div className="name">Berkshire Hathaway</div>
        </div>
      </div>
      <div className="team-member">
        <div className="summary">
          “Today, non-accredited investors are largely prohibited from trading
          and investing in real estate. Just consider the fact that
          approximately 93% of all U.S.-registered commercial real estate is
          exclusively accessible to only accredited investors.”
        </div>
        <div className="member-info">
          <div className="name">Claus Skaaning</div>
          <div className="role">CEO of DigiShares</div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
