import { nanoid } from 'nanoid'
import { useEncrypt } from '../../composables/useCiphertext'
import { type } from 'os'
function getRandomInt(max: number) {
	return Math.floor(Math.random() * max)
}
// Expected output: a number from 0 to <1
type Huge = 1
type Second = 2
type Inessential = 3
type UnReflect = 4
type Poptype = Huge | Second | Inessential | UnReflect
type Item = { text: string; alert: boolean; poptype: Poptype }
const map: [Item, Item, Item, Item, Item, Item, Item, Item] = [
	{ text: 'wine', alert: true, poptype: 1 },
	{ text: 'q', alert: true, poptype: 1 },
	{ text: 'none', alert: true, poptype: 2 },
	{ text: 'pak', alert: true, poptype: 3 },
	{ text: 'wine', alert: true, poptype: 1 },
	{ text: 'q', alert: true, poptype: 1 },
	{ text: 'none', alert: true, poptype: 2 },
	{ text: 'pak', alert: true, poptype: 3 },
]

export default defineEventHandler(async (event) => {
	const { identifier } = await readBody(event)
	console.log(identifier)

	if (!identifier) {
		throw createError({
			statusCode: 400,
			statusMessage: 'ID should be an integer',
		})
	}
	const value = getRandomInt(8)

	return map[value].poptype === 4
		? { integral: value }
		: {
				integral: value,
				code: useEncrypt(nanoid()) + identifier,
		  }
})
