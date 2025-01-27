<template>
  <footer class="tracker-footer">
    <TrackerLogo/>
    <div class="newsletter">
      <p>JOIN OUR NEWSLETTER</p>
      <div class="newsletter-signup">
        <input type="email" placeholder="Enter your email address" />
        <button>SIGN UP</button>
      </div>
    </div>
    <div class="footer-links">
      <div>
        <p>HOME</p>
        <p>ABOUT</p>
        <p>CATEGORIES</p>
      </div>
      <div>
        <p>CONTACT</p>
      </div>
    </div>
    <div class="copyright">
      <p>(C) THE TRACKER LTD</p>
    </div>
  </footer>
</template>

<script>
import TrackerLogo from "@/components/Atoms/TrackerLogo.vue";

export default {
  name: "FooterBar",
  components: {TrackerLogo},
};
</script>

<style scoped>
.tracker-footer {
  background-color: black;
  color: white;
  padding: 20px;
  text-align: center;
}

.footer-logo img {
  height: 50px;
}

.newsletter {
  margin: 20px 0;
}

.newsletter-signup {
  display: flex;
  justify-content: center;
  align-items: center;
}

.newsletter-signup input {
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
}

.newsletter-signup button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: green;
  color: white;
  cursor: pointer;
}

.footer-links {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
}

.footer-links p {
  margin: 5px 0;
  font-weight: bold;
}

.copyright {
  margin-top: 10px;
  font-size: 14px;
}
</style>
