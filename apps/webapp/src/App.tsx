// import './_app.css';
// import './app.css';
import { BrowserRouter, HashRouter, Route, Router, Routes } from 'react-router-dom';
import Layout from './Layout';
import TwRoot from './tw/tw';
// import MuiRoot from './mui/mui';
// import PrimeRoot from './prime/prime';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<TwRoot />} />
                    {/* <Route path='prime' element={<PrimeRoot />} />
                    <Route path='tw' element={<TwRoot />} />
                    <Route path='mui' element={<MuiRoot />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
