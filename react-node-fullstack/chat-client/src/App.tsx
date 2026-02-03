import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import type { ChatMessage } from "./types/chat"
const socket = io("http://localhost:3000");

function App() {
  // const [messages, setMessages] = useState([]);
  // type ChatMessage = {
  //   id: string;
  //   text: string;
  //   sender: string;
  //   timestamp: number;
  // };
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");

  // useEffect(() => {
  //   socket.on("chat-message", (msg) => {
  //     setMessages(prev => [...prev, msg]);
  //   });

  //   return () => socket.off("chat-message");
  // }, []);

  // useEffect(() => {
  //   const handler = (msg: ChatMessage) => {
  //     setMessages(prev => [...prev, msg]);
  //   };

  //   socket.on("chat-message", handler);
  //   // This happens because your useEffect cleanup function is returning the socket, but React expects the cleanup to return nothing (void). A cleanup function should only perform side effects, not return a value.
  //   // return () => socket.off("chat-message", handler); // will give error this line because need to add curly braces {}
  //   return () => { socket.off("chat-message", handler); } // Fix: use a block body so it returns void
  //   // React expects:
  //   // () => void
  //   // But your version was effectively:
  //   // () => Socket
  // }, []);

  // const sendMessage = () => {
  //   console.log("sendMessage called");
  //   socket.emit("chat-message", input);
  //   setInput("");
  // };


  // Step 1 — Load history
  useEffect(() => {
    socket.on("chat-history", (history) => {
      setMessages(history);
    });

    socket.on("chat-message", (msg) => {
      setMessages(prev => [...prev, msg]);
    });

    return () => {
      socket.off("chat-history");
      socket.off("chat-message");
    };
  }, []);

  const sendMessage = () => {
    socket.emit("chat-message", {
      sender: "Nisha",
      text: input,
      room: "global"
    });
    setInput("")
  }
  return (
    <div>
      {/* {messages.map((m, i) => <p key={i}>{m}</p>)} */}
      {messages.map((m, i) => <p key={i}><strong>{m.sender}</strong>: {m.text}</p>)}
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={sendMessage}>Send</button>

      {/* <pre>{JSON.stringify(msg, null, 2)}</pre> */}
    </div>
  );
}

export default App;
