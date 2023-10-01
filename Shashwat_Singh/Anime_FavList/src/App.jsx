import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowAnime from "./ShowAnime";
import AddAnime from "./AddAnime";
function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/list" element={<ShowAnime/>} />
                    <Route path="/" element={<AddAnime />} />
                </Routes>
            </Router>
        </>
    )
}

export default App