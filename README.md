# backup

server/config/config.json

{
    "development": {
      "username": "아이디",
      "password": "비밀번호",
      "database": "스키마명",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "test": {
      "username": "아이디",
      "password": "비밀번호",
      "database": "스키마명",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "production": {
      "username": "아이디",
      "password": "비밀번호",
      "database": "스키마명",
      "host": "127.0.0.1",
      "dialect": "mysql"
    }
}
  

server/.env

PORT=5000 <br>
SECRET=secretKey

포트번호 변경 시 <br>
client/src/utils/axios.js 에서 baseURL 변경 <br>


client/src/components/Cart/cart.jsx <br>
client/src/components/Cart/Jjim.jsx <br>
client/src/components/Product/Product.jsx <br>
client/src/components/ProductDetail/Detail.jsx <br>
client/src/pages/Order/OrderList.jsx <br>
client/src/pages/Order/OrderList2.jsx <br>
에서 img src 변경


회원가입 로그인
<img src="https://github.com/hyun45/backup/assets/159392652/66520c10-1f65-466f-b370-3b9ef68d4637" />


관리자로 사용할 아이디 회원가입 후 MySQL에서 user 테이블의 해당 아이디 userType을 1로 변경 필요

상품 등록
<img src="https://github.com/hyun45/backup/assets/159392652/1000f860-1e1f-46ad-8a2e-97ab7c96cb89" />




