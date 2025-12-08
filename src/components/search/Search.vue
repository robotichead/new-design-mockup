<script setup lang="ts">
import {computed} from 'vue';
import {useRoute} from 'vue-router';
import {useIntlayer} from "vue-intlayer";

// i18n
const {message, welcomeMessage } = useIntlayer("search");

// Route
const route = useRoute();
const routerPlace = computed(() => {
	return route.path;
});

</script>

<template>
	<h1 id="main-title">Search</h1>
	<p>You are currently stuck on the route {{ routerPlace }}</p>
	<p>
		<message/>
		<welcomeMessage/>
	</p>
</template>

<style scoped></style>
