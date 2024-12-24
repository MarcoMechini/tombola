import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState('🎄')
  const [numPicked, setnumPicked] = useState([])
  const [shuffleArray, setshuffleArray] = useState([])

  // metodo per creare un array di 90 elementi

  const arrayNum = Array.from({ length: 90 }, (_, i) => i + 1);

  useEffect(() => {
    setshuffleArray([...arrayNum].sort(() => 0.5 - Math.random()))
  }, []);

  let randNum = 0;

  const sortNum = () => {
    randNum = shuffleArray[shuffleArray.length - 1];

    if (randNum === undefined) {
      console.log('Numeri finiti');
      return;
    }

    setCount(randNum)
    setnumPicked((pastNum) => [...pastNum, randNum])
    showNum(numPicked);
    setshuffleArray((prevShuffle) => prevShuffle.slice(0, -1))
  }

  const cleanArray = () => {
    setnumPicked([]);
    setCount('🎄');
    setshuffleArray([...arrayNum].sort(() => 0.5 - Math.random()));
  }

  const showNum = (array) => {
    return arrayNum.map(i =>
      (array.includes(i)) ?
        <li key={i} className='elem-li-num picked-num'>{i}</li> :
        <li key={i} className='elem-li-num number'>{i}</li>
    )
  }


  return (
    <>
      <main>
        <h1>Tombola</h1>
        <section>
          <ul className='list-num'>
            {showNum(numPicked)}
          </ul>
          <div className='nav'>
            <span>Ultimo numero estratto</span>
            <div className='last-num'>{count}</div>
            <hr />
            <button className='estrai' onClick={sortNum}>Estrai</button>
            <button className='termina' onClick={cleanArray}>Termina gioco</button>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
