type Score = 'A' | 'S' | 'D' | 'F' | 'G' | 'H' | 'J' | 'K' | 'L'
type Prizes = { title: Score; time: string; code?: string }
const prize: Prizes = []
const startAt = Date.now()
export default defineEventHandler((event) => {
    return 'Hello prize'
})
