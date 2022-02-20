import React from 'react';
import './index.scss';


function Button({onClick}) {
    return (
        <button
            onClick={onClick}
            className='button'>
            <div className='button__content'>
                <span className='button__label'>See more</span>
                <svg width="7" height="17" viewBox="0 0 7 17" className='button__image' fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path id="Chevron" d="M1 1L5.043 8.41667L1 15.8333" stroke="#363636" stroke-width="2"
                          stroke-linecap="round"/>
                </svg>
            </div>
        </button>
    );
}

export default Button;
