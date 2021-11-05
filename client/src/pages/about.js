import React from "react";
import "../App.css";
import TeamPhoto from '../Poured_Team_Photo.png';

function About() {
  return (
    <div>
      <h2 className="home-para">About Poured</h2>
      <hr className="line"></hr>
      
      <img className="about-image" src={TeamPhoto}></img>
        
        <p className="p">Started in late 2021, this fictional coffee business grown from a small start-up to the worlds largest, non-real, coffee and coffee accessories company. </p>
          <p className="p">Owners Cal Younkin, Robert Sanders and Michael Folger differ in many ways, but their commonalities - a love of coffee, rap music, and being in the same coding class at the same time - lead them to create the land of Make Believe's most prestigous fake coffee company of all time. 
        </p>
      <p className="p"><em>Poured</em>'s core belief is to create a better world through better coffee. Also accessories. We believe that by selling you these products, we are doing just that. Making the world better.</p>
      <p className="p">And also selling you stuff. We're definitely doing that, too.</p>
      <p className="p">At <em>Poured</em>, we live to serve you. If you ever have questions, please don't hesitate to contact us using the contact information below:</p>

      <h2>Phone: +(1) 734-ABD-DEFG</h2>
      <h2>Email: google@google.com</h2>
    </div>
  );
}

export default About;
