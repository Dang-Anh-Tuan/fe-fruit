<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form @submit="login">
                  <v-text-field
                    name="username"
                    label="username"
                    type="text"
                    v-model="username"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    v-model="password"
                  ></v-text-field>
                  <v-row class="mt-3 ml-2">
                    <vue-card-text class="black--text">Don't have an account? =></vue-card-text>
                    <router-link
                      :to="{
                        path: '/register',
                      }"
                      class="btn-register"
                    >
                      <span> Register </span>
                    </router-link>
                  </v-row>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { login } from "@/api";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      console.log(this.username);
      console.log(this.password);
      const data = {
        usernameU: this.username,
        passwordU: this.password,
      };
      const user = await login(data);
      if (!user) {
        this.username = "";
        this.password = "";
        alert("Login invalid");
      } else if (user.role === "admin") {
        sessionStorage.setItem("isLogin", true);
        sessionStorage.setItem("role", "admin");
        this.$router.push("/admin");
      } else if (user.role === "user") {
        sessionStorage.setItem("isLogin", true);
        sessionStorage.setItem("role", "user");
        this.$router.push("/");
      }
    },
  },
};
</script>

<style>
.btn-register {
  text-decoration: none !important;
  font-style: italic;
}
</style>
