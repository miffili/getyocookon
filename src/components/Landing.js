import React from 'react';

const Landing = (props) => {
  return (
    <div className="teaser">
      <img className="logo" src="icons/chef_big.png" alt="chef's hat as app logo"/>
      <h1>Get yo' cook on!</h1>
      <h2>Stay tuned, as this app is developing over time.</h2>
      <img src="images/swedishchefcooking.gif" alt="gif of The Muppets swedish cook"/>
      <button className="showApp">
        Continue »
      </button>
    </div>
  )
}

export default Landing;
