import { instructions, type UserRelationship } from './../../utils/appwrite'
import { nanoid } from 'nanoid'
import { useDecrypt, useEncrypt } from '../../composables/useCiphertext'

function getRandomInt(max: number) {
	return Math.floor(Math.random() * max)
}
function getIntegral(max: number) {
	return Math.floor(Math.random() * max)
}
// Expected output: a number from 0 to <1
type Huge = 1
type Second = 2
type Inessential = 3
type UnReflect = 4
type Poptype = Huge | Second | Inessential | UnReflect
type Item = { text: string; alert: boolean; poptype: Poptype }
const map: Item[] = [
	{ text: 'wine', alert: true, poptype: 2 },
	{ text: 'q', alert: true, poptype: 1 },
	{ text: 'none', alert: true, poptype: 4 },
	{ text: 'pak', alert: true, poptype: 3 },
	{ text: 'wine', alert: true, poptype: 2 },
	{ text: 'q', alert: true, poptype: 1 },
	{ text: 'none', alert: true, poptype: 4 },
	{ text: 'pak', alert: true, poptype: 3 },
]

export default defineEventHandler(async (event) => {
	const { identifier, user } = await readBody(event)

	if (!identifier) {
		throw createError({
			statusCode: 400,
			statusMessage: 'ID should be an integer',
		})
	}
	const outcome = useDecrypt(identifier)
	console.log(outcome)
	const value = getRandomInt(8)

	const data: UserRelationship = { gift: value, uptime: new Date() }
	const level = map[value].poptype
	if (level === 1 || level === 2) {
		data.code = nanoid()
	} else if (level === 3) {
		data.integral = getIntegral(100)
	} else {
	}
	return useEncrypt(JSON.stringify(await instructions.updateDocument(user, data)))
})
