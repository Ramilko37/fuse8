import React from 'react';
import Cards from "../cards";
import Button from "../button";
import Filter from "../filter ";
import './index.scss';

function Main({ items, count, onClick }) {
    return (
        <main className='main'>
            <h1 className='title'>Our Latest Developments</h1>
            <Filter />
            <Cards
                items={items}
                count={count}
            />
            <Button onClick={onClick} />
        </main>
    );
}

export default Main;
