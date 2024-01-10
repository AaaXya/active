import { instructions, type UserRelationship } from './../../utils/appwrite'
import { nanoid } from 'nanoid'
import { useDecrypt, useEncrypt } from '../../composables/useCiphertext'

function getIntegral(max: number) {
	return Math.floor(Math.random() * max)
}
// Expected output: a number from 0 to <1

function getRandomInt() {
	let res = getIntegral(2) * 4
	const v = getIntegral(20)
	if (v === 19) {
		res += 1
	} else if (v > 16) {
		res += 0
	} else if (v > 12) {
		res += 3
	} else {
		res += 2
	}
	return res
}

// 0is no prize; 1 is collect; 2 is wine or water exchange; 3 is promotion
type Poptype = 0 | 1 | 2 | 3
type Item = { text: string; alert: boolean; poptype: Poptype }
const origin: Item[] = [
	{ text: 'wine', alert: true, poptype: 2 },
	{ text: 'q', alert: true, poptype: 3 },
	{ text: 'none', alert: true, poptype: 0 },
	{ text: 'pak', alert: true, poptype: 1 },
]
const map = [...origin, ...origin]

export default defineEventHandler(async (event) => {
	const { identifier, user } = await readBody(event)
	if (!identifier) {
		throw createError({
			statusCode: 400,
			statusMessage: 'ID should be a valid value',
		})
	}
	const outcome = useDecrypt(identifier)
	console.log(outcome)
	const value = getRandomInt()

	const data: UserRelationship = { gift: value, uptime: new Date() }
	const level = map[value].poptype
	if (level === 3 || level === 2) {
		data.code = nanoid()
	} else if (level === 1) {
		data.integral = getIntegral(100)
	}
	return useEncrypt(JSON.stringify(await instructions.updateDocument(user, data)))
})
