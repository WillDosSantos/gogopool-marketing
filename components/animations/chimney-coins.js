import React, { createRef, useEffect } from 'react'

// import lottie
import lottie from 'lottie-web';



// import animation data
import animationData from './animation-data/chimney-data.json';

const ChimneyCoinsAnim = (props) => {
  let chimneyAnimationContainer = createRef();
  let chimneyAnim = null;

  useEffect(() => {
    chimneyAnim = lottie.loadAnimation({
    container: chimneyAnimationContainer.current,
    renderer: "svg",
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      progressiveLoad: true
    }
    });

    chimneyAnim.play();
    chimneyAnim.setSpeed(0.8);
    
    
    return () => {
      chimneyAnim.destroy();
     } // optional clean up for unmounting
    }, []);

    return (
      <div className="chimney-animation trigger" ref={chimneyAnimationContainer}/>
    )
}
export default ChimneyCoinsAnim;
