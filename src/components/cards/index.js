import React from 'react';
import Card from "../card";
import './index.scss';

function Cards({items, count}) {
    return (
        <section className='cards'>
            {items.map((item, key) => (
                item.id <= count &&
                <Card
                    key={item.id}
                    title={item.title}
                    address={item.address}
                    price={item.price}
                />

            ))}
        </section>
    );
}

export default Cards;
