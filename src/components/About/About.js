import React from "react";
import styles from "./About.module.scss";

/* 
  TODO
  [] Add one more section for the about: will give the full rundown on tokyo traveler, maybe a link to a separate page?
  [x] Create another component for the about section FullDetail Component
  [x] Container -> Left Container + Right Container
  [x] Left Container : 80vw 100% (width, height) -> about + image
  [x] Right Container : 100% 100% -> about text
  [] Create a Grid layout for About Section
  [x] Change top of about section to be 80%, diplay flex; justify content space between
*/

const About = () => {
  const windowHeight = window.innerHeight;
  console.log("window height: " + windowHeight + "px");
  // const isMobile = window.innerHeight

  // Checking if mobile screen
  const isTabletSize = window.innerWidth <= 768 ? true : false;

  return (
    <div className={styles.About}>
      {/* Text Container */}
      <div className={styles.textContainer}>
        {/* Big Text */}
        {isTabletSize ? (
          <div className={styles.bigText}>
            <h2>A Simple </h2>
            <h2>Travel Guide For</h2>
            <h2>Future Travelers</h2>
          </div>
        ) : (
          <div className={styles.bigText}>
            <h2>A Simple </h2>
            <h2>Travel Guide</h2>
            <h2>For Future</h2>
            <h2>Travelers </h2>
          </div>
        )}

        {/* About Tokyo Traveler Section */}
        <div className={styles.aboutTextContainer}>
          <p>
            Hello, future travelers! Tokyo Traveler is a guide with the goal of
            helping you effectivly plan you dream trip to Japan!
          </p>
        </div>
      </div>
      {/* Double Image Component */}
      <div className={styles.imageSection}>
        <div className={styles.doubleImageContainer}>
          <div className={styles.doubleImage}></div>
        </div>
      </div>
      {/* FullDetail Component */}
      <div className={styles.FullDetail}>
        <div className={styles.fullDetailGridContainer}>
          <div className={styles.backgroundImageContainer}></div>
          <div className={styles.foregroundTextContainer}>
            <h1>About</h1>
            <p>
              Hello, future travelers! Tokyo Traveler is a guide with the goal
              of helping you effectivly plan you dream trip to Japan! The early
              stages of planning a trip can be exhilarating and have you eager
              to venture out and explore. However, poor planning can lead to an
              unpleasant experience. We can help you with that!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
