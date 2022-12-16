import { useState, useEffect } from "react";

import "./index.scss";

const Waitlist = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");

  const subscribe = () => {
    onValidated({ MERGE0: email });
    setEmail("");
  };

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
      {status === "sending" && (
        <div className="mc__alert mc__alert-sending">sending...</div>
      )}
      {status === "error" && (
        <div
          className="mc__alert mc__alert-error"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          className="mc__alert mc__alert-success"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <div className="wait-list-form">
        <input
          className="wait-list-input"
          name="waitlist"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your E-mail Address"
          value={email}
        />
        <div className="join-button" onClick={subscribe}>
          Join the Waitlist
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
