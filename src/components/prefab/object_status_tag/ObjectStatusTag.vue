<script setup lang="ts">
// PROPS
const props = defineProps({
	higherOrderStatus: {
		required: true,
		type: String,
		validator: function (value: string): boolean {
			return ["backlog", "blocked", "normal", "closed"].includes(value.toLowerCase());
		}
	},
	status: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<div class="object-status-tag">
		<span :class="props.higherOrderStatus">
			{{ status}}
		</span>
	</div>
</template>

<style scoped>
span {
	padding: 0.125rem 0.75rem;
	margin-bottom: 0.125rem;
	border-radius: var(--border-radius);
	font-size: 0.75rem;

	&.backlog {
		background-color: var(--info);
	}

	&.blocked {
		background-color: var(--danger);
	}

	&.normal {
		background-color: var(--primary);
	}

	&.closed {
		background-color: var(--success);
	}
}

</style>