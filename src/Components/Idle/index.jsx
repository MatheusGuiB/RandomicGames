import { StyledIdle } from './style'
import Monster from '../Monster'
import sword from '../../assets/espada.png'
import { BsCashCoin } from 'react-icons/bs'
import { GiBroadsword, GiBouncingSword } from 'react-icons/gi'
import { useEffect, useState } from 'react'

const Idle = () => {
  const [visualLife, setVisualLife] = useState(100)
  const [damage, setDamage] = useState(1)
  const [life, setLife] = useState(10)
  const [money, setMoney] = useState(0)
  const [crit, setCrit] = useState(0)
  const [damageValue, setDamageValue] = useState(1)
  const [damagePrice, setDamagePrice] = useState(5)
  const [critPrice, setCritPrice] = useState(5)

  const attack = () => {
    if (life > 0) {
      const isCritical = Math.random() < crit / 100

      if (isCritical) {
        setLife(life - damage * 2)
        setVisualLife(visualLife - 20)
      } else {
        setLife(life - damage)
        setVisualLife(visualLife - 10)
      }
    }
  }

  const buyDamage = () => {
    if (money >= damagePrice) {
      setDamage(damage + damageValue)
      setDamagePrice(damagePrice * 2)
      setDamageValue(damageValue * 2)
      setMoney(money - damagePrice)
    } else window.alert('insufient money')
  }

  const buyCritChance = () => {
    if (money >= critPrice) {
      setCrit(crit + 2)
      setCritPrice(critPrice * 2)
      setMoney(money - critPrice)
    } else window.alert('insufient money')
  }

  useEffect(() => {
    if (life <= 0) {
      setLife(damage * 10)
      setMoney(money + damage * 8)
      setVisualLife(100)
    }
  }, [life])

  return (
    <StyledIdle>
      <div className="container">
        <div className="boss">
          <div className="life-bar">
            <h1>Life: {life}</h1>
            <span
              className="bar life-bar"
              style={{ width: `${visualLife}%` }}
            ></span>
          </div>
          <Monster />
        </div>
        <div className="content">
          <div className="shop">
            <h1>Shop</h1>
            <div className="damage">
              <GiBroadsword className="icon" />
              <button onClick={buyDamage}> +{damageValue} Damage</button>
              <p>{damagePrice}</p>
              <BsCashCoin className="cash" />
            </div>
            {crit < 100 ? (
              <div className="crit">
                <GiBouncingSword className="icon" />
                <button onClick={buyCritChance}> +2 Crit.Chance</button>
                <p>{critPrice}</p>
                <BsCashCoin className="cash" />
              </div>
            ) : (
              <h2>100% Crit.Chance</h2>
            )}
          </div>
          <div className="hero">
            <h1>Hero</h1>
            <h2>Sword's Dmg: {damage}</h2>
            <h4>Crit Chance: {crit}%</h4>
            <img src={sword} alt="" className="sword" onClick={attack} />
          </div>
          <div className="money">
            <h1>Money: {money}</h1>
          </div>
        </div>
      </div>
    </StyledIdle>
  )
}

export default Idle
