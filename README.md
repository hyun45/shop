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

PORT=5000
SECRET=secretKey

포트번호 변경 시
client/src/utils/axios.js 에서 baseURL 변경


client/src/components/Cart/cart.jsx
client/src/components/Cart/Jjim.jsx
client/src/components/Product/Product.jsx
client/src/components/ProductDetail/Detail.jsx
client/src/pages/Order/OrderList.jsx
client/src/pages/Order/OrderList2.jsx
에서
img src 변경








관리자로 사용할 아이디 회원가입 후 MySQL에서 user 테이블의 해당 아이디 userType을 1로 변경 필요