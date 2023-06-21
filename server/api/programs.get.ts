type UserItem = {
    code?: null | string
    cumulative?: number
}
type EnumsKeys = 'au' | 'ds' | 'ss' | 'xxx---ga'
let user = new Map<string, UserItem | null>()

function addUser(p: string) {
    user.set(p, { code: null })
    return p
}

function delStorage(p: string) {
    user.set(p, { code: null })
    return p
}
function setStorage(p: string, options: UserItem) {
    const storage = user.get(p)
    if (!storage) {
        user.set(p, options)
    } else {
        const { code, cumulative } = storage
        user.set(p, { code: code || null, cumulative: cumulative || 0 })
        console.log(user.get(p))
    }
    return p
}
function getAll() {
    return user
}
const enums = new Map<EnumsKeys, Function>([
    ['au', addUser],
    ['ds', delStorage],
    ['ss', setStorage],
    ['xxx---ga', getAll],
])
export default defineEventHandler((event) => {
    try {
        const { customer: uid } = parseCookies(event)
        if (!uid) return null
        const { dispose, options } = getQuery(event)

        const handleType = enums.get(dispose as EnumsKeys)
        if (handleType) return handleType(uid, options)
        return null
    } catch (err) {
        // Error handling
        return { err }
    }
})
