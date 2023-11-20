const alphabet = 'casual',
	len = alphabet.length
function maching(text: string, cipher: boolean) {
	let message = ''
	for (let i = 0; i < text.length; i++) {
		const el = cipher
			? text.charCodeAt(i) + alphabet.charCodeAt(i % len)
			: text.charCodeAt(i) - alphabet.charCodeAt(i % len)
		message += String.fromCharCode(el)
	}

	return message
}
export const useDecrypt = (text: string) => maching(text, false)
export const useEncrypt = (text: string) => maching(text, true)
