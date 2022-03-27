import "./App.css";
import React, { useState } from "react";
// import /*some component*/ from './components/(the_component_filename)';

function App() {
    const [newItem, setNewItem] = useState("");
    const [items, setItems] = useState([]);

    const submitEvent = (e) => {
        e.preventDefault();
        setItems([...items, newItem]);
        setNewItem("");
    };

    const removeEvent = (killItem) => {
        const filteredItems = items.filter((item, index) => {
            return index !== killItem;
        });
        setItems(filteredItems);
    };

    return (
        <div style={{ marginTop: "30px", textAlign: "center" }}>
            <h2>Add some to-do items...</h2>
            <form
                onSubmit={(e) => {
                    submitEvent(e);
                }}
            >
                <input
                    onChange={(e) => {
                        setNewItem(e.target.value);
                    }}
                    type="text"
                    value={newItem}
                />
                <div>
                    <button id="button_add" type="submit">
                        Add Item
                    </button>
                </div>
            </form>

            {/* ---------------------- DISPLAY LIST ------------------------------- */}
            <div className="items_list">
                <h2>Now, get crackin'!</h2>
                {items.map((item, index) => {
                    return (
                        <div className="items_row" key={index}>
                            <div className="items_desc" >
                                {item}
                            </div>
                            <div className="items_chkbx">
                                <input type="checkbox" />
                            </div>
                            <div className="items_del">
                                <a
                                    href="#"
                                    onClick={(e) => {
                                        removeEvent(index);
                                    }}
                                >
                                    Delete
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default App;
