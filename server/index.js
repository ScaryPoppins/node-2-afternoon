const express = require('express')
const app = express()
app.use(express.json())
const control = require('./controllers/messages_controller.js')
app.use(express.static(__dirname + '/../public/build'))


app.get('/api/messages', control.read);
app.post('/api/messages', control.create);
app.put('/api/messages/:id', control.update);
app.delete('/api/messages/:id', control.delete);



const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})