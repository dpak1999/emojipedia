/** @format */

import { useState } from 'react';
import emojis from './emojis';

function App() {
  const [emojiMeaning, setEmojiMeaning] = useState('');

  const handleClick = (emoji) => {
    let meaning = emojis[emoji];
    setEmojiMeaning(meaning);
  };

  const handleChange = (event) => {
    const insertedEmoji = event.target.value;

    const meaning = emojis[insertedEmoji];
    console.log(meaning);

    if (meaning === undefined) {
      setEmojiMeaning('We do not have this emoji in our database');
    } else {
      setEmojiMeaning(meaning);
    }
  };

  return (
    <div className="bg-purple-600 min-h-screen">
      <h1 className="text-white font-bold text-4xl text-center italic font-serif underline">
        Know your emojis
      </h1>

      <div className="flex min-h-screen flex-col mt-28">
        <p className="text-center mb-2">
          {Object.keys(emojis).map((emojis) => (
            <span
              onClick={() => handleClick(emojis)}
              className="mr-4 text-4xl cursor-default cursor-pointer"
            >
              {emojis}
            </span>
          ))}
        </p>
        <form className="flex mr-auto ml-auto">
          <input
            className="rounded-lg p-4 w-96 text-gray-800 outline-none"
            placeholder="Enter emoji"
            onChange={handleChange}
          />
        </form>
        <span className="text-white font-bold text-center font-serif mt-7">
          Either type the emoji or click one of the given emoji to view what it
          is
        </span>
        <span className="text-white font-bold text-center font-serif mt-7">
          Result:- {emojiMeaning}
        </span>
      </div>
    </div>
  );
}

export default App;
