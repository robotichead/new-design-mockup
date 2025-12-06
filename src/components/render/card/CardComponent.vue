<script setup lang="ts"></script>

<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<style scoped>
.card {
    max-width: var(--max-card-width);
    margin: auto;
    padding: 1rem 2rem;
    border-radius: var(--border-radius);
    border-style: var(--border-style);
    border-width: var(--border-width);
    border-color: var(--border);
}
</style>
