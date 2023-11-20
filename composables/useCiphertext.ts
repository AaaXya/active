const alphabet = 'casual',
	len = alphabet.length
function maching(text: string, cipher: boolean) {
	if (cipher) {
		let message = ''
		for (let i = 0; i < text.length; i++) {
			message += text.charCodeAt(i) + alphabet.charCodeAt(i % len) + ','
		}
		return message
	} else {
		//
		return text
			.split(',')
			.slice(0, -1)
			.reduce((acc, el) => acc + String.fromCharCode(el), '')
	}
}
export const useDecrypt = (text: string) => maching(text, false)
export const useEncrypt = (text: string) => maching(text, true)
