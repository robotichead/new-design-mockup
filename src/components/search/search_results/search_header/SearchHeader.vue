<script setup lang="ts">

</script>

<template>
	<div class="search-header">
		<div class="object-id-tag">#Id</div>
		<div class="object-title">Title</div>
		<div class="object-status-tag">Status</div>
	</div>
</template>

<style scoped>
.search-header {
	display: flex;
	flex-direction: row;
	width: 100%;
	transform: translateX(-0.5rem);
	padding: 0.5rem;
	background-color: var(--primary);

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