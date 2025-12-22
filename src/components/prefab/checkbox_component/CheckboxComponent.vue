<script setup lang="ts">
import { computed } from 'vue';

// Model
const model = defineModel();

// Setup Props
const props = defineProps({
	id: {
		type: String,
		required: true,
	},
	label: {
		type: String,
		required: true,
	},
})

// Computed
const checkboxId = computed(() => {
	return `checkbox-${props.id}`;
})

</script>

<template>
	<input :id="checkboxId"
		   :name="label"
		   v-model="model"
		   type="checkbox"
	/>
	<label :for="checkboxId">{{props.label}}</label>
</template>

<style scoped>
label {
	padding: 0.5rem;
}

input {
	padding: 0.5rem;
}

</style>