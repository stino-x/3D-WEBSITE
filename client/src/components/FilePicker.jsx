// import React from 'react';

const FilePicker = () => {
    const handleFileChange = () => {
        // Handle file change logic here
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
        </div>
    );
};

export default FilePicker;