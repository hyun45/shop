// const Sequelize = require('sequelize');

// module.exports = class Address extends Sequelize.Model {
//     static init(sequelize){
//         return super.init({
//             addressId: {
//                 type: Sequelize.INTEGER,
//                 allowNull: false,
//                 primaryKey: true,
//                 autoIncrement: true
//             },
//             address1: {
//                 type: Sequelize.STRING(255),
//                 allowNull: true
//             },
//             address2: {
//                 type: Sequelize.STRING(255),
//                 allowNull: true
//             },
//             zipCode: {
//                 type: Sequelize.INTEGER,
//                 allowNull: true
//             }
//         }, {
//             sequelize,
//             timestamps: false,
//             underscored: false,
//             modelName: 'Address',
//             tableName: 'address',
//             paranoid: false,
//             charset: 'utf8mb4',
//             collate: 'utf8mb4_general_ci',
//         })
//     }

//     static associate(db){
//         db.Address.belongsTo(db.User,  { foreignKey: 'userId', targetKey: 'userId' });
//     }
// }