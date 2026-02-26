import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function List() {
    return (
        <ul>
            <li>
                <Link to={'tw'}>Tailwind</Link>
            </li>
            <li>
                <Link to={'mui'}>MUI</Link>
            </li>
            <li>
                <Link to={'prime'}>Prime React</Link>
            </li>
        </ul>
    );
}

export default List;
