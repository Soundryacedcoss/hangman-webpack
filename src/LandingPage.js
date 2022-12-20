import React, { useEffect, useRef, useState } from "react";
import "./Landing.css";
export const LandingPage = () => {
  const [Inputbox, setInputbox] = useState([]);
  const [input, setinput] = useState("");
  const [Random, setRandom] = useState([]);
  const [inputArr, setInputArr] = useState([]);

  const [attempt, setAttempt] = useState(6);
  const head = useRef();
  const neck = useRef();
  const hand = useRef();
  const handLeft = useRef();
  const handLeftDown = useRef();
  const handDownRight = useRef();
  const keyboard = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const words = ["PEN", "PENCIL", "SHIRT", "BOOK", "MOBILE"];

  useEffect(() => {
    //   Here i am taking random words from array
    var userWord = words[Math.floor(Math.random() * words.length)];
    //here i am taking word in an array for display no of input box according to no of letter
    setInputbox(userWord.split(""));
    console.log(Inputbox);
    setRandom(userWord);
    // Initialing hide the hangman image
    head.current.style.display = "none";
    neck.current.style.display = "none";
    hand.current.style.display = "none";
    handLeft.current.style.display = "none";
    handLeftDown.current.style.display = "none";
    handDownRight.current.style.display = "none";
  }, []);
  const KeyHandler = (e) => {
    //  here i am taking the all users value in a array for disable button
    inputArr.push(e.target.value);
    // matching the letters here
    let tempIndex = Random.indexOf(e.target.value);
    if (tempIndex >= 0 && tempIndex <= Random.length) {
      // here i am puting the matched letter
      setinput(e.target.value);
    } else {
      let temp = attempt - 1;
      setAttempt(temp);
      if (attempt >= 1) {
        // display the hangman image
        if (attempt === 6) {
          head.current.style.display = "block";
        } else if (attempt === 5) {
          neck.current.style.display = "block";
        } else if (attempt === 4) {
          hand.current.style.display = "block";
        } else if (attempt === 3) {
          handLeft.current.style.display = "block";
        } else if (attempt === 2) {
          handLeftDown.current.style.display = "block";
        } else if (attempt === 1) {
          handDownRight.current.style.display = "block";
          handLeftDown.current.style.display = "block";
          handLeft.current.style.display = "block";
          hand.current.style.display = "block";
          neck.current.style.display = "block";
          head.current.style.display = "block";
        }
      } else if (attempt === 0) {
        setAttempt(0);
        alert("Game over");
      }
    }
  };

  return (
    <>
      <div>
        <ul>
          <li>
            <b className="GameName">HANGMAN</b>
          </li>
          <li className="Attempt">{attempt} Attempt left</li>
        </ul>
      </div>
      <div style={{ marginLeft: "53%", width: "40%", marginBottom: "4%" }}>
        <div style={{ display: "flex", position: "relative" }}>
          <p className="mainstand"></p>
          <div>
            <p className="standheight"></p>
          </div>
          <div>
            <p className="stand neck"></p>
            <p className="head" ref={head}></p>
            <p className="neck" ref={neck}></p>
            <p className="hand" ref={hand}></p>
            <p className="hand left" ref={handLeft}></p>
            <p className="hand left down" ref={handLeftDown}></p>
            <p className="hand downRight" ref={handDownRight}></p>
          </div>
        </div>
      </div>
      <div className="Container">
        <div className="inputArea">
          {Inputbox.map((item, index) => (
            <>
              <input
                // putting the matched letter into boxes
                value={Random[index] === input ? input : null}
                className="Input"
                type="text"
              />
            </>
          ))}
        </div>
        <div className="Keyborad">
          {keyboard.map((item) => (
            <>
              <button
                className="KeysButton"
                // here i am disabling the button
                disabled={inputArr.find((val) => (val === item ? true : null))}
                value={item}
                onClick={KeyHandler}
              >
                {item}
              </button>
            </>
          ))}
        </div>
      </div>
    </>
  );
};
