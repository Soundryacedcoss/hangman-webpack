import React, { useEffect, useRef, useState } from "react";
import "./Landing.css";
export const LandingPage = () => {
  const [Inputbox, setInputbox] = useState([]);
  const [input, setinput] = useState("");
  const [Random, setRandom] = useState([]);
  const [inputArr, setInputArr] = useState([]);
  const [disable, setDisable] = useState(false);
  const [id1, setId1] = useState("");
  const [attempt, setAttempt] = useState(7);
  const ref1 = useRef();
  const head = useRef();
  const neck = useRef();
  const hand = useRef();
  const handLeft = useRef();
  const handLeftDown = useRef();
  const handDownRight = useRef();
  const keyborad = [
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
  //   Here i am taking random words from array

  useEffect(() => {
    var userWord = words[Math.floor(Math.random() * words.length)];
    setInputbox(userWord.split(""));
    setRandom(userWord);
    head.current.style.display = "none";
    neck.current.style.display = "none";
    hand.current.style.display = "none";
    handLeft.current.style.display = "none";
    handLeftDown.current.style.display = "none";
    handDownRight.current.style.display = "none";
  }, []);
  console.log("Random word", Random);
  const KeyHandler = (e) => {
    setinput(e.target.value);
    console.log("clicked", e.target.value);
    var regex = /[A-Z]/g;
    let tempIndex = Random.indexOf(e.target.value);
    const matchval = Random.match(regex);
    setDisable(false);
    for (let i = 0; i < Random.length; i++) {
      if (tempIndex >= 0 && tempIndex <= Random.length) {
        setId1(e.target.id);
        console.log(id1);
        setDisable(true);
        setinput(e.target.value);
        inputArr.push(matchval);
      } else {
        let temp = attempt - 1;
        setAttempt(temp);
        if (attempt === 7) {
          head.current.style.display = "block";
        } else if (attempt === 6) {
          neck.current.style.display = "block";
        } else if (attempt === 5) {
          hand.current.style.display = "block";
        } else if (attempt === 4) {
          handLeft.current.style.display = "block";
        } else if (attempt === 3) {
          handLeftDown.current.style.display = "block";
        } else if (attempt === 2) {
          handDownRight.current.style.display = "block";
        }
      }
    }
  };

  return (
    <>
      <div style={{ marginLeft: "13%", width: "40%" }}>
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
                value={Random[index] === input ? input : null}
                className="Input"
                type="text"
              />
            </>
          ))}
        </div>
        <div className="KeyboardDiv">
          {keyborad.map((item, index) => (
            <button
              value={item}
             
              className="KeysButton"
              onClick={KeyHandler}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
