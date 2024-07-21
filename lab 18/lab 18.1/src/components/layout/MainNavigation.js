import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
    const setActive = ({ isActive }) =>
        isActive ? classes.active : '';

    return (
        <header className={classes.header}>
            <h1 className={classes.logo}>Great Quotes</h1>

            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink to={'/'} className={setActive}>All Quotes</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/new-quote'} className={setActive}>Add a Quote</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;