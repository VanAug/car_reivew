import React from "react";
import "../Home/home.css";

function Home() {
  return (
    <>
      <div className="homeContainer">
        <div className="heroOverlay">
          <div className="heroContent">
            <h1>Rev Ride</h1>
            <p>Your Trusted Car App-Hub</p>
          </div>
        </div>
      </div>
      <section className="infoSection">
        <h2>Why Rev Ride?</h2>
        <p>
          At Rev Ride, we bring you the latest cars available in the market to
          help you find your perfect ride. From SUVs to EVs to sports cars, we
          have all the options for you.
        </p>
      </section>
      <section className="features">
        <div className="featureItem">
          <h3>Explore Cars</h3>
          <p>
            Browse a wide selection of cars currently available in the market.
          </p>
        </div>
        <div className="featureItem">
          <h3>Stay Updated</h3>
          <p>Find the latest car models and news from trusted sources.</p>
        </div>
        <div className="featureItem">
          <h3>Easy Comparisons</h3>
          <p>
            Compare car specs, prices, and features with ease to make your
            decision simpler.
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
