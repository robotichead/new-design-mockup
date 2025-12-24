<script setup lang="ts">
import shortObjectType from "@/utils/dictionary/ShortObjectDictionary.ts"

// PROPS
const props = defineProps({
	id: {
		type: Number,
		required: true,
	},
	objectType: {
		required: true,
		type: String,
		validator: function (value: string): boolean {
			return shortObjectType[value] !== undefined;
		}
	},
});
</script>

<template>
	<span :class="`object-id-tag ${props.objectType}`">
		<RouterLink :to="`${props.objectType}/${props.id}`">
			{{ shortObjectType[props.objectType] }}-{{ props.id }}
		</RouterLink>
	</span>
</template>

<style scoped>
span {
	display: table;
	padding: 0.125rem 0.75rem;
	margin-bottom: 0.125rem;
	border-radius: var(--border-radius);
	font-size: 0.75rem;

	> a {
		text-decoration-line: none;

		&.customer {
			color: var(--customer-text);
		}

		&.kanban_board {
			color: var(--kanban-board-text);
		}

		&.kanban_card {
			color: var(--kanban-card-text);
		}

		&.organisation {
			color: var(--organisation-text);
		}

		&.request_for_change {
			color: var(--request-for-change-text);
		}

		&.requirement {
			color: var(--requirement-text);
		}

		&.requirement_item {
			color: var(--requirement-item-text);
		}

		&.project {
			color: var(--project-text);
		}

		&.task {
			color: var(--task-text);
		}
	}

	&.customer {
		background-color: var(--customer-background);
	}

	&.kanban_board {
		background-color: var(--kanban-board-background);
	}

	&.kanban_card {
		background-color: var(--kanban-card-background);
	}

	&.organisation {
		background-color: var(--organisation-background);
	}

	&.request_for_change {
		background-color: var(--request-for-change-background);
	}

	&.requirement {
		background-color: var(--requirement-background);
	}

	&.requirement_item {
		background-color: var(--requirement-item-background);
	}

	&.project {
		background-color: var(--project-background);
	}

	&.task {
		background-color: var(--task-background);
	}
}

</style>