const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// In-memory array to store messages
const messages = [];

app.set('view engine', 'ejs'); // Set EJS as the templating engine
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("Our server is running on 3000");
});

app.get('/', (req, res) => {
  res.render('index', { messages: messages }); // Pass messages to the EJS template
});

// Endpoint to handle message submissions
// app.post('/', (req, res) => {
//   const messageData = req.body.message;
//   if (messageData) {
//     messages.push(messageData);
//     console.log(messageData);
//     res.status(200).send('Message submitted successfully!');
//   } else {
//     res.status(400).send('Bad Request: Message content is required.');
//   }
// });

app.post('/', (req, res) => {
    const messageData = req.body.message;
    if (messageData) {
      messages.push(messageData);
      console.log(messageData);
      res.status(200).json({ success: true, message: 'Message submitted successfully!', messages: messages });
    } else {
      res.status(400).json({ success: false, error: 'Bad Request: Message content is required.' });
    }
  });
  
