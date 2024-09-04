import React, { useState } from 'react';

const SideBarOption = ({ options }) => {

    const [selectedItem, setSelectedItem] = useState(null);

    const handleChange = (event) => {
        const { value } = event.target;


        if (value !== selectedItem) {
            setSelectedItem(value);
        }
    };

    return (
        <div className='sidebaroption'>

            {options.map((option) => (
                <label key={option}>
                    <input
                        type="radio"
                        id={option}
                        value={option}
                        checked={selectedItem === option}
                        onChange={handleChange}
                    />
                    {option}
                </label>
            ))}
        </div>
    );
};

export default SideBarOption;
