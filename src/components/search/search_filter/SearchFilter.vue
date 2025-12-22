<script setup lang="ts">
import { ref } from "vue";
import CardComponent from "@/components/prefab/card/CardComponent.vue";
import CardHeader from "@/components/prefab/card/CardHeader.vue";
import SearchInput from "@/components/search/search_filter/search_input/SearchInput.vue";
import CheckboxComponent from "@/components/prefab/checkbox_component/CheckboxComponent.vue";

// Ref
const filterOutClosedObjects = ref(true);
const filterOutExternalGroups = ref(true);
</script>

<template>
	<CardComponent>
		<CardHeader title="Search Projects" />
		<p class="instructions">User the filters below to refine your results.</p>
		<SearchInput />
		<div class="search-options">
			<div class="search-option">
				<CheckboxComponent
					label="Filter out closed objects"
					id="filter-out-closed-objects"
					v-model="filterOutClosedObjects"
				/>
			</div>
			<div class="search-option">
				<CheckboxComponent
					label="Filter out external groups"
					id="filter-out-external-groups"
					v-model="filterOutExternalGroups"
				/>
			</div>
		</div>
	</CardComponent>
</template>

<style scoped>
.instructions {
	font-weight: lighter;
	margin: 0 0 0.5rem 0;
}

.search-options {
	display: flex;
	flex-direction: column;
	padding: 0.5rem 0;

	> .search-option {
		padding: 0.5rem 0;
	}

	@media (--medium-screen) {
		flex-direction: row;
		justify-content: space-between;
	}
}
</style>