<script setup lang="ts">
import {computed} from "vue";
import FormGroup from "@/components/prefab/form_group/FormGroup.vue"
import TooltipComponent from "@/components/prefab/tooltip_component/TooltipComponent.vue";

// Define Props
const props = defineProps({
	isRequired: {
		type: Boolean,
		default: false,
	},
	label: {
		type: String,
		required: true,
	},
	maxValue: {
		type: Number,
		default: Number.MAX_SAFE_INTEGER,
	},
	minValue: {
		type: Number,
		default: Number.MIN_SAFE_INTEGER,
	},
	stepIncrement: {
		type: Number,
		default: 1,
	},
	tooltipMessage: {
		type: String,
		required: false,
		default: "",
	},
	tooltipTitle: {
		type: String,
		required: false,
		default: "",
	},
});

// Define Models
const model = defineModel({
	type: Number,
	default: 0,
});

// Computed
const getId = computed(() => {
	// Return an id made up of input- + title
	return "input-" + props.label?.toLowerCase()?.replace(" ", "-");
});

const isMax = computed(() => {
	return model.value >= props.maxValue;
});

const isMin = computed(() => {
	return model.value <= props.minValue;
});

// Define Methods
function applyDecrement() {
	// Do nothing if we reach the lowest value
	if (isMin.value) return;

	// We don't want to increment past the min value - so we define a local increment
	let increment = Math.abs(props.minValue - model.value);
	increment = increment < Math.abs(props.stepIncrement) ? increment : Math.abs(props.stepIncrement);

	// Apply the incrementation, and make sure it is not bigger than the max value
	let update_value = model.value - increment;
	update_value = update_value > props.maxValue ? props.maxValue : update_value;

	//Mutate the value
	model.value = update_value;
}

function applyIncrement() {
	// Do nothing if we reach the highest value
	if (isMax.value) return;

	// We don't want to increment past the max value - so we define a local increment
	let increment = Math.abs(props.maxValue - model.value);
	increment = increment < Math.abs(props.stepIncrement) ? increment : Math.abs(props.stepIncrement);

	// Apply the incrementation, and make sure it is not lower than the min value
	let update_value = model.value + increment;
	update_value = update_value < props.minValue ? props.minValue : update_value;

	// Mutate the value
	model.value = update_value;
}

function manualUpdate(event: KeyboardEvent) {
	const target = (<HTMLInputElement>event.target);
	let update_value : number = target.valueAsNumber;

	// Make sure number is valid
	if (isNaN(update_value)) update_value = 0;

	// Make sure the values fall within the min and max
	update_value = update_value > props.maxValue ? props.maxValue : update_value;
	update_value = update_value < props.minValue ? props.minValue : update_value;

	// Mutate the value
	model.value = update_value;
}
</script>

<template>
	<FormGroup>
		<label :for="getId">
			<TooltipComponent
				v-if="props.tooltipMessage !== ''"
				:title="tooltipTitle"
				:message="tooltipMessage"
				:id="getId"
			/>
			{{
				label
			}}<span v-if="isRequired" aria-description="Field is required">*</span>
		</label>
		<div class="number-row">
			<button type="button"
					class="negative"
					v-bind:aria-label="`Decrement current value of ${model} by ${props.stepIncrement}`"
					v-bind:disabled="isMin"
					v-on:click="applyDecrement"
			>-
			</button>
			<input type="number"
				   :id="getId"
				   aria-label="Current value picked"
				   aria-describedby="helper-text-explanation"
				   v-model="model"
				   v-on:keyup="manualUpdate"
				   v-on:focusout="manualUpdate"
			/>
			<button type="button"
					class="additive"
					v-bind:aria-label="`Increment current value of ${model} by ${props.stepIncrement}`"
					v-bind:disabled="isMax"
					v-on:click="applyIncrement"
			>+
			</button>
		</div>
	</FormGroup>

</template>

<style scoped>
.number-row {
	display: flex;
	flex-direction: row;
	justify-content: flex-start;

	> input {
		width: calc(100% - 6rem);
		border-radius: 0;
		border-top: solid var(--border-width);
		border-bottom: solid var(--border-width);
		border-left: 0;
		border-right: 0;

		&:focus {
			border-top: solid 2px var(--secondary);
			border-bottom: solid 2px var(--secondary);
			border-left: 0;
			border-right: 0;
			outline: none;
			padding: calc(0.5rem - 1px);
		}
	}

	> button {
		width: 3rem;
		border: none;

		&.additive {
			background-color: var(--primary);
			border-radius: 0 var(--border-radius) var(--border-radius) 0;

			&:hover {
				background-color: var(--primary-hover);
			}
		}

		&.negative {
			background-color: var(--secondary);
			border-radius: var(--border-radius) 0 0 var(--border-radius);

			&:hover {
				background-color: var(--secondary-hover);
			}
		}

	}
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}

input[type=number] {
	-moz-appearance: textfield; /* Firefox */
}

</style>
