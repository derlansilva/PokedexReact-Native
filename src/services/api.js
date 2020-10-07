const axios = require('axios')

const api = axios.create({
    baseURl: 'http:192.168.100.12:3000'
})

export default api