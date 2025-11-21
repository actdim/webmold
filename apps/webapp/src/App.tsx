// import './_app.css';
import './global.css';
import './app.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Button from '@mui/material/Button';
import Mui from './mui/Mui';
import Prime from './prime/Prime';

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Mui />} />
                    <Route path='prime' element={<Prime />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
