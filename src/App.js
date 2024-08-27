import { useState } from "react";

const gifts = [
  'car',
  'house',
  'girl',
]

function App() {

  const [gift, setGift] = useState()

  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length)
    setGift(gifts[index])
  }

  return (
    <div className="App">
      <h1> {gift || 'No gift'} </h1>
      <button onClick={randomGift}>Increase</button>
    </div>
  );
}

export default App;
