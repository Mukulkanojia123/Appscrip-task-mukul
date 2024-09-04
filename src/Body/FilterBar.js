import React, { useState, useEffect } from 'react';
import RecommendedList from './RecommendedList';
import './body.css';

const FilterBar = ({ setToggleSideBar }) => {
    const [recommenList, setRecommenlist] = useState(false);

    const handleRecommended = () => {
        setRecommenlist(!recommenList);
    };

    const handleFilter = () => {
        console.log("click")
        setToggleSideBar(prev => !prev)
    }

    useEffect(() => {
        const handleScroll = () => {
            setRecommenlist(false);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="container">
            <div className="left-items">
                <div>20 ITEMS</div>
                <div onClick={handleFilter}>FILTER</div>
            </div>
            <div className="right-item">
                <div onClick={handleRecommended}>RECOMMENDED</div>
            </div>
            {recommenList && <RecommendedList />}
        </div>
    );
};

export default FilterBar;
