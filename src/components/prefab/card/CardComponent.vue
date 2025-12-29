<script setup lang="ts">
</script>

<template>
	<div class="card">
		<slot></slot>
	</div>
</template>

<style scoped>
.card {
	max-width: var(--medium-card-width);
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

	&.xx-small {
		max-width: var(--xx-small-card-width);
	}

	&.x-small {
		max-width: var(--x-small-card-width);
	}

	&.small {
		max-width: var(--small-card-width);
	}

	&.large {
		max-width: var(--large-card-width);
	}

	&.x-large {
		max-width: var(--x-large-card-width);
	}

	&.xx-large {
		max-width: var(--xx-large-card-width);
	}

	&.fill-out {
		width: calc(100% - 1rem);
		margin: 0 0.5rem;

		@media (--medium-screen) {
			width: calc(100% - 2rem);
		}

		@media (--large-screen) {
			width: calc(100% - 4rem);
		}
	}
}
</style>
