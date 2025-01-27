<template>
  <div id="app">
    <NavBar />
    <router-view /> <!-- This is where the routed components (like Home) will display -->
    <FooterBar />
  </div>
</template>

<script>
import NavBar from "@/components/Organisms/NavBar.vue";
import FooterBar from "@/components/Organisms/tracker-footer.vue"; // Import the footer component

export default {
  name: "App",
  components: {
    NavBar,
    FooterBar, // Register the footer component
  },
};
</script>

<style>
/* Ensure the app uses flexbox to properly layout the footer */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

body {
  margin: 0;
}

/* router-view (main content) grows to fill space between header and footer */
router-view {
  flex: 1;
}
</style>
