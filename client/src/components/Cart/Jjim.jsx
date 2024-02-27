// import { useState, useEffect } from "react";
// import "./Cart.css"
// import clearCart from "./images/clearJjim.png";

// const Jjim = ({ closeJjim }) => {
//     const [jjimItems, setJjimItems] = useState([
//         { id: 1, name: '상품1', price: 1000, quantity: 2, selected: false },
//         { id: 2, name: '상품2', price: 2000, quantity: 1, selected: false },
//     ]);

//     useEffect(() => {
//         handleSelectAll(true);
//     }, []);

//     const handleSelectAll = (isChecked) => {
//         const updatedJjim = jjimItems.map(item => ({ ...item, selected: isChecked }));
//         setJjimItems(updatedJjim);
//     };

//     const handleSelectItem = (itemId) => {
//         const updatedJjim = jjimItems.map(item =>
//             item.id === itemId ? { ...item, selected: !item.selected } : item);
//         setJjimItems(updatedJjim);
//     };

//     const handleRemoveSelected = () => {
//         const updatedJjim = jjimItems.filter(item => !item.selected);
//         setJjimItems(updatedJjim);
//     };

//     const handleCloseJjim = () => {
//         closeJjim();
//     };

//     return (
//         <div>
//             <button className="closeBtn" onClick={handleCloseJjim}>X</button>
//             {jjimItems.length > 0 && (
//                 <>
//                     <label className="label">
//                         <input
//                             type="checkbox"
//                             checked={jjimItems.every(item => item.selected)}
//                             onChange={(e) => handleSelectAll(e.target.checked)}
//                         />
//                         &nbsp;&nbsp;전체 선택
//                     </label>
//                     <button onClick={handleRemoveSelected}
//                         className="allDelete"><span className="x">X</span>   선택 삭제</button>
//                     <hr />
//                     <ul>
//                         {jjimItems.map(item => (
//                             <li key={item.id}>
//                                 <input
//                                     type="checkbox"
//                                     checked={item.selected}
//                                     onChange={() => handleSelectItem(item.id)}
//                                 />
//                                 {item.id} - 가격 : {item.price} 원
//                             </li>
//                         ))}
//                     </ul>

//                     <hr />
//                 </>
//             )}
//             {jjimItems.length === 0 && <p className="clearCart"><img src={clearCart}/></p>}
//         </div>


//     )
// }
// export default Jjim;


import { useState, useEffect } from "react";
import "./Cart.css"
import clearCart from "./images/clearJjim.png";
import axiosInstance from "../../utils/axios";
import { AiOutlineDelete } from "react-icons/ai";


const Jjim = ({ closeJjim }) => {
    let userId = ""; // 기본값으로 빈 문자열 설정

    const userIdCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("userId"));
    if (userIdCookie) {
      userId = userIdCookie.split("=")[1];
    } else {
      console.log("userId 쿠키가 없습니다.");
      // 여기서 쿠키가 없는 경우에 대한 처리를 추가합니다.
      // 예를 들어, 로그인 페이지로 리디렉션하거나 기본값으로 설정할 수 있습니다.
      // userId = '기본값';
    }
  
    console.log("userId:", userId);

    const [wishList, setWishList] = useState([]);

    useEffect(() => {
        getWishList(userId);
    }, []);

    const getWishList = async (userId) => {
        try{
            const res = await axiosInstance.get(`/wishList/${userId}`)
            console.log(res.data)
            // setWishList(res.data)
            if (Array.isArray(res.data.data)) {
                const wishListItemsWithProductInfo = await Promise.all(
                  res.data.data.map(async (wishListItem) => {
                    // 각 장바구니 아이템의 상품 ID를 이용하여 해당 상품 정보를 가져옵니다.
                    const productRes = await axiosInstance.get(
                      `/product/${wishListItem.productId}`
                    );
                    const productInfo = productRes.data.data;
                    console.log(productInfo);
                    // 상품 정보와 장바구니 아이템 정보를 합칩니다.
                    return {
                      ...wishListItem,
                      productName: productInfo.name,
                      productPrice: productInfo.price,
                      productImage: productInfo.image1,
                    };
                  })
                );
                setWishList(wishListItemsWithProductInfo);
                console.log(setWishList);
            } else {
                console.error("Invalid response format:", res.data);
            }
        } catch (error) {
            console.error(error);
        }
    };


    const handleRemoveItem = async (wishListId) => {
        try {
          // 서버로 카트 아이템 ID를 전송하여 삭제합니다.
          await axiosInstance.get(`/wishList/deleteWishList/${wishListId}`);
    
          // 서버로부터 데이터베이스에서 업데이트된 장바구니 정보를 다시 가져옵니다.
          getWishList(userId);
        } catch (error) {
          console.error("Error removing item from cart:", error);
          // 에러 처리를 원하는 대로 수행합니다.
        }
      };


    const handleCloseJjim = () => {
        closeJjim();
    };

    return (
        <div>
            <button className="closeBtn" onClick={handleCloseJjim}>X</button>
            {wishList.length > 0 && (
                <>
                    <table>
                        {wishList.map((item) => (
                            <tbody key={item.wishListId}>
                                <tr>
                                    <td>
                                        <img src={`http://localhost:5000/${item.productImage}`} alt={item.productName} />
                                    </td>
                                    <td>{item.productName}</td>
                                    <td>{item.productPrice}원</td>
                                    <td><button onClick={() => handleRemoveItem(item.wishListId)}><AiOutlineDelete size={25} /></button></td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </>
            )}
            {wishList.length === 0 && <p className="clearCart"><img src={clearCart}/></p>}
        </div>


    )
}
export default Jjim;