import React from 'react';
import './index.scss';

function Filter({onChange}) {
    return (
        <div className='filter'>
            <span className='filter__label'>Filter</span>
            <input onChange={onChange} type='text' className='filter__input'/>
        </div>
    );
}

export default Filter;
