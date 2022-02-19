import React from 'react';
import Card from "../card";
import './index.scss';

function Cards({items, count, filterValue, filterResult}) {

    console.log(filterValue)
    return (
        <section className='cards'>
            {


                    filterResult
                        .map((item, key) => (
                            item.id <= count &&
                            <Card
                                key={item.id}
                                className={item.type === 'IndependentLiving' ? 'card__type card__type_independent' : 'card__type card__type_support'}
                                type={item.type === 'IndependentLiving' ? 'Independent Living' : 'Restaurant & Support available'}
                                title={item.title}
                                address={item.address}
                                price={item.price}
                            />
                        ))
            }
        </section>
    );
}

export default Cards;
