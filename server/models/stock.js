// const Sequelize = require('sequelize');

// module.exports = class Stock extends Sequelize.Model {
//     static init(sequelize){
//         return super.init({
//             stockId: {
//                 type: Sequelize.INTEGER,
//                 allowNull: false,
//                 primaryKey: true,
//                 autoIncrement: true
//             },
//             stock: {
//                 type: Sequelize.INTEGER,
//                 allowNull: false
//             },
//             sales: {
//                 type: Sequelize.INTEGER,
//                 allowNull: false,
//                 defaultValue: 0
//             }
//         }, {
//             sequelize,
//             timestamps: false,
//             underscored: false,
//             modelName: 'Stock',
//             tableName: 'stock',
//             paranoid: false,
//             charset: 'utf8mb4',
//             collate: 'utf8mb4_general_ci',
//         })
//     }

//     static associate(db){
//         db.Stock.belongsTo(db.Product,  { foreignKey: 'productId', targetKey: 'productId' });
//     }
// }