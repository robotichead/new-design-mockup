<script setup lang="ts">
import TextInputComponent from "@/components/prefab/text_input/TextInputComponent.vue";
import TextareaComponent from "@/components/prefab/textarea/TextareaComponent.vue";
import CardComponent from "@/components/prefab/card/CardComponent.vue";
import CardHeader from "@/components/prefab/card/card_header/CardHeader.vue";

// Define data
const fieldValidation: Record<string, boolean> = {
	descriptionModel: false,
	titleModel: false,
};

// Define Models
const titleModel = defineModel("titleModel", {
	type: String,
	default: "Build a NearBeach project",
});
const descriptionModel = defineModel("descriptionModel", {
	type: String,
	default: "",
})
</script>

<template>
	<CardComponent class="x-large fill-out general-details">
		<CardHeader>
			<h1 id="main-title">Project Details</h1>
		</CardHeader>
		<TextInputComponent
			v-model="titleModel"
			:isRequired="true"
			:maxLength="20"
			:minLength="10"
			label="Title"
			placeholderText="Your project title"
			tooltip-title="Project Title"
			tooltip-message="Create a short title describing the project you wish to create. Minimum length of 10 characters and Maximum length of 20"
			@isValid="(value) => (fieldValidation['titleModel'] = value)"
		/>
		<TextareaComponent
			v-model="descriptionModel"
			placeholderText="Description of your project"
			label="Description"
			@isValid="(value) => (fieldValidation['descriptionModel'] = value)"
		/>
	</CardComponent>
</template>

<style scoped>

</style>