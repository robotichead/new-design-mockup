<script setup lang="ts">
import FormGroup from "@/components/render/form/FormGroup.vue";
import { computed, ref } from "vue";
import RenderErrorMessage from "@/components/render/error/RenderErrorMessage.vue";

// Define Emits
const emit = defineEmits(["isValid"]);

// Define Props
const props = defineProps({
  isRequired: {
    type: Boolean,
    default: false,
  },
  minLength: {
    type: Number,
    default: 0,
    required: false,
    validator: (val) => !Number.isNaN(val),
  },
  maxLength: {
    type: Number,
    default: 0,
    required: false,
    validator: (val) => !Number.isNaN(val),
  },
  placeholderText: {
    type: String,
    required: false,
    default: "",
  },
  title: {
    type: String,
    required: true,
  },
});

// Define Models
const model = defineModel();

// Define ref
const hasError = ref(false);
const errorMessage = ref("");

// Computed
const getId = computed(() => {
  // Return an id made up of input- + title
  return "input-" + props.title?.toLowerCase()?.replace(" ", "-");
});

function checkValidation() {
  // Fall back to defaults
  hasError.value = false;
  errorMessage.value = "";

  // Get the length of the model and if NaN fallback to 0
  let modelLength: number = Number(model?.value?.toString().length);
  modelLength = isNaN(modelLength) ? 0 : modelLength;

  // Check the first "required" condition
  if (props.isRequired && modelLength === 0) {
    hasError.value = true;
    errorMessage.value = "This field is required";
  }

  // Check the minimum "required" condition
  if (props.minLength > 0 && modelLength < props.minLength) {
    hasError.value = true;
    errorMessage.value = `This field has a minimum length ${modelLength} / ${props.minLength}`;
  }

  // Check the maximum "required" condition
  if (props.maxLength > 0 && modelLength > props.maxLength) {
    hasError.value = true;
    errorMessage.value = `This field has a maximum length ${modelLength} / ${props.maxLength}`;
  }

  // Set the defined ref and tell parent
  emit("isValid", !hasError.value);
}
</script>

<template>
  <FormGroup>
    <label :for="getId"> {{ title }}<span v-if="isRequired">*</span> </label>
    <input
      :id="getId"
      type="text"
      :name="props.title"
      :placeholder="props.placeholderText"
      v-model="model"
      v-on:keyup="checkValidation"
      v-on:focusout="checkValidation"
    />
    <RenderErrorMessage :error-message="errorMessage" />
  </FormGroup>
</template>

<style scoped>
label {
  font-size: 14px;
  margin-bottom: 6px;
}

span {
  color: var(--text-red);
}

input {
  border-style: var(--border-style);
  border-width: var(--border-width);
  border-radius: var(--border-radius);
  border-color: var(--border);
  line-height: 24px;
  padding: 4px 10px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

input:focus {
  border-color: var(--secondary);
  border-width: 2px;
  outline: none;
  line-height: 22px;
}
</style>
