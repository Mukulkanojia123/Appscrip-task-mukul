import React, { useState, useEffect } from 'react';
import SideBarOption from './SideBarOption';

const sideBarData = [
    {
        name: "IDEAL FOR",
        otherOption: ["MEN", "WOMEN", "BABY"]
    },
    {
        name: "OCCASION",
        otherOption: ["OPTION1", "OPTION2", "OPTION3"]
    },
    {
        name: "WORK",
        otherOption: ["OPTION4", "OPTION5", "OPTION6"]
    },
    {
        name: "FABRIC",
        otherOption: ["OPTION7", "OPTION8", "OPTION9"]
    },
]

const SideBar = ({ toggleSideBar }) => { // Change 'toggleSideBar' to 'toggle'
    const [toggleOptions, setToggleOptions] = useState(-1);
    console.log(toggleSideBar)
    const handleOptions = (index) => {
        setToggleOptions(toggleOptions === index ? -1 : index);
    }

    return (
        toggleSideBar && ( // Adjusted for clarity, no need for parentheses here, but you can keep them if you prefer
            <div className='Sidebar'>
                {sideBarData.map((item, index) => (
                    <div key={index}>
                        <div onClick={() => handleOptions(index)}>
                            <h4>{item.name}</h4>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.72125 6.00017L7.06792 10.3468C7.58125 10.8602 8.42125 10.8602 8.93458 10.3468L13.2813 6.00018" stroke="#292D32" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        {toggleOptions === index && <SideBarOption options={item.otherOption} />}
                    </div>
                ))}
            </div>
        )
    );
}

export default SideBar;
