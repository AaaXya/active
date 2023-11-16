export default defineEventHandler((event) => {
	const { id } = getQuery(event)
	console.log('---------------------------------------')
	console.log(id)
	console.log('---------------------------------------')
	return 'oks'
})
