const Sequelize = require('sequelize')

const db = new Sequelize({
    database: 'quickAFM_db',
    dialect: 'postgres'
})

const User = db.define('user', {
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        }
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})

const Group = db.define('group', {
    name: Sequelize.STRING(28)
})

const Board = db.define('board', {
    name: Sequelize.STRING(28)
})

const Card = db.define('card', {
    text: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

User.belongsToMany(Group, {through: 'user_group_xref',
                            foreignKey: 'userId' })
Group.belongsToMany(User, {through: 'user_group_xref',
                            foreignKey: 'groupId' })

Group.hasMany(Board)
Board.belongsTo(Group)

Board.hasMany(Card)
Card.belongsTo(Board)

module.exports = {db, User, Group, Board, Card}