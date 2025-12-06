<script setup lang="ts">
import {CircleX} from "lucide-vue-next";

defineProps({
	errorMessage: {
		type: String,
		required: true,
	},
})
</script>

<template>
	<p>
		<CircleX
			:size="14"
			aria-hidden="true"
			v-if="errorMessage.length > 0"
		/>
		{{ errorMessage }}
	</p>
</template>

<style scoped>
p {
	color: var(--text-red);
	line-height: 18px;
	padding: 0;
	margin: 0;

	> svg {
		transform: translateY(2px);
	}
}

p:before {
	content: ' ';
	white-space: pre;
}
</style>