import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowAnime  from "./ShowAnime";
import AddAnime from "./AddAnime";
import AppBar from "./Components/AppBar";
function App() {
    return (
        <>
            <Router>
                <AppBar/>
                <Routes>
                    <Route path="/list" element={<ShowAnime />} />
                    <Route path="/" element={<AddAnime />} />
                </Routes>
            </Router>
        </>
    )
}

export default App