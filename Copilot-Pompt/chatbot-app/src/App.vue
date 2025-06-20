<template>
 <HelloWorld msg="Welcome to Your Vue.js App"/>
  <ChatBotComponent></ChatBotComponent>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ChatBotComponent from './components/ChatBotComponent.vue';
export default {
  name: 'App',
  components: {
    HelloWorld,
    ChatBotComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
