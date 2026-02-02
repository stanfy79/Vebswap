import Swap from "./Swap.jsx";
import Home from './Home.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/swap" element={<Swap />} />
            <Route path="*" element={<Home />} />
        </Routes>
    </BrowserRouter>
);
export default App;