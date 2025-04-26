import React from "react";
import "../Home/home.css";

function Home() {
  return (
    <>
      <div className="homeContainer">
        <div className="heroOverlay">
          <div className="heroContent">
            <h1>Rev Ride</h1>
            <p>Your Trusted Car Review Hub</p>
          </div>
        </div>
      </div>
      <section className="infoSection">
        <h2>Why Rev Ride?</h2>
        <p>
          At Rev Ride, we bring honest, expert reviews to help you make smarter
          car buying decisions. Whether you're into SUVs, EVs, or sports cars —
          we got you covered.
        </p>
      </section>
      <section className="features">
        <div className="featureItem">
          <h3>Authentic Reviews</h3>
          <p>No BS, no paid promotions — just real opinions you can trust.</p>
        </div>
        <div className="featureItem">
          <h3>Latest Models</h3>
          <p>Stay updated with the newest releases and hottest car trends.</p>
        </div>
        <div className="featureItem">
          <h3>Easy Comparisons</h3>
          <p>
            Compare specs, prices, and reviews all in one place effortlessly.
          </p>
        </div>
      </section>
      )
    </>
  );
}
export default Home;
