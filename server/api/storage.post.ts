type UserData = {
    id: string
    stor: string | null
    date?: string
}
let storage: object[] = []

export default defineEventHandler(async (event) => {
    // console.log(event)
    const body = await readBody(event)
    storage.push(body)
    console.log(storage)

    return { body }
})
