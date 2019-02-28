const { User, Group, Board, PostIt } = require('../models')

const seed = async () => {
    await User.truncate({cascade:true, restartIdentity: true})
    await Group.truncate({cascade:true, restartIdentity: true})
    await Board.truncate({cascade:true, restartIdentity: true})
    await PostIt.truncate({cascade:true, restartIdentity: true})

    const dan = await User.create({
        email: 'dan@kim.com',
        first_name: 'dan',
        last_name: 'kim',
        password: 'abc123'
    })

    const epi = await Group.create ({
        name: 'epi'
    })

    const phany = await Board.create({
        name: 'phany',
        groupId: 1
    })

    await dan.setGroups(epi)

    process.exit()
}

seed()