<template>
  <div class="container">
    <h1>User Finder</h1>
    <SearchBar @onSearch="handleSearch" />
    <UserList :users="filteredUsers" :loading="loading" :error="error" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'
import SearchBar from './components/SearchBar.vue'
import UserList from './components/UserList.vue'

const users = ref([])
const searchQuery = ref('')
const loading = ref(true)
const error = ref(null)

const fetchUsers = async () => {
  try {
    const res = await axios.get('https://randomuser.me/api/?results=10')
    users.value = res.data.results
  } catch (err) {
    error.value = 'Failed to fetch users.'
  } finally {
    loading.value = false
  }
}

const handleSearch = (query) => {
  searchQuery.value = query
}

const filteredUsers = computed(() =>
  users.value.filter(user =>
    `${user.name.first} ${user.name.last}`.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
)

onMounted(fetchUsers)
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
  padding: 1rem;
}
</style>
