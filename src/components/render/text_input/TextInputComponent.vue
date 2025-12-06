<script setup lang="ts">
import FormGroup from '@/components/render/form/FormGroup.vue';
import { computed, ref } from 'vue';

// Define Emits
const emit = defineEmits(['isValid']);

// Define Props
const props = defineProps({
    errorMessageOverride: {
        type: String,
        required: false,
        default: '',
    },
    isRequired: {
        type: Boolean,
        default: false,
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

// Computed
const getId = computed(() => {
    // Return an id made up of input- + title
    return 'input-' + props.title?.toLowerCase()?.replace(' ', '-');
});

const errorMessage = computed(() => {
    return props.errorMessageOverride === '' ? 'Please supply a value' : props.errorMessageOverride;
});

function checkValidation() {
    let is_valid = true;

    if (props.isRequired) {
        // Handle the requirement
        is_valid = model.value !== '' && model.value !== null && model.value !== undefined;
    }

    // Set the defined ref and tell parent
    hasError.value = !is_valid;
    emit('isValid', is_valid);
}
</script>

<template>
    <FormGroup>
        <label :for="getId">
            {{ title }}<span v-if="isRequired">*</span>
            <span v-if="hasError">
                {{ errorMessage }}
            </span>
        </label>
        <input
            :id="getId"
            type="text"
            :name="props.title"
            v-model="model"
            v-on:keyup="checkValidation"
            v-on:focusout="checkValidation" />
    </FormGroup>
</template>

<style scoped>
label {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 6px;

    > span {
        color: var(--text-red);
    }
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
