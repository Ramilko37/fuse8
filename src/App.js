import './global.css';
import Button from "./components/button";
import React from "react";
import './components/main/index.scss';
import Filter from "./components/filter ";
import Card from "./components/card";
import './components/cards/index.scss';

let url = 'https://603e38c548171b0017b2ecf7.mockapi.io/homes';

const DESKTOP_WIDTH = 1024;
const TABLET_WIDTH = 768;
const MOBILE_WIDTH = 320;

const NUMBER_CARDS_DESKTOP = 6;
const NUMBER_CARDS_TABLET = 4;
const NUMBER_CARDS_MOBILE = 3;

let screenSize;

function App() {
    const [items, setItems] = React.useState([]);
    const [count, setCount] = React.useState(6);
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);

    console.log(count);

    React.useEffect(() => {
        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                setItems(json);
            })
    }, []);

    React.useEffect(() => {
        if (searchTerm.length > 3) {
            const results = items.filter(item =>
                item.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setSearchResults(results);
        }
    }, [searchTerm]);


    function onChangeFilterInput(e) {
            e.target.value.length > 3 ?
            setSearchTerm(e.target.value) :
                setSearchTerm('');

    }


    function seeMoreHandler() {
        if (
            count < items.length
        ) {
            setCount(count + 3);
        }
    }

    console.log(searchResults)


    return (
        <>
            <main className='main'>
                <h1 className='title'>Our Latest Developments</h1>
                <Filter
                    onChange={onChangeFilterInput}
                    value={searchTerm}
                />
                <section className='cards'>
                    {
                        !searchTerm  ?
                            items.map(
                                (item, key) => (
                                    item.id <= count &&
                                    <Card
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


                <Button onClick={seeMoreHandler}/>
            </main>
        </>
    );
}

export default App;
