import './global.css';
import Button from "./components/button";
import React from "react";
import './components/main/index.scss';
import Cards from "./components/cards";
import Filter from "./components/filter ";

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
    const [filterValue, setFilterValue] = React.useState('');

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


    function onChangeFilterInput(e) {
        if (e.target.value.length > 2) {
            setFilterValue(e.target.value);
        }
        console.log(e.target.value)
        console.log(filterValue)
    }


    function seeMoreHandler() {
        if (
            count < items.length
        ) {
            setCount(count + 3);
        }
    }


    return (
        <>
            <main className='main'>
                <h1 className='title'>Our Latest Developments</h1>
                <Filter
                    onChange={onChangeFilterInput}
                    value={filterValue}
                />

                    <Cards
                        items={items}
                        count={count}
                        filterValue={filterValue}
                    />

                <Button onClick={seeMoreHandler}/>
            </main>
        </>
    );
}

export default App;
