<template>
  <div class="main-content">
    <div class="banner">
      <div class="placeholder-image"></div>
      <div class="welcome-text">
        <h1>Welcome to The Tracker!</h1>
        <p>Track your environmental impact through activities,</p>
        <p>Create an account or log in for access to personalised goals and information</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
.main-content {
  flex: 1;
  background: linear-gradient(to bottom, #2fa169, #5fbf92);
  text-align: center;
  padding: 50px 20px;
}

.banner {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.placeholder-image {
  background: #ccc;
  width: 50%;
  height: 300px;
}

.welcome-text h1 {
  font-size: 36px;
  color: white;
}

.welcome-text p {
  color: white;
  margin: 10px 0;
}
</style>
