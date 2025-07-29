<template>
    <input type="text" placeholder="Search users..." v-model="search" @input="emitSearch" />
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['onSearch'])
const search = ref('')

const emitSearch = () => {
    emit('onSearch', search.value)
}

</script>

<style scoped>
input {
    width: 100%;
    padding: 8px;
    margin-bottom: 16px;
}
</style>
