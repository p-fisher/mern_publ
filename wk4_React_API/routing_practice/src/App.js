import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useParams } from "react-router";

const Home = (props) => {
    return (
        <div>
            <p>Welcome</p>
        </div>
    );
};

const Input = (props) => {
    const { input } = useParams();
    if (isNaN(input)) {
        return (
            <div>
                <p>The word is: {input}</p>
            </div>
        );
    } else {
        return (
            <div>
                <p>The number is: {input}</p>
            </div>
        );
    }
};

const ExtraInput = (props) => {
    const { inputCo } = useParams();
    const { textCo } = useParams();
    const { bgndCo } = useParams();

    if (isNaN(inputCo)) {
        return (
            <div style={{color: textCo, backgroundColor: bgndCo }}>
                <p>
                    The word is: {inputCo}
                </p>
            </div>
        );
    } else {
        return (
            <div style={{ color: textCo, backgroundColor: bgndCo }}>
                <p>
                    The number is: {inputCo}
                </p>
            </div>
        );
    }
};


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/:input" element={<Input />} />
                    <Route path="/:inputCo/:textCo/:bgndCo" element={<ExtraInput />}
                    />
                    {/* <Route path="/hello" element={<Input />}/> */}
                    {/* <Route path="/:num" element={<Num />}/> */}
                    {/* <Route path="/:text" element={<Text />}/> */}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
