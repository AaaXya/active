type Uid = string
let user = {}

function addUser(p) {
    user[p] = { code: null }
}

function delStorage(p) {
    user[p] = { code: null }
}
function setStorage(p) {
    user[p] = { code: '' }
}
function getAll() {
    return user
}
const enums = new Map([
    ['au', addUser],
    ['ds', delStorage],
    ['ss', setStorage],
    ['xxx---ga', getAll],
])
export default defineEventHandler((event) => {
    const { uid, dispose } = getQuery(event)

    const handleType = enums.get(dispose)
    if (handleType) return handleType(uid)
    return null
})