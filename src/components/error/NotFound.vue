<script setup lang="ts">
import { computed } from 'vue';

const objectType = computed(() => {
    return 'unknown';
});
</script>

<template>
    <h1 id="main-title">404 Not Found</h1>
    <p>Sorry, we could not find the object {{ objectType }}</p>
</template>

<style scoped></style>
