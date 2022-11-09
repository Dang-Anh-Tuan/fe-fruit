<template>
  <v-dialog v-model="getShow" width="500" persistent>
    <v-card>
      <v-card-title class="white--text orange lighten-2">
        Nhập case mới
      </v-card-title>

      <v-container class="px-10">
        <v-form ref="form" lazy-validation @submit.prevent="handleSubmit">
          <div v-for="attribute in attributeFields" :key="attribute.name">
            <v-text-field
              v-if="attribute.type === 'text' || attribute.type === 'number'"
              :type="attribute.type"
              v-model="dataForm[attribute.field]"
              :label="attribute.name"
              :rules="validator[attribute.field]"
              required
            ></v-text-field>

            <v-select
              v-if="attribute.type === 'select'"
              v-model="dataForm[attribute.field]"
              :items="getOptionsOfSelectField[attribute.field]"
              :item-text="`${
                ['size', 'weight', 'quality'].includes(attribute.field)
                  ? 'type'
                  : 'name'
              }`"
              :item-value="'id'"
              :label="attribute.name"
              :rules="validator[attribute.field]"
              required
            ></v-select>
          </div>
          <v-card-actions class="pb-5">
            <v-spacer></v-spacer>
            <v-btn type="submit" color="success" outlined> Thêm case </v-btn>
            <v-btn outlined color="error" @click="handleCloseForm">
              Đóng
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import { createCases, getInfoFormCase } from "@/api";
import constant from "@/constant/constant";
import { required } from "@/validator";

export default {
  props: {
    isShow: Boolean,
  },

  emits: ["close-form"],

  data() {
    return {
      attributeFields: constant.FIELDS_INPUT_CASE,

      dataForm: {
        fruit: null,
        size: null,
        weight: null,
        color: null,
        odor: null,
        quality: null,
      },

      validator: {
        fruit: [required()],
        size: [required()],
        long: [required()],
        width: [required()],
        weight: [required()],
        color: [required()],
        odor: [required()],
        quality: [required()],
      },

      dataFormCase: [],
    };
  },

  async created() {
    this.dataFormCase = await getInfoFormCase();
  },

  computed: {
    getShow() {
      return this.isShow;
    },

    getOptionsOfSelectField() {
      return {
        fruit: this.dataFormCase.fruit,
        size: this.dataFormCase.size,
        weight: this.dataFormCase.weight,
        color: this.dataFormCase.color,
        odor: this.dataFormCase.odor,
        quality: this.dataFormCase.quality,
      };
    },
  },

  methods: {
    handleCloseForm() {
      this.$emit("close-form");
      this.$refs.form.reset();
      this.$refs.form.resetValidation();
    },

    async handleSubmit() {
      await createCases({
        idFruit: this.dataForm.fruit,
        idSize: this.dataForm.size,
        idWeight: this.dataForm.weight,
        idColor: this.dataForm.color,
        idOdor: this.dataForm.odor,
        idQuality: this.dataForm.quality,
      });

      this.handleCloseForm();
      this.$emit("create");

    },
  },
};
</script>

<style></style>
