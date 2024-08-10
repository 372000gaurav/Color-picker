import React,{ useState } from "react";

function ColorPicker() {

    const [color, setColor] = useState('#FFFFFF')

    function handleColorChange(e) {
        setColor(e.target.value);
    }

    return (
        
            <div className="container">
                <h2>Color Picker</h2>
                <div className="display" style={{backgroundColor: color}}>
                    <p>selected color</p>
                    <p>{color}</p>
                </div>
                <label>Select a color</label>
                <input className="palatte" type="color" value={color} onChange={handleColorChange} />
            </div>
       
    );
}

export default ColorPicker;