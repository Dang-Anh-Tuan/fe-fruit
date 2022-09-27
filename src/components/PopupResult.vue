<template>
  <v-dialog v-model="getShow" width="500" persistent>
    <v-card>
      <v-card-title class="white--text orange lighten-2">
        Kết quả
      </v-card-title>

      <v-container class="px-10 flex">
        <div class="container-content">
          <img :src="getImageQuality" alt="quality-image" class="quality-img" />
          <v-card-text class="quality-text">
            {{ quality ? quality.type : "" }}
          </v-card-text>
        </div>
      </v-container>
      <v-card-actions class="pb-5">
        <v-btn outlined color="error" @click="handleCloseForm"> Đóng </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    isShow: Boolean,
    quality: Object,
  },

  emits: ["close-form"],

  data() {
    return {
      imageQuality: [
        "https://cdn.pixabay.com/photo/2014/04/03/11/50/green-apple-312307_1280.png",
        "https://khothietke.net/wp-content/uploads/2021/04/PNGKhovector.net-02109.png",
        "https://png.pngtree.com/png-clipart/20190614/original/pngtree-fruit-apple-broken-half-png-image_3815663.jpg",
      ],
    };
  },
  computed: {
    getShow() {
      return this.isShow;
    },

    getImageQuality() {
      if (this.quality) {
        return this.imageQuality[this.quality.id - 1];
      }
      return "";
    },
  },

  methods: {
    handleCloseForm() {
      this.$emit("close-form");
      this.$refs.form.reset();
      this.$refs.form.resetValidation();
    },
  },
};
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
}

.quality-text {
  font-size: 3rem;
  font-weight: 600;
  color: #f76e00;
}
.container-content {
  text-align: center;
}

.quality-img {
  width: 200px;
  height: 200px;
  object-fit: contain;
  object-position: center;
}
</style>
