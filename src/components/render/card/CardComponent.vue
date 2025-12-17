<script setup lang="ts">
</script>

<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  max-width: var(--max-card-width);
  margin: auto;
  border-radius: var(--border-radius);
  background-color: var(--bg-light);
	padding: 0.25rem 0.5rem;

	@media (--medium-screen) {
		padding: 0.5rem 1rem;
	}

	@media (--large-screen) {
		padding: 1rem 2rem;
	}
}
</style>
