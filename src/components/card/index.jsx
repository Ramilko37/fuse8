import React from 'react';
import {
    Link,
    NavLink
} from "react-router-dom";
import Img from '../../assets/images/image.png';
import './index.scss';


function Card({title, address, price, type, className, id}) {
    return (
        <Link to={`details/${id}`} className='card__link'>
                <div className='card'>
                    <div className='card__image-container'>
                        <img src={Img} className='card__image'/>
                        <div className={className}>
                            {type}
                        </div>
                    </div>
                    <div className='card__description-container'>
                        <div className='card__description-wrapper'>
                            <h3 className='card__title'>{title}</h3>
                            <p className='card__text'>{address}</p>
                        </div>

                        <div className='card__description-wrapper'>
                            <p className='card__text'>New Properties for Sale from <span
                                className='card__price'>{`£${price}`}</span></p>
                            <p className='card__disclaimer'>Shared Ownership Available</p>
                        </div>
                    </div>
                </div>
        </Link>

    );
}

export default Card;
