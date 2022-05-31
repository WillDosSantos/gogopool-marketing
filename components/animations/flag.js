import React, { createRef, useEffect } from 'react'

// import lottie
import lottie from 'lottie-web';



// import animation data
import animationData from './animation-data/flag-data.json';

const MtnFlagAnim = (props) => {
  let flagAnimationContainer = createRef();
  let flagAnim = null;

  useEffect(() => {
    flagAnim = lottie.loadAnimation({
    container: flagAnimationContainer.current,
    renderer: "svg",
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      progressiveLoad: true
    }
    });

    flagAnim.play();
    flagAnim.setSpeed(0.8);
    
    
    return () => {
      flagAnim.destroy();
     } // optional clean up for unmounting
    }, []);

    return (
      <div className="flag-animation trigger" ref={flagAnimationContainer}/>
    )
}
export default MtnFlagAnim;
