import React from 'react';
import Card from "../card";
import './index.scss';

function Cards({items, count, searchTerm}) {

    const [searchResults, setSearchResults] = React.useState([]);

    React.useEffect(() => {
            const results = items.filter(item =>
                item.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setSearchResults(results);
        }
        , [searchTerm]);

    console.log(searchTerm);
    console.log(searchResults);
    return (
        <section className='cards'>
                    {
                        !searchTerm ?
                            items.map(
                                (item, key) => (
                                    item.id <= count &&

                                    <Card
                                        id={item.id}
                                        key={item.id}
                                        className={item.type === 'IndependentLiving' ? 'card__type card__type_independent' : 'card__type card__type_support'}
                                        type={item.type === 'IndependentLiving' ? 'Independent Living' : 'Restaurant & Support available'}
                                        title={item.title}
                                        address={item.address}
                                        price={item.price}
                                    />

                                )
                            )
                            :
                            searchResults.map(
                                (item, key) => (
                                    item.id <= count &&
                                    <Card
                                        id={item.id}
                                        key={item.id}
                                        className={item.type === 'IndependentLiving' ? 'card__type card__type_independent' : 'card__type card__type_support'}
                                        type={item.type === 'IndependentLiving' ? 'Independent Living' : 'Restaurant & Support available'}
                                        title={item.title}
                                        address={item.address}
                                        price={item.price}
                                    />

                                )
                            )
                    }
        </section>
    );
}

export default Cards;
