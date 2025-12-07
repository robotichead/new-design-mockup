<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import i18n from "@/i18n.ts";
import { onMounted } from 'vue'

// Route
const route = useRoute();
const routerPlace = computed(() => {
    return route.path;
});

// On Mount
onMounted(async () => {
	const locale = document.documentElement.lang ?? 'en';
	const messages = await import((`./Search.lang.${locale}.json`))
	i18n.global.setLocaleMessage(i18n.global.locale.value, messages.default);
});
</script>

<template>
    <h1 id="main-title">Search</h1>
    <p>You are currently stuck on the route {{ routerPlace }}</p>
    <p>{{ i18n.global.t('hello_world')}}</p>
</template>

<style scoped></style>
