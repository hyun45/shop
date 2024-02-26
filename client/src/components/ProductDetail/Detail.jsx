import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import jjimBtn from "./images/jjimBtn.png";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Detail.css';
import axiosInstance from "../../utils/axios";

const Detail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();


  useEffect(() => {
    getProduct(productId);
  }, [productId]);

  const getProduct = async (productId) => {
    try {
      const res = await axiosInstance.get(`/product/${productId}`);
      setProduct(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handeleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = async () => {
    try {
      const res = await axiosInstance.post('/cart/addCart', {
        productId,
        amount: quantity
      });
      console.log(res.data);
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  const handleBuyNow = () => {
    // 상품 정보와 수량을 가지고 페이지 이동
    const orderData = {
      productId: product.productId,
      quantity: quantity,
      productImage: product.image1,
      productName: product.name,
      productPrice: product.price,
      totalPrice: (product.price * quantity)
    };
    console.log(orderData)
    navigate(
      '/orderList2',{
      state: { orderData: orderData }
    });
  };


  return (
    <div>
      <Header />
      {product ? (
        <>
          <div className="detail">
            <table className="detailContainer">
              <tbody>
                <tr className="productImage">
                  <td>
                        <div className="productDetail_img">
                          <img src={`http://localhost:5000/${product.image1}`} alt={product.name} />
                        </div>
                  </td>
                </tr>
                <tr className="productInfo">
                  <td className="productInfoHeader">
                    <p>{product.name}</p>
                    <button className="jjimBtn"><img src={jjimBtn} alt="jjimBtn" /></button>
                  </td>
                  <td className="starReview">
                    <span>★★★★☆</span>
                    <button>xxx개 리뷰 보기</button>
                  </td>
                  <td className="detailPrice">
                    <span className="greenPrice">상품 금액</span><p>{product.price}</p><span>원</span>
                  </td>
                  <td className="quantity">
                    <button onClick={handeleDecreaseQuantity}>-</button>
                    <span>{quantity}</span>
                    <button onClick={handleIncreaseQuantity}>+</button>
                  </td>
                  <button className="addCart" onClick={handleAddToCart}>장바구니</button>
                  <a href="/orderList2"><button className="buyNow" onClick={handleBuyNow}>바로 구매</button></a>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Detail;