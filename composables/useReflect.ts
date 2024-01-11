// 0is no prize; 1 is collect; 2 is wine or water exchange; 3 is promotion
type Poptype = 0 | 1 | 2 | 3
type Item = { text: string; alert?: boolean; t: Poptype }
const map: Item[] = [
	{ text: '4元饮品劵', t: 0 },
	{ text: '消费满99抵扣15元券', t: 0 },
	{ text: '很遗憾您没有中奖', t: 0 },
	{ text: '积分奖励', t: 0 },
	{ text: '7元饮品劵', t: 0 },
	{ text: '满199减30', t: 0 },
	{ text: '很遗憾您没有中奖', t: 0 },
	{ text: '积分奖励', t: 0 },
]

export const useReflect = (n: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7) => {
	return reactive(map[n])
}
