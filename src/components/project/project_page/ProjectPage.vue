<script setup lang="ts">
import GeneralDetailComponent from "@/components/project/project_page/general_detail/GeneralDetailComponent.vue";
import PropertiesComponent from "@/components/project/project_page/properties_component/PropertiesComponent.vue";
</script>

<template>
	<div class="project-information">
		<GeneralDetailComponent />
		<PropertiesComponent />
	</div>
</template>

<style scoped>
.project-information {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: start;
}
</style>
