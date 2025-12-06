<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        required: false,
        default: '',
    },
    description: {
        type: String,
        required: false,
        default: '',
    },
});
</script>
<template>
    <div
        v-if="props.title !== ''"
        class="card-header">
        <h1 id="main-title">{{ props.title }}</h1>
        <p v-if="props.description !== ''">{{ props.description }}</p>
    </div>
</template>

<style scoped>
.card-header {
    margin: -1rem -2rem 1rem -2rem;
    padding: 1rem 2rem;
    border-radius: var(--border-radius) var(--border-radius) 0 0;

    > h1 {
        font-size: 26px;
        font-weight: bolder;
    }

    > p {
        font-size: 14px;
        font-weight: lighter;
    }
}
</style>
