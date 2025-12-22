<script setup lang="ts">
import { Search } from "lucide-vue-next"

</script>

<template>
	<Search />
	<input type="search" placeholder="Search Projects" />
</template>

<style scoped>
input {
	width: 100%;
	padding: 0.5rem 0.5rem 0.5rem 2.25rem;
}

svg {
	width: 1.5rem;
	height: 1.5rem;
	position: fixed;
	transform: translateY(0.75rem) translateX(0.5rem);
	color: var(--text-red)
}

</style>