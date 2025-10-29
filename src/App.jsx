import React,{useState,useEffect} from "react";
import deck from "./components/deck.jsx";
import buttons from "./components/buttons.jsx";
import list from "./components/list.jsx";

function App(){
  //creates values for deck and wildcards
  const suits = ["♥", "♦", "♣", "♠"];
  const units = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];

  //create a deck of 52 cards
  function createDeck(){
    const newDeckVal = [];
    for(let suit of suits){
      for(let unit of units){
        newDeckVal.push({newSuit: suit , newUnit: unit});
      }
    }

    return newDeckVal;
  }


  //set the state variables
  const[cardsLeft , setCardsLeft] = useState(createDeck());// cards still in the deck
  const[cardsVisible,setCardsVisible] = useState([]);//cards present on the screen currently
  const[currentSelectedCard, setSelectedCard] = useState(null);//which card is selected

  const[text,setText] = useState("Welcome to the game of cards");



  //update message when deck is changed
  useEffect(()=>{
    if(cardsLeft.length ===0){
      setText("No card is left in the deck");
    }else{
      setText("Cards left in the deck"+ cardsLeft.length);
    }
  },[cardsLeft]);
}




