/** @format */

import emojis from './emojis';

function App() {
  return (
    <div className="bg-purple-600 min-h-screen">
      <h1 className="text-white font-bold text-4xl text-center italic font-serif underline">
        Know your emojis
      </h1>

      <div className="flex min-h-screen flex-col mt-28">
        <p className="text-center mb-2">
          {Object.keys(emojis).map((i) => (
            <span className="mr-4 text-4xl cursor-default">{i}</span>
          ))}
        </p>
        <form className="flex mr-auto ml-auto">
          <input
            className="rounded-lg p-4 w-96 text-gray-800 outline-none"
            placeholder="Enter emoji"
          />
        </form>
      </div>
    </div>
  );
}

export default App;
