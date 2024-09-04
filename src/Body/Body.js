import React, { useState, useEffect } from 'react';
import FilterBar from './FilterBar';
import MainContainer from './MainContainer';
import SideBar from './SideBar';

const Body = () => {
    const [toggleSideBar, setToggleSideBar] = useState(false);

    return (
        <div className='body'>
            <FilterBar setToggleSideBar={setToggleSideBar} /> {/* Change 'toggle' to 'setToggleSideBar' */}
            <div className='sidebarandconatainer'>
                <SideBar toggleSideBar={toggleSideBar} /> {/* Pass 'toggleSideBar' prop */}
                <MainContainer />
            </div>
        </div>
    )
}

export default Body;
