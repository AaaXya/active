import { nanoid } from 'nanoid'
function getRandomInt(max: number) {
    return Math.floor(Math.random() * max)
}
// Expected output: a number from 0 to <1

export default defineEventHandler((event) => {
    const value = getRandomInt(8)
    return value
        ? {
              prize: value,
              code: nanoid(15),
          }
        : { prize: value }
})
