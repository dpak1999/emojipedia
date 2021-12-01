/** @format */

function App() {
  return (
    <div className="bg-purple-600 min-h-screen">
      <h1 className="text-white font-bold text-4xl text-center italic font-serif underline">
        Know your emojis
      </h1>
      <>
        <div className="flex min-h-screen">
          <form className="m-auto flex">
            <input
              className="rounded-lg p-4 w-96 text-gray-800 outline-none"
              placeholder="Enter emoji"
            />
          </form>
        </div>
      </>
    </div>
  );
}

export default App;
