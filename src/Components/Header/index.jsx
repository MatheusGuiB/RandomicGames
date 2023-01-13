import React from 'react'
import { DivHeaderOut } from './style'
import { AiOutlineHeart } from 'react-icons/ai'
import { SlMagnifier } from 'react-icons/sl'

const Header = () => {
  return (
    <DivHeaderOut>
      <div className="div-header">
        <div>
          <SlMagnifier className="lupa" />
          <input
            type="text"
            name=""
            id=""
            placeholder="Pesquisar"
            className="top-search"
          />
        </div>
        <AiOutlineHeart className="top-heart" />
      </div>
    </DivHeaderOut>
  )
}

export default Header
