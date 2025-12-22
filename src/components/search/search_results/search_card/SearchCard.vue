<script setup lang="ts">
import ObjectIdTag from "@/components/prefab/object_id_tag/ObjectIdTag.vue";
import ObjectStatusTag from "@/components/prefab/object_status_tag/ObjectStatusTag.vue";
import shortObjectType from "@/utils/dictionary/ShortObjectDictionary.ts";

// PROPS
const props = defineProps({
	higherOrderStatus: {
		required: true,
		type: String,
		validator: function (value: string): boolean {
			return ["backlog", "blocked", "normal", "closed"].includes(value.toLowerCase());
		}
	},
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
	status: {
		type: String,
		required: false,
		default: "",
	},
	title: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<div class="search-card">
		<div class="object-id-tag">
			<ObjectIdTag :id="props.id"
						 :object-type="props.objectType"/>
		</div>
		<div class="object-title">
			<ObjectIdTag :id="props.id" :object-type="props.objectType" class="object-id-tag"/>
			<a :href="`${props.objectType}/${props.id}`">{{ title }}</a>
		</div>
		<ObjectStatusTag class="object-status-tag"
						 :higher-order-status="higherOrderStatus"
						 :status="props.status"
		/>
	</div>
</template>

<style scoped>
.search-card {
	display: flex;
	flex-direction: row;
	width: 100%;
	transform: translateX(-0.5rem);
	padding: 1rem;
	border-bottom: var(--border-muted) var(--border-style) var(--border-width);

	> .object-id-tag {
		display: none;

		@media (--medium-screen) {
			display: block;
		}
	}

	> .object-id-tag,
	.object-status-tag {
		width: calc(100% / 3);

		@media (--medium-screen) {
			width: calc(100% / 6);
		}
	}

	> .object-title {
		width: calc(100% * 2 / 3);

		> a {
			text-decoration-line: none;
			color: var(--text)
		}

		@media (--medium-screen) {
			> .object-id-tag {
				display: none;
			}
		}
	}

	@media (--medium-screen) {
		width: calc(100% + 1rem);
		transform: translateX(-1rem);
	}

	@media (--large-screen) {
		width: calc(100% + 3rem);
		transform: translateX(-2rem);
	}
}

</style>