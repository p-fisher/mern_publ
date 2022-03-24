import "./App.css";
import Form from "./components/BoxForm";
import Display from "./components/BoxDisplay";

function App() {
    return (
        <div>
            <div className="App">
                <Form />
            </div>
            <div className="App">
                <Display />
            </div>
        </div>
    );
}

export default App;
