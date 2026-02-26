// import './_app.css';
// import './app.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TwRoot from './tw/tw';
import MuiRoot from './mui/mui';
import PrimeRoot from './prime/prime';
import List from './List';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route index element={<List />} />
                    <Route path='prime' element={<PrimeRoot />} />
                    <Route path='tw' element={<TwRoot />} />
                    <Route path='mui' element={<MuiRoot />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
