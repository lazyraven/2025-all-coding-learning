<template>
    <input type="text" placeholder="Search users..." v-model="search" @input="emitSearch" />
</template>

<script setup>
import { ref, watch } from 'vue'
import { debounce } from '../utills/debounce.js'

const emit = defineEmits(['onSearch'])
const search = ref('')

// const emitSearch = () => {
//     emit('onSearch', search.value)
// }

// Optional Enhancements Breakdown
// 1. Add Debounce to Search
watch(search, debounce((val) => {
    emit('onSearch', val)
}, 300))


</script>

<style scoped>
input {
    width: 100%;
    padding: 8px;
    margin-bottom: 16px;
}
</style>
