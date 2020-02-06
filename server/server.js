require('dotenv').config({ path: __dirname + '/.env' })
const express = require('express')
const passport = require('passport')
const jwtUtils = require('./utils/jtwutils')
const mainRoutes = require('./middleware/mainRoutes')
const usersRoutes = require('./middleware/usersRoutes')
const helmet = require('helmet')
const cors = require('cors')

const PORT = process.env.PORT

const app = express()

passport.use(jwtUtils.strategy)

app.use(passport.initialize())
app.use(express.json())

app.use(helmet())
app.use(cors())

mainRoutes(app)
usersRoutes(app, passport)

app.listen(PORT, () => console.log(`Started listening on port ${PORT}`))
