<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import i18n from "@/i18n.ts";

// Route
const route = useRoute();

// const destination = computed(() => {
//     return route.meta.destination?.toString() ?? 'default';
// });

const routerPlace = computed(() => {
    return route.path;
});
</script>

<template>
<!--    <h1 id="main-title">{{ $t(`search.title.${destination}`) }}</h1>-->
    <h1 id="main-title">Search</h1>
    <p>Destination: {{ i18n.global.t('search.destination', 'project fallback')}}</p>
    <p>You are currently stuck on the route {{ routerPlace }}</p>
    <p>{{ i18n.global.t('hello_world', 'fallback hello world')}}</p>
</template>

<style scoped></style>
