<template>
  <header class="tracker-header">
    <!-- Logo -->
    <tracker-logo />

    <!-- Navigation Links -->
    <nav class="nav-links">
      <router-link to="/" class="nav-link">HOME</router-link>
      <router-link to="/about" class="nav-link">ABOUT</router-link>
      <router-link to="/categories" class="nav-link">CATEGORIES</router-link>
      <router-link to="/contact" class="nav-link">CONTACT</router-link>
    </nav>

    <!-- Search Bar and User Actions -->
    <div class="actions">
      <input type="text" placeholder="Search" class="search-bar" />
      <router-link to="/register" class="user-icon">
        <user-icon />
      </router-link>
      <router-link to="/login" class="login-link"></router-link>
    </div>
  </header>
</template>

<script>
import TrackerLogo from "@/components/Atoms/TrackerLogo.vue";
import UserIcon from "@/components/Atoms/UserIcon.vue";

export default {
  name: "NavBar",
  components: { UserIcon, TrackerLogo },
};
</script>

<style scoped>
.tracker-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  padding: 15px 20px;
  color: white;
}

.nav-links {
  display: flex;
  gap: 30px;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
}

.actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.search-bar {
  padding: 8px 15px;
  border-radius: 5px;
  border: none;
  font-size: 14px;
}

.user-icon {
  background-color: green;
  border-radius: 5px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.user-icon user-icon {
  height: 20px;
  width: 20px;
}

.login-link {
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
}
</style>
