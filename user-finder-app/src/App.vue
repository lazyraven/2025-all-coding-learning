<template>
  <div class="container">
    <h1>User Finder</h1>
    <SearchBar @onSearch="handleSearch" />
    <!-- <UserList :users="filteredUsers" :loading="loading" :error="error" /> -->

    <!-- Optional Enhancements Breakdown
   2. Add Pagination -->
    <UserList :users="paginatedUsers" :loading="loading" :error="error" />

    <div v-if="totalPages > 1">
      <button @click="prevPage" :disabled="currentPage === 1">Prev</button>
      <span>Page {{ currentPage }} / {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>


  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'
import { storeToRefs } from 'pinia'
import { useUserStore } from './stores/userStore.js'
import SearchBar from './components/SearchBar.vue'
import UserList from './components/UserList.vue'

// const users = ref([])
const searchQuery = ref('')
// const loading = ref(true)
// const error = ref(null)


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

// Optional Enhancements Breakdown
//  2. Add Pagination

const currentPage = ref(1)
const itemsPerPage = 5

const totalPages = computed(() => Math.ceil(filteredUsers.value.length / itemsPerPage))

const paginatedUsers = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return filteredUsers.value.slice(start, start + itemsPerPage)
})


const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++
}

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--
}

// Optional Enhancements Breakdown
// 3. Use Pinia for State Management

const userStore = useUserStore()
const { users, loading, error } = storeToRefs(userStore)

// onMounted(fetchUsers)
onMounted(() => userStore.fetchUsers())
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
  padding: 1rem;
}
</style>
