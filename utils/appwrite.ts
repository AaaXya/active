import { Client, Databases, ID, Query } from 'appwrite'
const client = new Client()

const PROJECT_ID = '64f4369eb8912a6cd2d1'
const DATABASE_ID = '65535d0e4a812c30c435'
const COLLECTION_ID = '65536cad9721a4207472'

const DB: [string, string] = [DATABASE_ID, COLLECTION_ID]

const databases = new Databases(client)
client.setEndpoint('https://cloud.appwrite.io/v1').setProject(PROJECT_ID)

type Attribute = 'uid' | 'uptime' | 'integral' | 'gift' | 'code'
export type UserRelationship = {
	[key in Attribute]?: any
}
export const instructions = {
	async getAllList() {
		const p = await databases.listDocuments(...DB)
		console.log(p)
	},
	async createUser(x: string) {
		const uni = ID.unique()
		console.log(uni)
		const user: Partial<UserRelationship> = {
			uid: x,
			// uptime: new Date(),
		}
		const db = await databases.createDocument(...DB, uni, user)
		console.log(db, 'on create')
		return db.$id
	},
	async getDocument(doc_id: string) {
		const doc = await databases.getDocument(...DB, doc_id)

		console.log(doc)

		return doc
	},
	async updateDocument(doc_id: string, data: UserRelationship) {
		const doc = await databases.updateDocument(...DB, doc_id, data)

		console.log(doc)

		return doc
	},
	async queryList(type: Attribute, value: any) {
		const doc_list = await databases.listDocuments(...DB, [Query.equal(type, value)])

		return doc_list
	},
	async findFixed(integral: number) {
		const p = await databases.listDocuments(...DB, [Query.equal('integral', integral)])
		console.log(p.total)
	},
}
