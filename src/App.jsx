import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [numPicked, setnumPicked] = useState([])

  // metodo per creare un array di 90 elementi
  const arrayNum = Array.from({ length: 90 }, (_, i) => i + 1);
  let randNum = 0
  const sortNum = () => {
    randNum = Math.floor(Math.random() * 90) + 1;
    (numPicked.includes(randNum) ? randNum = Math.floor(Math.random() * 90) + 1 : '')
    setCount(randNum)
    setnumPicked((pastNum) => [...pastNum, randNum])
    console.log(numPicked);
    showNum(numPicked);
  }

  const cleanArray = () => {
    setnumPicked([])
    setCount(0)
  }

  const showNum = (array) => {
    return arrayNum.map(i =>
      (array.includes(i)) ?
        <li key={i} className='picked-num'>{i}</li> :
        <li key={i} className='number'>{i}</li>
    )
  }


  //todo sistemare lo stile e far in modo che non escano numeri duplicati
  return (
    <>
      <ul>
        {showNum(numPicked)}
      </ul>
      <div>
        <span>Ultimo numero estratto</span>
        <div className='last-num'>{count}</div>
        <hr />
        <button className='estrai' onClick={sortNum}>Estrai</button>
        <button className='termina' onClick={cleanArray}>Termina gioco</button>
      </div>
    </>
  )
}

export default App
