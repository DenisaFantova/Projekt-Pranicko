import React from 'react'
import {NavLink} from 'react-router-dom';

const Menu = () => {
    return (
        <nav className="menu">
            <NavLink to="/" className={({isActive}) => isActive ? "menu__link menu__link--active" : "menu__link"}>Úvod</NavLink>
            <NavLink to="/vytvorit-pranicko" className={({isActive}) => isActive ? "menu__link menu__link--active" : "menu__link"}>Vytvořit přáníčko</NavLink>
            <NavLink to="/vyzvednout" className={({isActive}) => isActive ? "menu__link menu__link--active" : "menu__link"}>Vyzvednout</NavLink>
		</nav>
    )
}

export default Menu
