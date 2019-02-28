const { db } = require('../models')

const reset = async () => {
    try {
        await db.sync({force: true})
        console.log('db reset complete')
    } catch(err) {
        console.error(err.message)
    }
    process.exit()
}

reset()