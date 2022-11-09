<template>
  <v-app>
    <v-main>
      <v-app-bar
        absolute
        color="yellow darken-2"
        dark
        scroll-target="#scrolling-techniques-6"
      >
        <v-app-bar-nav-icon @click="handleLogout">
          <v-icon> mdi-logout </v-icon>
        </v-app-bar-nav-icon>
      </v-app-bar>
      <v-container class="mt-10">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  methods: {
    handleLogout() {
      sessionStorage.setItem("isLogin", false);
      sessionStorage.setItem("role", null);

      this.$router.push("/login");
    },
  },
};
</script>
