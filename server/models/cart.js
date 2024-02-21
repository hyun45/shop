// const Sequelize = require('sequelize');

// module.exports = class Cart extends Sequelize.Model {
//     static init(sequelize){
//         return super.init({
//             cartId: {
//                 type: Sequelize.INTEGER,
//                 allowNull: false,
//                 primaryKey: true,
//                 autoIncrement: true
//             }
//         }, {
//             sequelize,
//             timestamps: false,
//             underscored: false,
//             modelName: 'Cart',
//             tableName: 'cart',
//             paranoid: false,
//             charset: 'utf8mb4',
//             collate: 'utf8mb4_general_ci',
//         })
//     }

//     static associate(db){
//         db.Cart.belongsTo(db.User,  { foreignKey: 'userId', targetKey: 'userId' });
//     }
// }