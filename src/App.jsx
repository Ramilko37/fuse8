import './global.css';
import Button from "./components/button";
import React from "react";
import './components/main/index.scss';
import './components/cards/index.scss';
import Filter from "./components/filter ";
import {Route, Routes} from "react-router-dom";
import Cards from "./components/cards";

let url = 'https://603e38c548171b0017b2ecf7.mockapi.io/homes';


function App() {
    const [items, setItems] = React.useState([]);
    const [count, setCount] = React.useState(6);
    const [searchTerm, setSearchTerm] = React.useState("");

    function checkWindowSize() {
        if (window.screen.width >= 1280) {
            setCount(6);
        } else if(window.screen.width >= 768) {
            setCount(3)
        } else if(window.screen.width <= 767) {
            setCount(2)
        };
    };

    React.useEffect(() => {
        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                setItems(json);
                checkWindowSize();
            })
            .catch(err => console.log(err))
    }, []);

    console.log(count);
    function onChangeFilterInput(e) {
        e.target.value.length > 3
            ?
            setSearchTerm(e.target.value)
            : setSearchTerm('')

    };

    function seeMoreHandler() {
        count < items.length
        &&
        setCount(count + 3);
    };

    return (
        <>
            <main className='main'>
                <h1 className='title'>Our Latest Developments</h1>
                <Filter
                    onChange={onChangeFilterInput}
                    value={searchTerm}
                />
                <Routes>
                    <Route exact path='/'
                           element={
                               <Cards
                                   items={items}
                                   count={count}
                                   searchTerm={searchTerm}
                               />
                           }>
                    </Route>
                </Routes>
                <Button onClick={seeMoreHandler}/>
            </main>
        </>
    );
};

export default App;
