import { Client, Databases, ID, Query } from 'appwrite'
const client = new Client()

const PROJECT_ID = '64f4369eb8912a6cd2d1'
const DATABASE_ID = '65535d0e4a812c30c435'
const COLLECTION_ID = '65536cad9721a4207472'

const DB: [string, string] = [DATABASE_ID, COLLECTION_ID]

const databases = new Databases(client)
client.setEndpoint('https://cloud.appwrite.io/v1').setProject(PROJECT_ID)

export const instructions = {
	async getAllList() {
		const p = await databases.listDocuments(...DB)
		console.log(p)
	},
	async createUser(x: string, t: Date) {
		const uni = ID.unique()
		console.log(uni)

		const db = await databases.createDocument(...DB, uni, {
			uid: x,
			update: t,
		})
		console.log(db, 'on create')
	},
	async querList(user: string) {
		const p = await databases.listDocuments(...DB, [Query.equal('uid', user)])
		console.log(p)
	},
	// async findDate(integral: number) {
	// 	const p = await databases.listDocuments(...DB, [Query.equal('uptime', integral)])
	// 	console.log(p)
	// 	console.log('I am Integral')
	// },
	async findFixed(integral: number) {
		const p = await databases.listDocuments(...DB, [Query.equal('integral', integral)])
		console.log(p.total)
	},
}
