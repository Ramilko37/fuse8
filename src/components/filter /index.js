import React from 'react';
import './index.scss';

function Filter(props) {
    return (
        <div className='filter'>
            <span className='filter__label'>Filter</span>
            <input type='text' className='filter__input' />
        </div>
    );
}

export default Filter;
