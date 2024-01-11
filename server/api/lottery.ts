import { instructions, type UserRelationship } from './../../utils/appwrite'
import { nanoid } from 'nanoid'
import { useDecrypt, useEncrypt } from '../../composables/useCiphertext'
import { getIntegral } from '~/utils/calculate'

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

const map = [2, 3, 0, 1, 2, 3, 0, 1]

export default defineEventHandler(async (event) => {
	const { identifier, user } = await readBody(event)
	if (!identifier) {
		throw createError({
			statusCode: 400,
			statusMessage: 'ID should be a valid value',
		})
	}
	const outcome = useDecrypt(identifier)
	const value = getRandomInt()
	console.log(user, '--', outcome, ':--get', value)
	const data = { gift: 3 }
	// const data: UserRelationship = { gift: value, uptime: new Date() }
	// const level = map[value]
	// if (level === 3 || level === 2) {
	// 	data.code = nanoid()
	// } else if (level === 1) {
	// 	data.integral = getIntegral(100)
	// }
	return useEncrypt(JSON.stringify(await instructions.updateDocument(user, data)))
})
