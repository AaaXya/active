type UserItem = {
    code?: null | string
    cumulative?: number
}
type EnumsKeys = 'au' | 'ds' | 'ss' | 'xxx---ga'
import { nanoid } from 'nanoid'
let user = new Map<string, UserItem | null>()
const basic = { code: null, cumulative: 0 }
function addUser(p: string) {
    user.set(p, basic)
    return p
}
function analysisUserItem(x: string, options: UserItem) {
    if (!user.get(x)) return basic
    return Object.assign(user.get(x) as UserItem, options)
}
function delStorage(p: string) {
    user.set(p, analysisUserItem(p, { code: null }))
    return p
}
function setStorage(p: string, setv: UserItem) {
    user.set(p, analysisUserItem(p, setv))
    return p
}
function getAll() {
    return user
}
function generateActCode() {
    console.log(nanoid())
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
