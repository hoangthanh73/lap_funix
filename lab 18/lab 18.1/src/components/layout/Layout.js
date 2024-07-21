import { Outlet } from 'react-router-dom';

import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';

const Layout = () => {
    return (
        <>
            <MainNavigation />
            <div className={classes.main}>
                <Outlet />
            </div>
        </>
    )
}

export default Layout;