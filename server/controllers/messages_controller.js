const messages = []

let id = 0

module.exports = {
    createMessage: (req, res) => {
      const {text, time} = req.body
      

      const newMessage = {id, text, time}
    
      messages.push(newMessage)
    
        id++
    
      res.status(201).send(messages)
    },

    getMessages: (req, res) => {
        res.status(200).send(messages)
    },

    editMessage: (req, res) => {
        const { id } = req.params
        const { text, time } = req.body
        
        console.log(req.params)
        console.log(id)

        const updateIndex = messages.findIndex(message => message.id === +id)

        if (updateIndex === -1) {
            return res.status(404).send('Message not found')
        }

        const updatedMessage = {
            id: +id,
            text: text || messages[updateIndex].text,
            time: time || messages[updateIndex].time
        }

        messages.splice(updateIndex, 1, updatedMessage)

        res.status(200).send(messages)

    },

    deleteMessage: (req, res) => {
        const {id} = req.params


        const deleteIndex = messages.findIndex(message => message.id === +id)

        if (deleteIndex === -1) {
            return res.status(404).send('Message not found')
        }

        messages.splice(deleteIndex, 1)

        console.log(messages)
        res.status(200).send(messages)
    },

}