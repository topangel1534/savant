import "./index.scss";

const LaunchingSoon = () => {
  return (
    <div className="launching-soon">
      <div className="launching-soon-title">Launching Soon!</div>
      <div className="launching-soon-description">
        Join the waitlist to receive updates. Be one of the first to create a
        free
        <br /> account and instantly access high-yield properties.
      </div>
      <div className="join-waitlist">
        <input
          type="text"
          name="email"
          className="email-address"
          placeholder="Your E-mail address"
        />
        <div className="join-button">Join the Waitlist</div>
      </div>
    </div>
  );
};

export default LaunchingSoon;
