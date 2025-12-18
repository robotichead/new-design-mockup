<script setup lang="ts">
import ButtonComponent from "@/components/prefab/button/ButtonComponent.vue";
import CardComponent from "@/components/prefab/card/CardComponent.vue";
import CardFooter from "@/components/prefab/card/CardFooter.vue";
import CardHeader from "@/components/prefab/card/CardHeader.vue";
import TextInputComponent from "@/components/prefab/text_input/TextInputComponent.vue";
import { ButtonVariantEnum } from "@/utils/enums/ButtonVariantEnum.ts";
import { ObjectStateEnum } from "@/utils/enums/ObjectStateEnum.ts";
import { nextTick, ref } from "vue";

// Define Models
const titleModel = defineModel("titleModel", {
  type: String,
  default: "",
});
const groupModel = defineModel("groupModel", {
  type: String,
  default: "",
});

// Define data
const fieldValidation: Record<string, boolean> = {
  titleModel: false,
};

// Define Refs
const isFormValid = ref(true);
const objectState = ref(ObjectStateEnum.NoAction);

// Define Methods
async function createProject(): Promise<void> {
  // Check the validation
  isFormValid.value = await checkValidation();

  // Break out of save if form is not valid
  if (!isFormValid.value) {
    return;
  }

  // Save the form
  objectState.value = ObjectStateEnum.Saving;
}

// Move this to utils/composition as it'll be used everywhere
async function checkValidation(): Promise<boolean> {
  // Await for a tick - make sure everything has settled
  await nextTick();

	// Loop through the field validation and find any falses
	return Object.entries(fieldValidation).some((value) => {
		return !value;
	})
}
</script>

<template>
  <CardComponent>
    <CardHeader
      title="Create your new project"
      description="Fill in the details below to start your new project"
    />

    <TextInputComponent
      v-model="titleModel"
      :isRequired="true"
      :maxLength="20"
      :minLength="10"
      placeholderText="Your project title"
      title="Title"
      tooltip-title="Project Title"
      tooltip-message="Create a short title describing the project you wish to create. Minimum length of 10 characters and Maximum length of 20"
      @isValid="(value) => (fieldValidation['titleModel'] = value)"
    />
    <TextInputComponent v-model="groupModel" title="Group Permissions" />

    <CardFooter>
      <ButtonComponent
        label="Create Project"
        :variant="ButtonVariantEnum.Primary"
        :objectState="objectState"
        v-on:click="createProject"
      />
    </CardFooter>
  </CardComponent>
</template>

<style scoped></style>
