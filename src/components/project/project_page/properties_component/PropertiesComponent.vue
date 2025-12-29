<script setup lang="ts">
import CardComponent from "@/components/prefab/card/CardComponent.vue";
import TextInputComponent from "@/components/prefab/text_input/TextInputComponent.vue";
import DatetimeComponent from "@/components/prefab/datetime_component/DatetimeComponent.vue";
import NumberPicker from "@/components/prefab/number_picker/NumberPicker.vue";

// Define Modals
const endDateModel = defineModel("endDateModel", {
	type: Date,
});
const priorityModel = defineModel("priorityModel", {
	type: String,
	default: "Normal",
});
const startDateModel = defineModel("startDateModel", {
	type: Date,
});
const statusModel = defineModel("statusModel", {
	type: String,
	default: "In Progress",
});
const storyPointsModel = defineModel("storyPointModel", {
	type: Number,
	default: 0,
});

// Define Data
const fieldValidation: Record<string, boolean> = {
	endDateModel: true,
	priorityModel: true,
	startDateModel: true,
	statusModel: true,
}
</script>

<template>
	<CardComponent class="xx-small fill-out mt-0">
		<h3>Properties</h3>

		<TextInputComponent
			v-model="statusModel"
			label="Status"
			@isValid="(value) => (fieldValidation['statusModel'] = value)"
		/>
		<TextInputComponent
			v-model="priorityModel"
			label="Priority"
			@isValid="(value) => (fieldValidation['priorityModel'] = value)"
		/>

		<NumberPicker
			label="Story Points"
			v-model="storyPointsModel"
			:min-value="0"
			:max-value="5"
		/>

		<hr/>

		Tags

		<hr/>

		<DatetimeComponent
			v-model="startDateModel"
			label="Start Date"
			@isValid="(value) => (fieldValidation['startDateModel'] = value)"
		/>
		<DatetimeComponent
			v-model="endDateModel"
			label="End Date"
			@isValid="(value) => (fieldValidation['endDateModel'] = value)"
		/>
	</CardComponent>
</template>

<style scoped>
h3 {
	margin: 0 0 1.5rem 0;
}

</style>