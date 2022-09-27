<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Register</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form @submit="register">
                  <v-text-field
                    name="email"
                    label="email"
                    type="text"
                    v-model="email"
                  ></v-text-field>
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

                  <router-link
                      :to="{
                        path: '/login',
                      }"
                      class="btn-register"
                    >
                      <span > Login </span>
                    </router-link>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="register">register</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      email: "",
    };
  },
  methods: {
    register() {
      console.log(this.username);
      console.log(this.password);
      console.log(this.register);
      sessionStorage.setItem("isLogin", true);
      // sessionStorage.setItem("role", "admin")

      this.$router.push("/");
    },
  },
};
</script>


<style>
.btn-register{
  text-decoration: none !important;
  font-style: italic;
}
</style>
