import { useEffect, useState } from 'react'
import { StyledMain } from './style'

const Main = () => {
  const [currentNumber, setCurrentNumber] = useState(0)
  const [maxClicks, setMaxClicks] = useState(0)
  const [maxSuccessfulNumber, setMaxSuccessfulNumber] = useState(0)
  const [maxResets, setMaxResets] = useState(0)
  const [experience, setExperience] = useState(0)

  const nextNumber = () => {
    setMaxClicks(maxClicks + 1)
    let percentChance = (currentNumber - experience) / 100

    const randomValue = Math.random()

    if (randomValue <= percentChance) {
      //   if (currentNumber <= 1) {
      //     window.alert('FIRST')
      //   } else if (currentNumber <= 3) {
      //     window.alert('RESET IN 3 CLICKS')
      //   } else if (currentNumber >= 20) {
      //     window.alert('MORE THEN 20')
      //   }
      setCurrentNumber(0)
      setMaxResets(maxResets + 1)
      setExperience(maxResets / 100)
    } else {
      setCurrentNumber(currentNumber + 1)
    }
    if (currentNumber + 1 > maxSuccessfulNumber) {
      setMaxSuccessfulNumber(currentNumber + 1)
    }
  }

  return (
    <StyledMain>
      <div className="container">
        <div className="top-container">
          <h1>Max result: {maxSuccessfulNumber}</h1>
          <h2>Total clicks: {maxClicks}</h2>
          <h3>Total resets: {maxResets}</h3>
        </div>
        <button
          onClick={() => {
            nextNumber()
          }}
        >
          {currentNumber}
        </button>
      </div>
    </StyledMain>
  )
}

export default Main
