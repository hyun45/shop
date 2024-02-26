const Sequelize = require('sequelize');

module.exports = class CartItem extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            cartItemId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            amount: {
                type: Sequelize.INTEGER,
                allowNull: false
            }
            }, {
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'CartItem',
            tableName: 'cartItem',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        })
    }

    static associate(db){
        db.CartItem.belongsTo(db.User,  { foreignKey: 'userId', targetKey: 'userId', onDelete: 'CASCADE' });
        db.CartItem.belongsTo(db.Product,  { foreignKey: 'productId', targetKey: 'productId' });
        // db.CartItem.belongsTo(db.Cart,  { foreignKey: 'cartId', targetKey: 'cartId' });
    }
}

// name name
// price price