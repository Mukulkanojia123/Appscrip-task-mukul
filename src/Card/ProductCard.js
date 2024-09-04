import React, { useState } from 'react';
import "./productcard.css";

const ProductCard = ({ data }) => {
    const [iconBgColor, setIconBgColor] = useState('transparent');  // Initial background color for SVG

    const handleIconClick = () => {
        setIconBgColor(prevColor => prevColor === 'red' ? 'white' : 'red');
    };

    const trimmedTitle = data.title.length > 19 ? data.title.substring(0, 19) + "..." : data.title;

    return (
        <div className='productcard'>
            <img src={data.image} alt={data.title} />
            <div>
                <p>{trimmedTitle}</p>
                <svg
                    onClick={handleIconClick}
                    width="17" height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                        cursor: 'pointer',
                        backgroundColor: iconBgColor,
                        borderRadius: '50%'
                    }}
                >
                    <path
                        d="M8.91398 13.8731C8.68732 13.9531 8.31398 13.9531 8.08732 13.8731C6.15398 13.2131 1.83398 10.4597 1.83398 5.79307C1.83398 3.73307 3.49398 2.06641 5.54065 2.06641C6.75398 2.06641 7.82732 2.65307 8.50065 3.55974C9.17398 2.65307 10.254 2.06641 11.4607 2.06641C13.5073 2.06641 15.1673 3.73307 15.1673 5.79307C15.1673 10.4597 10.8473 13.2131 8.91398 13.8731Z"
                        stroke="#292D32"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </div>
            <p>{data.price}</p>
        </div>
    );
}

export default ProductCard;
