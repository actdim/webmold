// import viteLogo from "/vite.svg"; // src=...
import { Outlet } from 'react-router-dom';

export const Layout = (props: {}) => {
    return (
        <>
            <header>Menu/Header</header>
            <main>
                <Outlet />
            </main>
            <footer>Footer</footer>
        </>
    );
};

export default Layout;
