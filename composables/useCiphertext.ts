import aes from 'crypto-js/aes'
import transf from 'crypto-js/enc-utf8'
const key = 'secret key 123'

export const useDecrypt = (texts: string) => aes.decrypt(texts, key).toString(transf)
export const useEncrypt = (ciphertext: string) => aes.encrypt(ciphertext, key).toString()
