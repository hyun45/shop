import { useState, useEffect } from "react";
import "./Cart.css"
import clearCart from "./images/clearJjim.png";

const Jjim = ({ closeJjim }) => {
    const [jjimItems, setJjimItems] = useState([
        { id: 1, name: '상품1', price: 1000, quantity: 2, selected: false },
        { id: 2, name: '상품2', price: 2000, quantity: 1, selected: false },
    ]);

    useEffect(() => {
        handleSelectAll(true);
    }, []);

    const handleSelectAll = (isChecked) => {
        const updatedJjim = jjimItems.map(item => ({ ...item, selected: isChecked }));
        setJjimItems(updatedJjim);
    };

    const handleSelectItem = (itemId) => {
        const updatedJjim = jjimItems.map(item =>
            item.id === itemId ? { ...item, selected: !item.selected } : item);
        setJjimItems(updatedJjim);
    };

    const handleRemoveSelected = () => {
        const updatedJjim = jjimItems.filter(item => !item.selected);
        setJjimItems(updatedJjim);
    };

    const handleCloseJjim = () => {
        closeJjim();
    };

    return (
        <div>
            <button className="closeBtn" onClick={handleCloseJjim}>X</button>
            {jjimItems.length > 0 && (
                <>
                    <label className="label">
                        <input
                            type="checkbox"
                            checked={jjimItems.every(item => item.selected)}
                            onChange={(e) => handleSelectAll(e.target.checked)}
                        />
                        &nbsp;&nbsp;전체 선택
                    </label>
                    <button onClick={handleRemoveSelected}
                        className="allDelete"><span className="x">X</span>   선택 삭제</button>
                    <hr />
                    <ul>
                        {jjimItems.map(item => (
                            <li key={item.id}>
                                <input
                                    type="checkbox"
                                    checked={item.selected}
                                    onChange={() => handleSelectItem(item.id)}
                                />
                                {item.id} - 가격 : {item.price} 원
                            </li>
                        ))}
                    </ul>

                    <hr />
                </>
            )}
            {jjimItems.length === 0 && <p className="clearCart"><img src={clearCart}/></p>}
        </div>


    )
}
export default Jjim;