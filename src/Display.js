import React from "react";
import Switch from "react-switch";
import { useState, useEffect } from "react";
import VolumeSlider from "./VolumeSlider";

export default function Display(props) {
    let chordNewName = props.buttonName;

  const [checked, setChecked] = useState(false);
  const [isBankChecked, setIsBankChecked] = useState(false);
  const [rangeval, setRangeval] = useState(null);
  const [bankValue, setBankValue] = useState(null);
  const [displayChordsNames,setDisplayChordsNames] = useState(true);
  
  useEffect(() => {
    props.getTurnOnOffButtonInfo(checked);
    if(!checked){
        setRangeval(null);
        setBankValue(null);
        setDisplayChordsNames(false);
    }
  },[checked]);

  useEffect( () => {
    setDisplayChordsNames(true);
    setBankValue(null);
    setRangeval(null);
  },[chordNewName])

  const handleChange = () => {
    setChecked((preChecked) => !preChecked);
    setBankValue(null);
  };

  const handleBankChange = () => {
    setIsBankChecked((previous) => !previous);
    props.getBankInfo(isBankChecked);
    if (isBankChecked) {
      setBankValue("Heater kit");
      setRangeval(null);
      setDisplayChordsNames(false);
    } else {
      setBankValue("Smooth Piano kit");
      setRangeval(null);
      setDisplayChordsNames(false);
    }
  };


  return (
    <article style={{ display: "inlineBlock", width: 300, height: 400 }}>
      <div className="container-controller">
        <div className="logo">
          FCC <i className="inner-logo fa fa-free-code-camp"></i>
        </div>

        <div className="power-container">
          <h4>Power</h4>
          <label>
            <Switch onChange={handleChange} checked={checked} />
          </label>
        </div>

        <div id="display">
          {checked === true && rangeval && <p>Volume: {rangeval}</p>}
          {checked && <p>{bankValue}</p>}
          {checked && displayChordsNames && <p>{chordNewName}</p>}
        </div>

        <VolumeSlider
          checkValue={checked}
          rangevalume={(rangeval) => (
            setRangeval(rangeval), setBankValue(null),  setDisplayChordsNames(false)
          )}
        />

        <div className="bank-container">
          <h4>Bank</h4>
          <label>
            <Switch
              onChange={handleBankChange}
              checked={isBankChecked}
              disabled={!checked}
            />
          </label>
        </div>
      </div>
    </article>
  );
}
