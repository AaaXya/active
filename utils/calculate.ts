export function getIntegral(max: number) {
	return Math.floor(Math.random() * max)
}
export function getRandomRotate(min: number, max: number) {
	return Math.floor(Math.random() * (max - min) + min) / 1000
}
// Expected output: a number from 0 to <1
