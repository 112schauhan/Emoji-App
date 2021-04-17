import React, { useState } from "react";
import "./styles.css";

let emojiDictionary = {
  "😃": "Smiling face with open mouth",
  "😄": "Smiling face with open mouth and smiling eyes",
  "😁": "Grinning face with smiling eyes",
  "😅": "Smiling Face With Open Mouth & Cold Sweat",
  "😂": "Face with tears of joy",
  "😡": "Angry Pouting Face",
  "🤬": "Angry Face Saying bad words",
  "🤯": "Face with exploding anger",
  "❤️": "Symbol of love",
  "💙": "Symbol of Faithfulness and loyalty"
};

export default function App() {
  const emojiArray = Object.keys(emojiDictionary);
  const [meaning, setMeaning] = useState("");

  const emojiMeaningHandler = (event) => {
    let userInput = event.target.value;

    let meaning = emojiDictionary[userInput];
    setMeaning(meaning);

    if (!(userInput in emojiDictionary)) {
      setMeaning("Does not exist");
    }
  };

  const emojiDisplayMeaningHandler = (item) => {
    let userInput = item;
    let meaning = emojiDictionary[userInput];
    setMeaning(meaning);
  };

  const emojiDisplay = emojiArray.map((item) => (
    <span
      key={item}
      onClick={() => emojiDisplayMeaningHandler(item)}
      style={{
        padding: "1.7 rem",
        margin: "0.8rem",
        cursor: "pointer",
        fontSize: "3rem"
      }}
    >
      {item}
    </span>
  ));

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input
        style={{ marginBottom: "2rem" }}
        type="text"
        placeholder="Put an emoji to see its meaning"
        onChange={(event) => emojiMeaningHandler(event)}
      />
      <div>{emojiDisplay}</div>
      <div>
        <h2>{meaning}</h2>
      </div>
    </div>
  );
}
