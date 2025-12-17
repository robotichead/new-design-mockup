<script setup lang="ts">
import { computed } from "vue";

const objectType = computed(() => {
	// TODO - Add in router to find what item they are trying to search
	// TODO - Add unit tests around above todo
  return "unknown";
});
</script>

<template>
  <h1 id="main-title">404 Not Found</h1>
  <p>Sorry, we could not find the object {{ objectType }}</p>
</template>

<style scoped></style>
