import React, { useState, useEffect } from "react";
import Typing from "react-typing-animation";
import "./style.css";

const SplashScreen = ({ history }) => {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplash(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return !splash ? (
    window.location.replace("/home")
  ) : (
    <div className="vertically--centered--wrapper splash__wrapper">
      <div className="splash">
        <Typing hideCursor={true} speed={200}>
          <h1>Aaditya Ghag</h1>
        </Typing>
      </div>
    </div>
  );
};

export default SplashScreen;
