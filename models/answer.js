module.exports = function (sequelize, DataTypes) {
    var Answers = sequelize.define("Answers", {
        answers: {
            type: DataTypes.TEXT
        },
        belongText: {
            type: DataTypes.STRING
        }
    });
    
    return Answers;
};