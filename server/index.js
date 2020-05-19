const express = require('express')
const ctrl = require('./controllers/messages_controller')

const app = express()

const SERVER_PORT = 3001

app.use(express.json())

app.use(express.static(__dirname + '/../public/build'))

app.get('/api/messages', ctrl.getMessages)

app.post('/api/messages', ctrl.createMessage)

app.put('/api/messages/:id', ctrl.editMessage)

app.delete('/api/messages/:id', ctrl.deleteMessage)



app.listen(SERVER_PORT, console.log(`Listening on ${SERVER_PORT}`))