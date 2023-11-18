export default async (id: string) => {
	const source = await instructions.getDocument(id)

	const { uid, uptime, integral, gift, code } = source

	console.log(uid, uptime, integral, gift, code)

	const totalTime = (new Date().getTime() - new Date(uptime).getTime()) / 1000
	console.log(totalTime)
	const day = totalTime / 86400
	console.log(day)
	const res = { message: 'ok', code, integral }
	if (day < 1) {
		res.message = 'notYetInTime'
	}
	if (code) {
		res.message = 'noExchange'
	}
	return reactive(res)
}
