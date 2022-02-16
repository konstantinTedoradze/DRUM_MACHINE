import "./App.css";
import DrumButton from "./DrumButton";
import Display from "./Display";
import { useState } from "react";

function App() {
  const [targetName, setTargetName] = useState("");
  const [checkBankButton, setCheckBankButton] = useState(false);
  const [checkTurnOnButton, setCheckTurnOnButton] = useState(false);
  
  const musicData = {
    Q: {
      musicSrc: {
        heater: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
        drums: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
      },
      musicNames: {
        heater: "Heater 1",
        drums: "Chord 1",
      },
    },
    W: {
      musicSrc: {
        heater: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
        drums: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
      },
      musicNames: {
        heater: "Heater 2",
        drums: "Chord 2",
      },
    },
    E: {
      musicSrc: {
        heater: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
        drums: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
      },
      musicNames: {
        heater: "Heater 3",
        drums: "Chord 3",
      },
    },
    A: {
      musicSrc: {
        heater: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
        drums:
          "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
      },
      musicNames: {
        heater: "Heater 4",
        drums: "Shaker",
      },
    },
    S: {
      musicSrc: {
        heater: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
        drums: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
      },
      musicNames: {
        heater: "Clap",
        drums: "Open HH",
      },
    },
    D: {
      musicSrc: {
        heater: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
        drums: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
      },
      musicNames: {
        heater: "Open HH",
        drums: "Closed HH",
      },
    },
    Z: {
      musicSrc: {
        heater: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
        drums: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
      },
      musicNames: {
        heater: "Kick n'Hat",
        drums: "Punchy kick",
      },
    },
    X: {
      musicSrc: {
        heater: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
        drums: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
      },
      musicNames: {
        heater: "Kick",
        drums: "Side stick",
      },
    },
    C: {
      musicSrc: {
        heater: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
        drums: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
      },
      musicNames: {
        heater: "Closed HH",
        drums: "Snare",
      },
    },
  };


  return (
    <div className="App">
      <section id="drum-machine">
          <div className="row" style={{ pointerEvents: checkTurnOnButton? 'none': '' }}>
            {Object.entries(musicData).map(([key, value], index) => (
              <div className="Btn">
             
              <DrumButton
                key={index}
                changeButtonName={setTargetName}
                letter={key}
                checkTurnButton={checkTurnOnButton} 
                name={
                  checkBankButton ?  value.musicNames.drums : value.musicNames.heater 
                }
                src={
                  checkBankButton ? value.musicSrc.drums : value.musicSrc.heater
                }
              /> 
              </div>
            ))}
          </div>

        <Display
          buttonName={targetName}
          getTurnOnOffButtonInfo={(checkTurnOnButton) =>
            setCheckTurnOnButton(!checkTurnOnButton)
          }
          getBankInfo={(checkBankButton) =>
            setCheckBankButton(!checkBankButton)
          }
        />
      </section>
    </div>
  );
}

export default App;
