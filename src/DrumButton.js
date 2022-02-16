import React from "react";
import { useEffect, useRef } from "react";

export default function DrumButton(props) {
  const myRef = useRef(null);
 
  useEffect(() => {
      if(!props.checkTurnButton){
        document.addEventListener("keydown", handleKeyPress,false);
       return () => document.removeEventListener("keydown", handleKeyPress);
      }
  }, [props.checkTurnButton]);


  const handleKeyPress = (event) => {
    event.preventDefault();
    if (myRef.current.id.toLowerCase() === event.key) {
      console.log(myRef.current,'nameeeeeeee');

      props.changeButtonName(props.name);
      myRef.current.play();
    }
  };

  const handleClick = () => {
    myRef.current.play();
    console.log(props.name,'giooo');
    props.changeButtonName(props.name)
  };

  return (
    <div onKeyDown={handleKeyPress}>
      <div
        className="drum-pad"
        id={`drum-${props.name}`}
        onClick={handleClick}
      >
        <audio
          className="clip"
          id={props.letter}
          ref={myRef}
          src={props.src}
          type="audio/mpeg"
          controls
        />
        <p className="drup-pad-letter">{props.letter}</p>
      </div>
    </div>
  );
}

