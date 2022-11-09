<template>
  <v-dialog v-model="getShow" width="500" persistent>
    <v-card>
      <v-card-title class="white--text orange lighten-2">
        Nhập thông tin quả 
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
              :item-text="'name'"
              :item-value="'id'"
              :label="attribute.name"
              :rules="validator[attribute.field]"
              required
            ></v-select>
          </div>
          <v-card-actions class="pb-5">
            <v-spacer></v-spacer>
            <v-btn type="submit" color="success" outlined> Nhận diện </v-btn>
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
import constant from "@/constant/constant";
import { positive, required } from "@/validator/index";
export default {
  props: {
    isShow: Boolean,
    smellsFruit: {
      type: Array,
      default: () => [],
    },
    colorsFruit: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      attributeFields: constant.ATTRIBUTE_FIELDS,

      dataForm: {
        long: null,
        width: null,
        weight: null,
        color: null,
        smell: null,
      },

      validator: {
        long: [required(), positive()],
        width: [required(), positive()],
        weight: [required(), positive()],
        color: [required()],
        smell: [required()],
      },
    };
  },

  emits: ["close-form", "submit"],

  computed: {
    getShow() {
      return this.isShow;
    },

    getOptionsOfSelectField() {
      return {
        color: this.colorsFruit,
        smell: this.smellsFruit,
      };
    },
  },

  methods: {
    handleCloseForm() {
      this.$emit("close-form");
      this.$refs.form.reset();
      this.$refs.form.resetValidation();
    },

    handleSubmit() {
      if (this.$refs.form.validate()) {
        this.$emit("submit", Object.assign({}, this.dataForm));
        this.handleCloseForm();
      } else {
        console.log("invalid");
      }
    },
  },
};
</script>

<style></style>
