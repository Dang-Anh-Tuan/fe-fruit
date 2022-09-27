<template>
  <v-card class="mx-auto" max-width="344">
    <v-img :src="fruit.img" height="200px"></v-img>

    <v-card-title> {{ fruit.name }} </v-card-title>

    <v-card-actions>
      <v-btn color="orange lighten-2 white--text" @click="handleShowFormFruit">
        Nhận diện
      </v-btn>

      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    fruit: {
      type: Object,
      default: () => {},
    },
  },

  emits: ["select-fruit"],

  methods: {
    handleShowFormFruit() {
      this.$emit("select-fruit", this.fruit);
    },
  },
};
</script>

<style></style>
