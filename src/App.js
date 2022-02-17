import './global.css';
import Card from "./components/card";
import Button from "./components/button";
import React from "react";
import Filter from "./components/filter ";
import './components/main/index.scss';
import Cards from "./components/cards";

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





    // function getCount(){
    //     if (window.innerWidth >= DESKTOP_WIDTH) {
    //         return screenSize = 6;
    //     }
    //     if (window.innerWidth >= TABLET_WIDTH) {
    //         return screenSize = 1;
    //     }
    // }

    // React.useEffect(() => {
    //     window.addEventListener('resize', getCount);
    //
    //
    //     return () => {
    //         window.removeEventListener('resize', getCount);
    //     };
    // }, []);


    function seeMoreHandler() {
        if (
            count < items.length
        ) {
            setCount(count + 3);
        }
        else
        {
            console.log('Все')
        }
        console.log(count);
    }


  return (
      <>
      <main className='main'>
              <h1 className='title'>Our Latest Developments</h1>
              <Filter />
              <Cards
                  items={items}
                  count={count}
              />
              <Button onClick={seeMoreHandler} />
      </main>
      </>
  );
}

export default App;
