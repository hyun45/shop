const Sequelize = require('sequelize');

module.exports = class Review extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            reviewId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            content: {
                type: Sequelize.TEXT,
                allowNull: true
            },
            rating: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            image1: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            image2: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            image3: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            image4: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            image5: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            showProduct: {
                type: Sequelize.BOOLEAN,
                defaultValue: true
            }
            }, {
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'Review',
            tableName: 'review',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        })
    }

    static associate(db){
        db.Review.belongsTo(db.User,  { foreignKey: 'userId', targetKey: 'userId' });
        db.Review.belongsTo(db.Product,  { foreignKey: 'productId', targetKey: 'productId' });
    }
}