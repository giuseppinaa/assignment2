import { useState } from "react";
import Card from "./Card";

function Cards({ increaseCount, increaseMatched }) {
  const [items, setItems] = useState([
        {id: 1, img: '/img/amy.jpg', stat:""},
        {id: 2, img: '/img/amy.jpg', stat:""},
        {id: 3, img: '/img/bernadette.jpg', stat:""},
        {id: 4, img: '/img/bernadette.jpg', stat:""},
        {id: 5, img: '/img/howard.jpg', stat:""},
        {id: 6, img: '/img/howard.jpg', stat:""},
        {id: 7, img: '/img/leonard.jpg', stat:""},
        {id: 8, img: '/img/leonard.jpg', stat:""},
        {id: 9, img: '/img/penny.jpg', stat:""},
        {id: 10, img: '/img/penny.jpg', stat:""},
        {id: 11, img: '/img/raj.jpg', stat:""},
        {id: 12, img: '/img/raj.jpg', stat:""},
        {id: 13, img: '/img/sheldon.jpg', stat:""},
        {id: 14, img: '/img/sheldon.jpg', stat:""},
        {id: 15, img: '/img/stuart.jpg', stat:""},
        {id: 16, img: '/img/stuart.jpg', stat:""},
        {id: 17, img: '/img/wheaton.jpg', stat:""},
        {id: 18, img: '/img/wheaton.jpg', stat:""},
        {id: 19, img: '/img/winkle.jpg', stat:""},
        {id: 20, img: '/img/winkle.jpg', stat:""},
     
    ].sort(() => Math.random() - 0.5));

    const [prev, setPrev] = useState(-1);

  function check(current) {
    var matchSound = new Audio("img/match.mp3");
    var noMatchSound = new Audio("img/nomatch.mp3");
    if (items[current].id != items[prev].id && items[current].img == items[prev].img) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
      console.log(items[current],items[prev])
      /*matchSound.play(); */
      increaseMatched();
    } else {
      items[current].stat = "incorrect";
      items[prev].stat = "incorrect";
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
        noMatchSound.play();
      }, 1000);
      increaseCount();
    }
  }

  function Clicks(id) {
    if (prev === -1) {
      items[id].stat = "active";
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
  }

  return (
    <div className="container">
      {items.map((item, index) => (
        <Card key={index} item={item} id={index} Clicks={Clicks} />
      ))}
    </div>
  );
}

export default Cards;


        
