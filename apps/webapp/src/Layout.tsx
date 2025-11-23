// import viteLogo from "/vite.svg"; // src=...
import { Outlet } from 'react-router-dom';

export const Layout = (props: {}) => {
    return (
        <div className='min-h-screen flex flex-col justify-center'>
            <header>Menu/Header</header>
            <main className='flex-1'>
                <Outlet />
            </main>
            <footer>Footer</footer>
        </div>
    );
};

export default Layout;
