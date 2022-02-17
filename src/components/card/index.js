import React from 'react';
import Img from '../../assets/images/image.png';
import './index.scss';




function Card({ title, address, price }) {
    return (
        <div className='card'>
            <img src={Img} className='card__image' />
            <div className='card__description-container'>
                <div className='card__description-wrapper'>
                    <h3 className='card__title'>{title}</h3>
                    <p className='card__text'>{address}</p>
                </div>

                <div className='card__description-wrapper'>
                    <p className='card__text'>New Properties for Sale from <span className='card__price'>{`£${price}`}</span></p>
                    <p className='card__disclaimer'>Shared Ownership Available</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
