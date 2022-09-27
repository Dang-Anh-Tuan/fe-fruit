<template>
  <v-container class="mt-10">
    <v-row>
      <v-btn color="success" class="ml-3" @click="isShowFormCase = true">
        Thêm case
      </v-btn>
    </v-row>
    <v-data-table
      :headers="headers"
      :items="dataTable"
      item-key="name"
      class="elevation-1 mt-10"
    >
    </v-data-table>
    <popup-from-case
      :is-show="isShowFormCase"
      @close-form="isShowFormCase = false"
      @create="flagReGetCases = !flagReGetCases"
    />
  </v-container>
</template>

<script>
import PopupFromCase from "@/components/PopupFormCase.vue";
import { getAllCases } from "@/api";

export default {
  components: { PopupFromCase },

  data() {
    return {
      isShowFormCase: false,
      cases: [],
      flagReGetCases: false,
    };
  },

  watch: {
    flagReGetCases: {
      async handler() {
        this.cases = await getAllCases();
      },
      immediate: true,
    },
  },

  computed: {
    headers() {
      return [
        { text: "ID", value: "id" },
        { text: "Fruit", value: "fruit" },
        { text: "Size", value: "size" },
        { text: "Weight", value: "weight" },
        { text: "Color", value: "color" },
        { text: "Odor", value: "odor" },
        { text: "Quality", value: "quality" },
      ];
    },

    dataTable() {
      if (this.cases.length > 0) {
        const dataTables = this.cases.map((item) => ({
          id: item.id,
          fruit: item.fruit.name,
          size: item.size.type,
          weight: item.weight.type,
          color: item.color.name,
          odor: item.odor.name,
          quality: item.quality.type,
        }));

        return dataTables;
      }
      return [];
    },
  },
};
</script>

<style></style>
