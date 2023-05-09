import { NavLink } from 'react-router-dom'
import './Navigation.css'

function Navigation (): JSX.Element {
  return (
    <header className='navigation'>
      <div className='container navigation--container'>
        <nav className='navigation__nav'>
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
            <li>
              <NavLink
                to='/category/dogs' replace className={
                ({ isActive }) => isActive ? 'navigation__link is-active' : 'navigation__link'
              }
              >
                Perros
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navigation
