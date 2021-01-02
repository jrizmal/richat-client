<template>
  <div>
    <b-container fluid>
      <router-view />
    </b-container>
  </div>
</template>

<script>
export default {
  computed: {
    auth() {
      return this.$store.state.auth;
    },
  },
  watch: {
    auth: {
      deep: true,
      handler() {
        this.handleAuthRoute();
      },
    },
  },
  methods: {
    handleAuthRoute() {
      if (!this.auth.isLoggedIn && this.$route.path == "/") {
        this.$router.replace("/login");
      } else if(this.auth.isLoggedIn && this.$route.path != "/"){
        this.$router.replace("/");
      }
    },
  },
  mounted() {
    this.handleAuthRoute();
  },
};
</script>

<style lang="scss">
</style>
