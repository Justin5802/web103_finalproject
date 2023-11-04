import express from 'express'
import dotenv from 'dotenv'

import router from './config/routes.js'

dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use('/api', router)


app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`)
})