<script setup lang="ts">
import CardComponent from "@/components/render/card/CardComponent.vue";
import CardHeader from "@/components/render/card/CardHeader.vue";
import { computed } from "vue";

const objectType = computed(() => {
	// TODO - Add in router to find what item they are trying to search
	// TODO - Add unit tests around above todo
  return "unknown";
});
</script>

<template>
	<CardComponent>
		<CardHeader title="404 Not Found" />
		<p>Sorry, we could not find the object {{ objectType }}</p>
	</CardComponent>
</template>

<style scoped></style>
