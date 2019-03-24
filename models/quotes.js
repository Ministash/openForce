module.exports = function (sequelize, DataTypes) {
    var Quotes = sequelize.define("Quotes", {
        text: {
            type: DataTypes.STRING
        },
        average: {
            type: DataTypes.INTEGER
        }
    });
    
    return Quotes;
};