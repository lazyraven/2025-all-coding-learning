// Optional Enhancements Breakdown
// 3. Use Pinia for State Management

import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useUserStore = defineStore("userStore", () => {
  const users = ref([]);
  const loading = ref(true);
  const error = ref(null);

  const fetchUsers = async () => {
    try {
      const cached = localStorage.getItem("userData");
      if (cached) {
        users.value = JSON.parse(cached);
      } else {
        const res = await axios.get("https://randomuser.me/api/?results=10");
        users.value = res.data.results;
        localStorage.setItem("userData", JSON.stringify(users.value));
      }
    } catch (err) {
      error.value = "Error fetching users.";
    } finally {
      loading.value = false;
    }
  };

  return { users, loading, error, fetchUsers };
});
