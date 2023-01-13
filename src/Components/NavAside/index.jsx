import React from 'react'
import logo from '../../assets/instagram.png'
import perfil from '../../assets/perfil.jpeg'
import { IoMdHome } from 'react-icons/io'
import { SlMagnifier } from 'react-icons/sl'
import { FiCompass } from 'react-icons/fi'
import { MdOutlineVideoLibrary } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { AiOutlineHeart } from 'react-icons/ai'
import { FiPlusSquare } from 'react-icons/fi'

import { AsideStyle } from './style'

const NavAside = () => {
  return (
    <AsideStyle>
      <img src={logo} alt="" className="logo" />

      <nav className="nav-bar">
        <ul className="li-bar">
          <li>
            <IoMdHome className="nav-icons" />
            <p>Página Inicial</p>
          </li>
          <li className="li-search">
            <SlMagnifier className="nav-icons" />
            <p>Pesquisa</p>
          </li>
          <li>
            <FiCompass className="nav-icons" />
            <p>Explorar</p>
          </li>
          <li>
            <MdOutlineVideoLibrary className="nav-icons" />
            <p>Reels</p>
          </li>
          <li>
            <RiMessengerLine className="nav-icons" />
            <p>Mensagens</p>
          </li>
          <li className="li-heart">
            <AiOutlineHeart className="nav-icons" />
            <p>Notificações</p>
          </li>
          <li>
            <FiPlusSquare className="nav-icons" />
            <p>Criar</p>
          </li>
          <li>
            <img src={perfil} alt="" className="nav-icons nav-img" />
            <p>Perfil</p>
          </li>
        </ul>
      </nav>
    </AsideStyle>
  )
}

export default NavAside
