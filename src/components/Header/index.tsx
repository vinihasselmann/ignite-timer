import { HeaderConteiner } from './styles'
import Logo from '../../assets/Logo.svg'
import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderConteiner>
      <img src={Logo} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={30} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={30} />
        </NavLink>
      </nav>
    </HeaderConteiner>
  )
}
