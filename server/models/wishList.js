const Sequelize = require('sequelize');

module.exports = class WishList extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            wishListId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            }
            }, {
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'WishList',
            tableName: 'wishList',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        })
    }

    static associate(db){
        db.WishList.belongsTo(db.User,  { foreignKey: 'userId', targetKey: 'userId' });
        db.WishList.belongsTo(db.Product,  { foreignKey: 'productId', targetKey: 'productId' });
    }
}