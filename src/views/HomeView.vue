<template>
  <v-container>
    <v-row justify="center" class="my-5">
      <h4 class="orange--text lighten-2 display-1">
        Chọn loại quả để dự đoán tình trạng
      </h4>
    </v-row>
    <v-row>
      <v-col
        class="col-md-6 col-lg-3"
        v-for="fruit in listFruit"
        :key="fruit.name"
      >
        <card-fruit :fruit="fruit" @select-fruit="handleShowFormFruit" />
      </v-col>
    </v-row>
    <popup-form-fruit
      :is-show="isShowFormFruit"
      :colors-fruit="colorsFruitCurrent"
      :smells-fruit="smellsFruit"
      @close-form="handleCloseForm"
      @submit="handleCheckStatusFruit"
    />

    <popup-result
      :is-show="isShowPopupResult"
      :quality="qualityResult"
      @close-form="handleClosePopupResult"
    >
    </popup-result>
  </v-container>
</template>

<script>
import CardFruit from "@/components/CardFruit.vue";
import constant from "@/constant/constant";
import PopupFormFruit from "@/components/PopupFormFruit.vue";
import PopupResult from "@/components/PopupResult.vue";

import { getAllColor, getAllOdor, guessQuality } from "@/api";
export default {
  components: { CardFruit, PopupFormFruit, PopupResult },
  data() {
    return {
      listFruit: constant.LIST_FRUIT,
      fruitId: null,
      isShowFormFruit: false,
      colorsFruitCurrent: [],
      smellsFruit: [],
      sizeFruit: constant.SIZE_FRUITS,
      typeWeight: constant.TYPE_WEIGHT,
      listSize: constant.LIST_SIZE,
      listTypeWeight: constant.LIST_TYPE_WEIGHT,
      isShowPopupResult: false,
      qualityResult: null,
    };
  },

  async created() {
    this.colorsFruitCurrent = await getAllColor();
    this.smellsFruit = await getAllOdor();
  },

  methods: {
    handleShowFormFruit(fruit) {
      this.fruitId = fruit.id;
      this.isShowFormFruit = true;
    },

    handleCloseForm() {
      this.isShowFormFruit = false;
    },

    getSize(sizeOfFruit, long, width) {
      if (long < sizeOfFruit.avgLongMin && width < sizeOfFruit.avgWidthMin) {
        return 1;
      } else if (
        long > sizeOfFruit.avgLongMax &&
        width > sizeOfFruit.avgWidthMax
      ) {
        return 3;
      } else if (
        long > sizeOfFruit.avgLongMin &&
        long < sizeOfFruit.avgLongMax &&
        width > sizeOfFruit.avgWidthMin &&
        width < sizeOfFruit.avgWidthMax
      ) {
        return 2;
      } else if (long < sizeOfFruit.avgLongMin) {
        return 1;
      } else if (long > sizeOfFruit.avgLongMax) {
        return 3;
      } else {
        return 2;
      }
    },
    getTypeWeight(typeWeightOfCurrentFruit, weight) {
      if (weight < typeWeightOfCurrentFruit.avgWeightMin) {
        return 1;
      } else if (weight > typeWeightOfCurrentFruit.avgWeightMax) {
        return 3;
      } else {
        return 2;
      }
    },

    async handleCheckStatusFruit(fruit) {
      const sizeOfCurrentFruit = this.sizeFruit.filter(
        (item) => item.id === this.fruitId
      )[0];
      const typeWeightOfCurrentFruit = this.typeWeight.filter(
        (item) => item.id === this.fruitId
      )[0];

      const sizeId = this.getSize(
        sizeOfCurrentFruit,
        +fruit.long,
        +fruit.width
      );

      const typeWeightId = this.getTypeWeight(
        typeWeightOfCurrentFruit,
        +fruit.weight
      );

      const dataSubmitForm = {
        idFruit: this.fruitId,
        idSize: sizeId,
        idWeight: typeWeightId,
        idColor: fruit.color,
        idOdor: fruit.smell,
      };

      const resultGuessQuality = await guessQuality(dataSubmitForm);

      this.qualityResult = resultGuessQuality;
      this.isShowPopupResult = true;
    },

    handleClosePopupResult() {
      this.isShowPopupResult = false;
    },
  },
};
</script>
