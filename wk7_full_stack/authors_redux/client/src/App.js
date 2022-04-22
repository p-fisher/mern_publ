import "./App.css";

// import Main from "./views/Main";
import DisplayAll from "./components/DisplayAll";
import AddAuthor from "./components/AddAuthor";
// import DisplayOne from "./components/DisplayOne";
import EditAuthor from "./components/EditAuthor";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<DisplayAll />} />
                    <Route path="/new" element={<AddAuthor />} />
                    <Route path="/author/edit/:id" element={<EditAuthor />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
