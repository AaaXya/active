export default async (id: string) => {
	const { uid, uptime, integral, gift, code } = await instructions.getDocument(id)

	console.log(uptime, integral, gift, code)
	const time1 = new Date()
	const time2 = new Date(uptime)
	const totalTime = (time1.getTime() - time2.getTime()) / 1000
	const day = totalTime / 86400
	console.log(day)
	const res = { message: 'ok', code, integral }
	if (time1.getDate() === time2.getDate() || day < 1) {
		res.message = 'notYetInTime'
	}
	if (code) {
		res.message = 'noExchange'
	}
	return reactive(res)
}
