import "./App.css";
import React, { useState } from "react";
// import /*some component*/ from './components/(the_component_filename)';

function App() {
    const [newItem, setNewItem] = useState("");
    const [items, setItems] = useState([]);

    const submitEvent = (e) => {
        e.preventDefault();

        // from check video-- good idea at 33'30" to prevent empty items!
        if (newItem.length === 0) {
            return;
        }

        const singleItem = {
            info: newItem,
            completed: false,
        };

        setItems([...items, singleItem]);
        // setItems([...items, newItem]);
        setNewItem("");
    };

    const removeEvent = (killItem) => {
        const filteredItems = items.filter((item, index) => {
            return index !== killItem;
        });
        setItems(filteredItems);
    };

    const markComplete = (passedIndex) => {
        const relistedItems = items.map((item, index) => {
            if (passedIndex === index) {
                item.completed = !item.completed;
            }
            return item;
        });

        // setItems(relistedItems);

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
                            {" "}
                            {/*maybe shoulda done this as a table! */}
                            <div className="items_desc">
                                {item.info}
                                {/* {item} */}
                            </div>
                            <div className="items_chkbx">
                                {/* <input checked={ item.completed } type="checkbox" /> */}
                                <input checked={ item.completed } onClick={markComplete(index)} type="checkbox" />
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
