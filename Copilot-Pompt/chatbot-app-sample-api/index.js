const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Mock chatbot logic
function getBotReply(userMessage) {
  if (!userMessage) return "Please say something!";
  const message = userMessage.toLowerCase();

  if (message.includes("hello")) return "Hi there! How can I help you today?";
  if (message.includes("bye")) return "Goodbye! Have a great day!";
  if (message.includes("help")) return "Sure! I'm here to help. Ask me anything.";

  return "I'm not sure how to respond to that.";
}

// POST /chat
app.post('/chat', (req, res) => {
  const userMessage = req.body.message;
  const botReply = getBotReply(userMessage);
  res.json({ reply: botReply });
});

app.listen(PORT, () => {
  console.log(`Chat API server running on http://localhost:${PORT}`);
});


// To run this backend API, use the following commands:

// 1. Install dependencies:
//   npm install

// 2. Start the server:
//   node index.js
