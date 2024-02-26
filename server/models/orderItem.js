const Sequelize = require('sequelize');

module.exports = class OrderItem extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            orderItemId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            price: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            totalPrice: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            amount: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            payment: {
                type: Sequelize.STRING(255),
                allowNull: false
            },
            orderStatus: {
                type: Sequelize.ENUM,
                values: ["결제완료", "배송중", "배송완료"],
                defaultValue: "결제완료"
            }
            }, {
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'OrderItem',
            tableName: 'orderItem',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        })
    }

    static associate(db){
        db.OrderItem.belongsTo(db.User,  { foreignKey: 'userId', targetKey: 'userId', onDelete: 'CASCADE' });   // cascade하지 않을 경우 삭제하면 userId 부분만 null로 바뀜
        db.OrderItem.belongsTo(db.Product,  { foreignKey: 'productId', targetKey: 'productId' });

    }
}