<script setup lang="ts">
import CardComponent from "@/components/prefab/card/CardComponent.vue";
import CardHeader from "@/components/prefab/card/CardHeader.vue";
import {computed} from "vue";
import {useRoute} from "vue-router";
import i18n from "@/i18n.ts";
import {onMounted} from "vue";

// Route
const route = useRoute();
const routerPlace = computed(() => {
	return route.path;
});

// On Mount
onMounted(async () => {
	const locale = document.documentElement.lang ?? "en";

	if (locale === "en") {
		// Language included in template
		return;
	}

	// Get messages
	const messages = await import(`./SearchPage.lang.${locale}.json`);
	i18n.global.setLocaleMessage(i18n.global.locale.value, messages.default);
});
</script>

<template>
	<CardComponent>
		<CardHeader title="Search"/>
		<p>You are currently stuck on the route {{ routerPlace }}</p>
		<p>{{ i18n.global.t("hello_world", "Hello World") }}</p>
	</CardComponent>
</template>

<style scoped></style>
