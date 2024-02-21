// const Sequelize = require('sequelize');

// module.exports = class Category extends Sequelize.Model {
//     static init(sequelize){
//         return super.init({
//             categoryId: {
//                 type: Sequelize.INTEGER,
//                 allowNull: false,
//                 primaryKey: true,
//                 autoIncrement: true
//             },
//             name: {
//                 type: Sequelize.STRING(255),
//                 allowNull: false
//             }
//         }, {
//             sequelize,
//             timestamps: false,
//             underscored: false,
//             modelName: 'Category',
//             tableName: 'category',
//             paranoid: false,
//             charset: 'utf8mb4',
//             collate: 'utf8mb4_general_ci',
//         })
//     }

//     static associate(db){
//         db.Category.hasMany(db.Category,  { foreignKey: 'parentCategoryId', targetKey: 'categoryId' });
//     }
// }