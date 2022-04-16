import "./App.css";
// got view from lesson file; read up on it
import Main from "./view/Main";
import OneProduct from "./components/OneProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                {/* Everything inside of our Router component needs a path */}
                <Routes>
                    {/* Now both components can display from the same path */}
                    <Route path="/" element={<Main />} />
                    {/* :id is a variable added to our path that needs a unique value. We can access and destructure it from props object */}
                    <Route path="/product/:id" element={<OneProduct />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
