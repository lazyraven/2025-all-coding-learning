<template>
  <div>
    <h3>Type input box : hello, or bye, help : check in backend code.</h3>
    <input v-model="message" @keyup.enter="sendMessage" placeholder="Type your message..." />
    <button @click="sendMessage">Send</button>
  </div>
</template>

<script>
import { useToast } from "vue-toastification";
export default {
  name: "ChatBotComponent",
  data() {
    return {
      message: "",
    };
  },
  setup() {
    const toast = useToast();
    return { toast };
  },
  methods: {
    async sendMessage() {
      if (!this.message.trim()) {
        this.toast.warning("Please enter a message.");
        return;
      }

      try {
        const response = await fetch("http://localhost:3000/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: this.message }),
        });
        const data = await response.json();

        this.toast.success(`Bot replied: ${data.reply}`);
        this.message = "";
      } catch (error) {
        this.toast.error("Something went wrong while sending the message.");
      }
    },
  },
};
</script>
