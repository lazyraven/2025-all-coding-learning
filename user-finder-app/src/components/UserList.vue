<template>
    <div v-if="loading">Loading users...</div>
    <div v-else-if="error">{{ error }}</div>
    <ul v-else>
        <li v-for="user in users" :key="user.login.uuid">
            {{ user.name.first }} {{ user.name.last }} - {{ user.email }}
        </li>
    </ul>
</template>

<script setup>
defineProps({
    users: Array,
    loading: Boolean,
    error: String
})
</script>

<style scoped>
li {
    margin: 8px 0;
}
</style>
