import PropTypes from 'prop-types';
import { useSnapshot } from 'valtio'
import state from '../store'
import { getContrastingColor } from './../config/helpers';

const CustomButton = ({title, customStyles, handleClick, type}) => {
    const snap  = useSnapshot(state)
    const generateStyle = (type) => {
        switch (type) {
            case 'filled':
                return {backgroundColor: snap.color, color: getContrastingColor(snap.color)}
            case 'outlined':
                return {borderWidth: '1px', borderClor: snap.color, color: snap.color}
            default:
                return 'bg-black text-white'
        }
    }
  return (
    <button className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`} style={generateStyle(type)} onClick={handleClick}>{ title }</button>
  )
}

CustomButton.propTypes = {
  title: PropTypes.string.isRequired,
  customStyles: PropTypes.string,
  handleClick: PropTypes.func,
  type: PropTypes.string
};

export default CustomButton