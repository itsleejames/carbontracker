<template>
  <div class="profile-page">
    <h2>User Profile</h2>
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" placeholder="Enter your name" />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" />
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" />
      </div>

      <div class="form-group">
        <label for="phone">Phone Number</label>
        <input type="text" id="phone" placeholder="Enter your phone number" />
      </div>

      <div class="actions">
        <button type="button" class="delete-btn" @click="showConfirmDeletion">Delete Account</button>
        <button type="submit" class="save-btn">Save Changes</button>
      </div>
    </form>

    <ConfirmDeletion v-if="showModal" @close="closeModal" />
  </div>
</template>

<script>

export default {
  name: "UserProfile",
  components: {

  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    showConfirmDeletion() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
/* Add the same styles from before for User Profile */
</style>
