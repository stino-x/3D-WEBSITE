import { useSnapshot } from 'valtio';
import state from '../store';
import { SketchPicker } from 'react-color'; // Import the SketchPicker component

const ColorPicker = () => {
    const snap = useSnapshot(state);

    // const handleColorChange = (e) => {
    //     setColor(e.target.value);
    // };

    return (
        <div className='absolute left-full ml-3'>
            <SketchPicker presetColors={[
                "#000000",
                "#525252",
                "#969696",
                "#d9d9d9",
                "#f0f0f0",
                "#ffffff",
                "#ff4d4f",
                "#ff7a45",
                "#ffaa16",
                "#ffec3d",
                "#bae637",
                "#73d13d",
                "#36cfc9",
                "#40a9ff",
                "#597ef7",
                "#9254de"  
            ]} disableAlpha onChange={(color) => state.color = color.hex} color={snap.color} />
        </div>
    );
};

export default ColorPicker;