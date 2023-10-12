import GoTrue from 'gotrue-js'

// Instantiate the GoTrue auth client with an optional configuration
const useCertify = new GoTrue({
    APIUrl: 'https://astonishing-basbousa-7ed48c.netlify.app/.netlify/identity',
    audience: '',
    setCookie: true,
})

export default useCertify
