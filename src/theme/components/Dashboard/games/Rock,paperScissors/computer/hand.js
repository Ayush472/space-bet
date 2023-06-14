import React, { useState ,useEffect} from "react";
import "./../../../../../assets/css/Dashboard/rps game/rps computer/hand.css";



export default function Hand({
  type = "rock",
  left,
  color = "yellow",
  active,
  moving,
  
}) {
  let activeHand = left ? "activeLeft" : "activeRight";
  const [timer, setTimer] = useState(true);

  useEffect(() => {
    console.log("moving hand kk",moving)
    
      setTimeout(() => {
      
        setTimer(false);
        console.log("1");
      }, 2000);
    
  }, [moving]);

  return (
    <div className="hand1">
        
        <img
          className={[
            left ? "image userChoice" : "image computerChoice ",
            moving ? "image moving" : "",
            active ? "" : activeHand,
          ].join(" ")}
          src={ moving ? require(`./../../../../../assets/images/Game Image/rps game/multip/${color}-rock.png`) :
          require(`./../../../../../assets/images/Game Image/rps game/multip/${color}-${type ? type : 'rock'}.png`)}
          alt="hand"
        />
    </div>
  );
}
