import './app.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from './List';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route index element={<List />} />
                    {/* <Route path='about' element={<AboutPage />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
