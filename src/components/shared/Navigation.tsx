import { NavLink } from 'react-router-dom'
import './Navigation.css'

function Navigation (): JSX.Element {
  return (
    <header className='navigation'>
      <nav className='navigation__nav container'>
        <span className='navigation__logo'>Logo</span>
        <ul className='navigation__menu'>
          <li>
            <NavLink
              to='/' replace className={
                ({ isActive }) => isActive ? 'navigation__link is-active' : 'navigation__link'
              }
            >
              Inicio
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to='/category/dogs' replace className={
                ({ isActive }) => isActive ? 'navigation__link is-active' : 'navigation__link'
              }
            >
              Perros
            </NavLink>
          </li> */}
        </ul>
      </nav>
    </header>
  )
}

export default Navigation
