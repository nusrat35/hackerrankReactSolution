import { useState } from "react";

export const ItemListManager = () => {
    const [input, setInput] = useState("");
    const [items, setItems] = useState([]);

    const myStyle = {
        padding: "10px",
        border: "1px solid green",
    }

    const handleAddItem = () => {
        input && setItems((prevItems) => [...prevItems, input])
        setInput("");
    }
    return (
        <div style={myStyle}>
            <h2 style={{ textAlign: "center" }}>Problem Name: Item List Manager</h2>
            <input
                type="text"
                placeholder="Enter Item"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                data-testid="input-field"
            />
            <button onClick={handleAddItem}>Add Item</button>
            <ul data-testid="item-list">
                {items.map((item, index) => (
                    <li key={index} data-testid="list-item">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}