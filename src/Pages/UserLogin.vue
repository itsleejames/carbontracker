<template>
  <div class="login-page">
    <div class="form-container">
      <h2>LOGIN</h2>
      <form>
        <!-- Email -->
        <div class="form-group">
          <label>
            <span class="icon">📧</span>
            Enter your email:
          </label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <!-- Password -->
        <div class="form-group">
          <label>
            <span class="icon">🔒</span>
            Enter your password:
          </label>
          <input type="password" placeholder="Enter your password" />
        </div>

        <!-- Login Button -->
        <button type="submit" class="login-btn">LOGIN</button>

        <!-- Registration Link -->
        <p>
          Don't have an account?
          <router-link to="/register">Register here.</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserLogin",
};
</script>

<style scoped>
.login-page {
  background: linear-gradient(to bottom, #2fa169, #5fbf92);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
}

.form-container {
  background: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 400px;
}

h2 {
  margin-bottom: 20px;
  color: #2fa169;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

label {
  font-size: 16px;
  display: block;
  margin-bottom: 5px;
}

.icon {
  margin-right: 5px;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
}

.login-btn {
  background: #2fa169;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
}

.login-btn:hover {
  background: #249c5c;
}

p {
  margin-top: 20px;
  font-size: 14px;
}

router-link {
  color: #2fa169;
  text-decoration: none;
  font-weight: bold;
}
</style>
