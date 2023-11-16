import { Client, Databases, ID, Query } from 'appwrite'
const client = new Client()

const PROJECT_ID = '64f4369eb8912a6cd2d1'
const COLLECTION_ID = '65536cad9721a4207472'
const DATABASE_ID = '65535d0e4a812c30c435'

const databases = new Databases(client)
client.setEndpoint('https://cloud.appwrite.io/v1').setProject(PROJECT_ID)

export const instructions = {
	async getAllList() {
		const p = await databases.listDocuments(DATABASE_ID, COLLECTION_ID)
		console.log(p)
	},
	async createUser(x: string) {
		const uni = ID.unique()
		console.log(uni)

		const db = await databases.createDocument(DATABASE_ID, COLLECTION_ID, uni, {
			uid: x,
		})
		console.log(db, 'on create')
	},
}
