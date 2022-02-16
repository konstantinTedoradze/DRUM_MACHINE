import React from 'react'
 
function VolumeSlider(props) {
    return (
      <div>
        <input type="range" className="custom-range" min="0" max="100" 
         onChange={(event) => props.rangevalume(event.target.value)} disabled={!props.checkValue} />
      </div>
    );
}

export default VolumeSlider;
