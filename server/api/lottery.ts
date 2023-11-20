import { nanoid } from 'nanoid'
import { useEncrypt } from '../../composables/useCiphertext'
function getRandomInt(max: number) {
	return Math.floor(Math.random() * max)
}
// Expected output: a number from 0 to <1
type Item = { text: string; alert: boolean; poptype: number }
const map: [Item, Item, Item, Item, Item, Item, Item, Item] = [
	{ text: 'wine', alert: true, poptype: 1 },
	{ text: 'q', alert: true, poptype: 1 },
	{ text: 'none', alert: true, poptype: 2 },
	{ text: 'pak', alert: true, poptype: 1 },
	{ text: 'wine', alert: true, poptype: 1 },
	{ text: 'q', alert: true, poptype: 1 },
	{ text: 'none', alert: true, poptype: 2 },
	{ text: 'pak', alert: true, poptype: 1 },
]

export default defineEventHandler(async (event) => {
	const { identifier } = await readBody(event)
	console.log(identifier)

	// if (!Number.isInteger(identifier)) {
	// 	throw createError({
	// 	  statusCode: 400,
	// 	  statusMessage: 'ID should be an integer',
	// 	})
	//   }
	const value = getRandomInt(8)
	console.log()
	useEncrypt(nanoid())
	return value
		? {
				prize: value,
				code: nanoid(),
		  }
		: { prize: value }
})
