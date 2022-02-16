import "./App.css";
import DrumButton from "./DrumButton";
import Display from "./Display";
import { useState, useEffect } from "react";

function App() {
  const [targetName, setTargetName] = useState("");
  const [checkBankButton,setCheckBankButton] = useState(false);
  const [checkTurnOnButton,setCheckTurnOnButton] = useState(false);

  const musicSrc = [
    ["https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3","https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"],["https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3","https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"],["https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3","https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"],["https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3","https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"],["https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3","https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"],["https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3","https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"],["https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3","https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"],["https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3","https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"],["https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3","https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"]]

  const musicNames = [["Heater 1","Chord 1"],["Heater 2","Chord 2"],["Heater 3","Chord 3"],["Heater 4","Shaker"],["Clap","Open HH"],["Open HH","Closed HH"],["Kick n'Hat","Punchy kick"],["Kick","Side stick"],["Closed HH","Snare"]];

  const [chordNames,setChordsNames] = useState('');
  const [music,setMusic] = useState(null);
  const [isDivDisable,setIsDivDisable] = useState('');

  useEffect(() => {
    if(checkTurnOnButton === true){
      setIsDivDisable('none');
    } else {
      setIsDivDisable('');
    }
  },[checkTurnOnButton]);

  useEffect(() => {
    if(checkBankButton === true){
      setMusic(1);
      setChordsNames(1);
    } else {
      setMusic(0);
      setChordsNames(0);
    }
 },[checkBankButton]);



  return (
    <div className="App">
      <section id="drum-machine">
        <div className="column" style={{pointerEvents: isDivDisable}}>
          <div className="row">
            {musicNames.map(musicName => (
              <DrumButton
              changeButtonName={(targetName) => setTargetName(targetName)}
              letter="Q"
              name={musicName[chordNames]}
              src={musicName[music]}
            />
            ))}
            <DrumButton
              changeButtonName={(targetName) => setTargetName(targetName)}
              letter="Q"
              name={musicNames[0][chordNames]}
              src={musicSrc[0][music]}
            />
            <DrumButton
              changeButtonName={(targetName) => setTargetName(targetName)}
              letter="W"
              name={musicNames[1][chordNames]}
              src={musicSrc[1][music]}
            />
            <DrumButton
              changeButtonName={(targetName) => setTargetName(targetName)}
              letter="E"
              name={musicNames[2][chordNames]}
              src={musicSrc[2][music]}
            />
          </div>

          <div className="row">
            <DrumButton
              changeButtonName={(targetName) => setTargetName(targetName)}
              letter="A"
              name={musicNames[3][chordNames]}
              src={musicSrc[3][music]}
            />
            <DrumButton
              changeButtonName={(targetName) => setTargetName(targetName)}
              letter="S"
              name={musicNames[4][chordNames]}
              src={musicSrc[4][music]}
            />
            <DrumButton
              changeButtonName={(targetName) => setTargetName(targetName)}
              letter="D"
              name={musicNames[5][chordNames]}
              src={musicSrc[5][music]}
            />
          </div>

          <div className="row">
            <DrumButton
              changeButtonName={(targetName) => setTargetName(targetName)}
              letter="Z"
              name={musicNames[6][chordNames]}
              src={musicSrc[6][music]}
            />
            <DrumButton
              changeButtonName={(targetName) => setTargetName(targetName)}
              letter="X"
              name={musicNames[7][chordNames]}
              src={musicSrc[7][music]}
            />
            <DrumButton
              changeButtonName={(targetName) => setTargetName(targetName)}
              letter="C"
              name={musicNames[8][chordNames]}
              src={musicSrc[8][music]}
            />
          </div>
        </div>

        <Display buttonName={targetName} getTurnOnOffButtonInfo={checkTurnOnButton => setCheckTurnOnButton(!checkTurnOnButton)} getBankInfo={checkBankButton => setCheckBankButton(!checkBankButton)}/>
      </section>
    </div>
  );
}

export default App;
