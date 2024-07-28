import { useState } from 'react';

const ColorPicker = () => {
    const [color, setColor] = useState('');

    const handleColorChange = (e) => {
        setColor(e.target.value);
    };

    return (
        <div>
            <input type="color" value={color} onChange={handleColorChange} />
            <div style={{ backgroundColor: color, width: '100px', height: '100px' }}></div>
        </div>
    );
};

export default ColorPicker;